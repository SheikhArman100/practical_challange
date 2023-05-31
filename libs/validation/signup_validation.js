export const signup_validation = (values) => {
  const errors = {};

  //! username validation
  if (!values.username) {
    errors.username = "Username Required";
  } else if (values.username.includes(" ")) {
    errors.username = "Invalid Username...!";
  }

  //!email validation
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  //phoneNumberValidation
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (!/^01[0-9]{9}$/.test(values.phoneNumber)) {
    errors.phoneNumber = "Invalid phone number";
  }
  

  //!password validation
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 8 || values.password.length > 20) {
    errors.password = "Must be greater then 8 and less then 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  }

  //!confirmPassword validation
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password Required";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Password Not Match...!";
  } else if (values.confirmPassword.includes(" ")) {
    errors.confirmPassword = "Invalid Confirm Password";
  }

  return errors;
};