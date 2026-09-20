function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let interest = document.getElementById("interest").value;

    if (name == "") {
        alert("Please enter your name");
        return false;
    }

    if (email == "") {
        alert("Please enter your email");
        return false;
    }

    if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
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

    if (interest == "") {
        alert("Please select your photography interest");
        return false;
    }

    alert("Registration successful");
    return true;
}
