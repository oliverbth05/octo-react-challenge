/**
 * WelcomeForm.js
 *
 * This component contains the Redux Form used to collect user input.
 * Its props are passed down from the Welcome container.
 *
 * @see https://redux-form.com/7.4.2/docs/api/field.md/
 */
 
import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';

import { RFTextField } from 'components/ReduxFormFields/RFTextField';

import { validate } from './validate';

class WelcomeForm extends React.PureComponent {

  
  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="flex flex-column" onSubmit = {handleSubmit}>
        {/* TODO: Add elements to form to collect user input */}
        <Field
          name="firstName"
          component={RFTextField}
          label="First Name" 
        />
        <Field
          name="lastName"
          component={RFTextField}
          label="Last Name"
        />
        <Field
          name="userName"
          component={RFTextField}
          label="Username"
        />
        <div className="center mt3">
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

WelcomeForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

// TODO: Add validation
// @see https://redux-form.com/7.4.2/docs/api/reduxform.md/

export default reduxForm({
  form: 'welcome',
  validate
})(WelcomeForm);
