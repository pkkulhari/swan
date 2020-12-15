var username = document.signup_form.username;
var email = document.signup_form.email;
var password_1 = document.signup_form.password_1;
var password_2 = document.signup_form.password_2;
var agreement = document.signup_form.agreement;

/*<============= Inputs Validation =============>*/

/*--- Username Validation ---*/
function val_username(username, min, max) {
    var username_len = username.value.length;
    var username_regexp = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;

    if (username_len == 0) {
        var error_msg = "Choose an username";
        addError(username, error_msg);
        return false;
    }
    if (username_len < min || username_len > max) {
        var error_msg = "Username must be bitween " + min + " and " + max + " characters.";
        addError(username, error_msg);
        return false;
    }
    if (!username.value.match(username_regexp)) {
        var error_msg = "Invalid username. You can use letters, numbers, dots and underscores.";
        addError(username, error_msg);
        return false;
    }

    removeError(username);
    return true;
}

/*--- E-Mail Validation ---*/
function val_email(email) {
    var email_len = email.value.length;
    var email_regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email_len == 0) {
        var error_msg = "Enter a email address";
        addError(email, error_msg);
        return false;
    }
    if (!email.value.match(email_regexp)) {
        var error_msg = "That email address appears to be invalid.";
        addError(email, error_msg);
        return false;
    }

    removeError(email);
    return true;
}

/*--- Password-1 Validation ---*/
function val_password_1(password_1, min) {
    var password_1_len = password_1.value.length;

    if (password_1_len == 0) {
        var error_msg = "Enter a password";
        addError(password_1, error_msg);
        return false;
    }
    if (password_1_len < min) {
        var error_msg = "Password should be at least 5 characters long.";
        addError(password_1, error_msg);
        return false;
    }

    removeError(password_1);
    return true;
}

/*--- Password-2 Validation ---*/
function val_password_2(password_1, password_2) {
    var password_2_len = password_2.value.length;

    if (password_2_len == 0) {
        var error_msg = "Confirm your password";
        addError(password_2, error_msg);
        return false;
    }
    if (password_1.value != password_2.value) {
        var error_msg = "Those passwords didn't match. Try again.";
        addError(password_2, error_msg);
        return false;
    }

    removeError(password_2);
    return true;
}

/*--- Agreement Validation ---*/
function val_agreement(agreement) {
    if (!agreement.checked) {
        var error_msg = "You must agree before submiting.";
        x = agreement.nextElementSibling.nextElementSibling;
        x.innerHTML = error_msg;
        x.className = "error";
        agreement.nextElementSibling.classList.add("error");
        return false;
    }

    x.innerHTML = "";
    x.removeAttribute("class");
    agreement.nextElementSibling.classList.remove("error");
    return true;
}

/*<=============== Error Messages ============>*/
function addError(element, error_msg) {
    element.nextElementSibling.innerHTML = error_msg;
    element.nextElementSibling.className = "error";
    element.classList.add("error");
}

function removeError(element) {
    element.nextElementSibling.innerHTML = "";
    element.nextElementSibling.removeAttribute("class");
    element.classList.remove("error");
}

/*<=============== Events ============>*/

/*--- Input Events ---*/
username.addEventListener("focusout", function () {
    val_username(username, 4, 30);
});
username.addEventListener("input", function () {
    if (username.nextElementSibling.classList.contains("error")) {
        val_username(username, 4, 30);
    }
});

email.addEventListener("focusout", function () {
    val_email(email);
});
email.addEventListener("input", function () {
    if (email.nextElementSibling.classList.contains("error")) {
        val_email(email);
    }
});

password_1.addEventListener("focusout", function () {
    val_password_1(password_1, 5);
});
password_1.addEventListener("input", function () {
    if (password_1.nextElementSibling.classList.contains("error")) {
        val_password_1(password_1, 5);
    }
});

password_2.addEventListener("focusout", function () {
    val_password_2(password_1, password_2);
});
password_2.addEventListener("input", function () {
    if (password_2.nextElementSibling.classList.contains("error")) {
        val_password_2(password_1, password_2);
    }
});

agreement.addEventListener("click", function () {
    val_agreement(agreement);
});

/*--- Submit Event ---*/
function fValidation_signup() {
    var x = [
        val_username(username, 4, 30),
        val_email(email),
        val_password_1(password_1, 5),
        val_password_2(password_1, password_2),
        val_agreement(agreement)
    ]

    if (x.includes(false)) {
        return false;
    } else {
        return true;
    }
}