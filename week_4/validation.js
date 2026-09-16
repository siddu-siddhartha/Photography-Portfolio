function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name == "") {
        alert("Please enter your name");
        return false;
    }

    if (email == "") {
        alert("Please enter your email");
        return false;
    }

    if (phone.length != 10) {
        alert("Phone number must contain 10 digits");
        return false;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters");
        return false;
    }

    if (password != confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    alert("Registration successful");
    return true;
}