import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export const RFTextField = ({
  input, label, meta: { touched, error }, ...custom
}) => (
  <TextField
    label={label}
    error={touched && error}
    {...input}
    {...custom}
  />
);

RFTextField.propTypes = {
  input: PropTypes.any.isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.any
  }).isRequired
};
