const SignupValidation = (value) => {
    const errors2 = {}  
    const regEmail = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    if (!value.name) {
        errors2.name = "Name is required"
    }

    if (!value.email) {
        errors2.email = "Email is required"
    }
    else if(!regEmail.test(value.email)) {
        errors2.email = "Enter valid email"
    }

    if (!value.password) {
        errors2.password = "Password is required"
    }

    return errors2;
}

export default SignupValidation