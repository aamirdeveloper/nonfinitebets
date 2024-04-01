const SigninValidation = (value) => {
    const errors = {}  
    const regEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (!value.email) {
        errors.email = "Email is required"
    }
    else if(!regEmail.test(value.email)) {
        errors.email = "Enter valid email"
    }

    if (!value.password) {
        errors.password = "Password is required"
    }

    return errors;
}

export default SigninValidation