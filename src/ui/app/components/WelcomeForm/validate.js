/* Checks to see that the field:
  a. Isn't empty
  b. Isn't only whitespace (ie. Empty)
*/

export const validate = (values) => {
  const errors = {};
  if (values.get('firstName')) { // Can't call trim() on undefined
    if (!values.get('firstName').trim()) { // Checks if the value is only whitespaces
      errors.firstName = true;
    }
  } else {
    errors.firstName = true;
  }
  if (values.get('lastName')) {
    if (!values.get('lastName').trim()) {
      errors.lastName = true;
    }
  } else {
    errors.lastName = true;
  }
  if (values.get('userName')) {
    if (!values.get('userName').trim()) {
      errors.userName = true;
    }
  } else {
    errors.userName = true;
  }
  return errors;
};
