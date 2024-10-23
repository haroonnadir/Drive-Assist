function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var city = document.getElementById("city").value;

    // Reset error messages
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("phone-error").textContent = "";
    document.getElementById("gender-error").textContent = "";
    document.getElementById("city-error").textContent = "";

    // Validation
    if (name.trim().length < 4 || !/^[a-zA-Z ]+$/.test(name)) {
        document.getElementById("name-error").textContent =
            "Name must be at least 4 characters long and contain only letters and spaces.";
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        document.getElementById("email-error").textContent =
            "Invalid email address";
        return false;
    }

    if (password.length < 8 || !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password)) {
        document.getElementById("password-error").textContent =
            "Password must be at least 8 characters long and contain letters, numbers, and special characters.";
        return false;
    }

    var phoneRegex = /^\d{11}$/;
    if (!phone.match(phoneRegex)) {
        document.getElementById("phone-error").textContent =
            "Invalid phone number. Use format like 03001234567.";
        return false;
    }

    if (!gender) {
        document.getElementById("gender-error").textContent =
            "Please select a gender.";
        return false;
    }

    if (city === "") {
        document.getElementById("city-error").textContent =
            "Please select a city.";
        return false;
    }

    return true;
}
