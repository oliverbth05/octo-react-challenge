import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form/immutable';
import Button from '@material-ui/core/Button';
import { RFTextField } from 'components/ReduxFormFields/RFTextField';

import { validate } from './validate'; // Validate function for RF

class WelcomeForm extends React.PureComponent {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="flex flex-column" onSubmit={handleSubmit}>
        <Field name="firstName" component={RFTextField} label="First Name" />
        <Field name="lastName" component={RFTextField} label="Last Name" />
        <Field name="userName" component={RFTextField} label="Username" />
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

export default reduxForm({
  form: 'welcome',
  validate
})(WelcomeForm);
