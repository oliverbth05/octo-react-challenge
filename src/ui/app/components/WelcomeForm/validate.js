/**
 * validate.js
 *
 * This validate function is invoked synchronously from Redux Form
 * whenever the form is submitted. Errors are passed back via the
 * errors object, whose props correspond to the name of the Redux
 * Form field experiencing the error.
 *
 * @see https://redux-form.com/7.4.2/examples/syncvalidation/
 *
 * @param {} values An immutable Map of values from Redux Form
 * @returns An errors object with any validation errors
 */
export const validate = (values) => {
  const errors = {};  



  if (values.get('firstName')) { // Can't call trim() on undefined
    if (!values.get('firstName').trim()) { // Checks if the value is only whitespaces
      errors.firstName = true
    }
  }
  else {
    errors.firstName = true
  }



  if (values.get('lastName')) {
    if (!values.get('lastName').trim()) {
      errors.lastName = true
    }
  }
  else {
    errors.lastName = true
  }



  if (values.get('userName')) {
    if (!values.get('userName').trim()) {
      errors.userName = true
    }
  }
  else {
    errors.userName = true
  }
  
  return errors;
};
