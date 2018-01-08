import React from 'react';
import uikit from 'react-uikit-base';

import FormInput from 'react-uikit-form/lib/form-input';


const textArea = (props) => {
  const classNames =  `uk-form-row ${props.className ? props.className : ''}`;

  return <div className={classNames}>
    <label className='uk-form-label'>{props.label}</label>
    <textarea defaultValue={props.value}/>
  </div>;
};

const TextArea  = uikit.base(textArea);

const FormReduxInput = field => {
  const {
    blank,
    button,
    context,
    disabled,
    help,
    icon,
    input,
    label,
    options,
    Password,
    placeholder,
    row,
    size,
    toggle,
    type,
    width,
    meta
  } = field;

  if (type === 'textarea') {
    return <TextArea 
     {...input}
      label={label}
      blank={blank}
      button={button}
      context={context}
      disabled={disabled}
      help={meta.touched && meta.error ? { ...help, text: meta.error, context: 'danger' } : null}
      icon={icon}
      options={options}
      Password={Password}
      placeholder={placeholder}
      size={size}
      toggle={toggle}
      type={type}
      width={width}
      row={row}
    />
  } else {
    return <FormInput
      {...input}
      label={label}
      blank={blank}
      button={button}
      context={context}
      disabled={disabled}
      help={meta.touched && meta.error ? { ...help, text: meta.error, context: 'danger' } : null}
      icon={icon}
      options={options}
      Password={Password}
      placeholder={placeholder}
      size={size}
      toggle={toggle}
      type={type}
      width={width}
      row={row}
    />;
  }
};

export default FormReduxInput;
