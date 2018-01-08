import React from 'react';
import autobind from 'class-autobind';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import actions from '../../../actions';
import mapStateToProps from '../../../mapStateToProps';
import Grid from 'react-uikit-grid';
import titleize from '../../../core/helpers/titleize';
import Form from 'react-uikit-form';
import FormReduxInput from './form-redux-input';
import Button from './Button-shared';


function FilterFormContainer (ComposedClass, formName) {
  const rdxForm = reduxForm(
    {
      form: formName
    },
    actions
  )(ComposedClass);

  function extendMapStateToProps (state) {
    return {
      ...mapStateToProps(state),
      forms : state.form
    };
  }

  return connect(extendMapStateToProps, actions)(rdxForm);
}


class Filter extends React.Component {
  constructor () {
    super(...arguments);
    autobind(this);
  }

  handelSubmit (e) {
    e.preventDefault();

    const {
      formName,
      forms,
      onSubmit
    } = this.props;

    const filter = forms[formName].values;

    if (filter) {
      onSubmit(filter);
    }
  }

  render () {
    const {
      heading,
      items,
      layout
    } = this.props;

    if (!items) return null;

    const formItems = items.map(item => {
      const name = item.name || item.label;
      const label = item.label || item.name;

      let condition;

      if (item.type === 'number') {
        condition = <Field name={`${name}.condition`} component='select'>
          <option></option>
          <option value='equalTo'>equal to</option>
          <option value='greaterThan'>greater than</option>
          <option value='greaterThanEqualTo'>greater than</option>
          <option value='lessThan'>less than</option>
          <option value='lessThanEqualTo'>less than</option>
          <option value='between'>Between</option>
          <option value='min'>minimum</option>
          <option value='max'>maximum</option>
          <option value='custom'>custom</option>
        </Field>;

      } else if (item.type === 'checkbox' || item.type === 'radio') {
        condition = null;
      } else {
        condition = <Field name={`${name}.condition`} component='select'>
          <option></option>
          <option value='equals'>Equals</option>
          <option value='beginsWith'>Begins With</option>
          <option value='endsWith'>Ends With</option>
          <option value='minLength'>Min Length</option>
          <option value='maxLength'>Max Length</option>
          <option value='contains'>Contains</option>
          <option value='custom'>Custom</option>
        </Field>;
      }

      return <div key={name}>
        <Field
          component={FormReduxInput}
          display='inline'
          label={titleize(label)}
          name={`${name}.value`}
          type={item.type}
        />
          {condition}
      </div>;
    });

    return <Grid>
      <Form
        col='1-1'
        title={heading || 'Filters'}
        layout={layout}
        onSubmit={this.handelSubmit}
      >
        <div className='Shared-filter'>
          {formItems}
          <Button type='submit' body='Filter' margin='top'/>
        </div>
      </Form>
    </Grid>;
  }
};

const FilterForm = (props) => {
  const Form = FilterFormContainer(Filter, props.formName);
  return <Form {...props} />;
};


export default connect(mapStateToProps, actions)(FilterForm);
