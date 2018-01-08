import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';




const SelectInput = (props) => {
  if (props.loadOptions) {
    return <div className='Shared-select-input'>
      <label className='uk-form-label uk-margin-top'>{props.label}</label>
      <Select.Async
        {...props.input}
        type="text"
        loadOptions={props.loadOptions}
        multi={props.multi}
        onBlur={() => props.input.onBlur(props.input.value)}
      />

      { props.meta.touched && props.meta.error
        ? <p className='uk-form-help-block uk-form-danger'>
          {props.meta.error}
        </p>
        : null
      }

    </div>;
  } else {
    return <div className='Shared-select-input'>
      <label className='uk-form-label uk-margin-top'>{props.label}</label>
      <Select
        {...props.input}
        type="text"
        options={props.options}
        multi={props.multi}
        onBlur={() => props.input.onBlur(props.input.value)}
      />

      { props.meta.touched && props.meta.error
        ? <p className='uk-form-help-block uk-form-danger'>
          {props.meta.error}
        </p>
        : null
      }
    </div>;
  }

};

export default SelectInput;
