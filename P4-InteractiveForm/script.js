const errorName = document.getElementById('errorName');
const errorEmail = document.getElementById('errorEmail');
const errorPhoneNum = document.getElementById('errorPhoneNum');

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtPhoneNum = document.getElementById('txtPhoneNum');
const btnSubmit = document.getElementById('btnSubmit');

const successfulMessage = document.getElementById('successfulMessage');


function isValidName(name) {
    let validation = true;
    errorName.textContent = "";

    if (name === "") {
        validation = false;
        errorName.textContent = "ERROR - Please enter your name";
    }

    return validation;
}

function isValidEmail(email) {
    let validation = true;
    errorEmail.textContent = "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
        validation = false;
        errorEmail.textContent = "ERROR - Please enter your email address";
    } else if (emailPattern.test(email) == false) {
        validation = false;
        errorEmail.textContent = "ERROR - Please enter a valid email address";
    }
    
    return validation;
}

function isValidPhoneNum(phoneNum) {
    let validation = true;
    errorPhoneNum.textContent = "";

    const phoneNumPattern = /^\d{10}$/;

    if (phoneNum.trim() === "") {
        validation = false;
        errorPhoneNum.textContent = "ERROR - Please enter your phone number";
    } else if (phoneNumPattern.test(phoneNum) ==  false) {
        validation = false;
        errorPhoneNum.textContent = "ERROR - Phone number must be exactly 10 digits";
    }
    
    return validation;
}

function submitForm(){
    successfulMessage.textContent = "";

    let name = txtName.value;
    let email = txtEmail.value;
    let phoneNum = txtPhoneNum.value;

    let validName = isValidName(name);
    let validEmail = isValidEmail(email);
    let validPhone = isValidPhoneNum(phoneNum);

    if (validName && validEmail && validPhone) {
        successfulMessage.textContent = "Registration successful!";
        console.log(name);
        console.log(email);
        console.log(phoneNum);
        alert("Registration successful!");
    }
}

function init() {
    btnSubmit.addEventListener('click', submitForm);

    txtName.addEventListener('blur', () => isValidName(txtName.value));
    txtEmail.addEventListener('blur', () => isValidEmail(txtEmail.value));
    txtPhoneNum.addEventListener('blur', () => isValidPhoneNum(txtPhoneNum.value));
}

window.onload = init;