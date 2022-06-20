let x1 = true;  
let x2 = true;
let x4 = true;
let x5 = true;
let x6 = true;

const inputLoginEmail = document.getElementById("inputLoginEmail");
const inputLoginPassword = document.getElementById("inputLoginPassword");
const warningSignIn = document.getElementById("warningSignIn");

const inputName = document.getElementById('name');
const inputUserName = document.getElementById('userName');
const inputEmail = document.getElementById('email');
const inputNumber = document.getElementById('number');
const inputPassword = document.getElementById('password');
const inputConfirmPassword = document.getElementById('confirmPassword');
const warningEmail = document.getElementById("warningEmail");
const warningPassword = document.getElementById("warningPassword");
const warningUserName = document.getElementById("warningUserName");
const warningNumber = document.getElementById("warningNumber");
const signUpButton = document.getElementById('signUpButton');



function validateUserName(){
    Uname = inputUserName.value;

    if(checkUsernameUse(Uname)){
        warningUserName.style.display="none";
        inputUserName.style.borderColor="#2b6dad";
        x1 = true;
    }
    else{
        warningUserName.style.display="block";
        inputUserName.style.borderColor='red';
        x1 = false;
    }
}

function checkUsernameUse(userName){
    for(let i=0; i<UserArray.length; i++){
        if(userName == UserArray[i].userName){
            return false;
        }
     }
    return true;
}

function checkEmailUse(mail){
    for(let i=0; i<UserArray.length; i++){
        if(mail == UserArray[i].email){
            return false;
        }
     }
    return true;
}

function validateEmail(){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    mail = inputEmail.value;

    if(re.test(String(mail).toLowerCase()) && checkEmailUse(mail)){
        warningEmail.style.display="none";
        inputEmail.style.borderColor="#2b6dad";
        x2 = true;
    }
    else{
        warningEmail.style.display="block";
        inputEmail.style.borderColor='red';
        x2 = false;
    }

}



function validatePassword(){
    pass = inputPassword.value;
    if(!(pass.length >= 4 && pass.length <= 60)){
        warningPassword.style.display="block";
        inputPassword.style.borderColor='red';
        x4 = false;
    }
    else{
        warningPassword.style.display="none";
        inputPassword.style.borderColor="#2b6dad";
        x4 = true;
    }
}

function validateConfirmPassword(){
    Pass = inputPassword.value;
    confirmPass = inputConfirmPassword.value;
    if(confirmPass != Pass){
        warningConfirmPassword.style.display="block";
        inputConfirmPassword.style.borderColor='red';
        x5 = false;
    }
    else{
        warningConfirmPassword.style.display="none";
        inputConfirmPassword.style.borderColor="#2b6dad";
        x5 = true;
    }
}

function validateNumber(){
    const phoneno = /^\d{11}$/;
    num = inputNumber.value;

    if(!(num.match(phoneno))){
        warningNumber.style.display="block";
        inputNumber.style.borderColor='red';
        x6 = false;
    }
    else{
        warningNumber.style.display="none";
        inputNumber.style.borderColor="#2b6dad";
        x6 = true;
    }
}

function signUp(){
    N = inputName.value;
    UN = inputUserName.value;
    E = inputEmail.value;
    Nm = inputNumber.value;
    P = inputPassword.value;
    CP = inputConfirmPassword.value;

    if(N != '' && UN != '' && E != '' && Nm != '' && P != '' && CP != '' && x1 && x2 && x4 && x5 && x6){
        newUser = new user(N, UN, E, Nm, P);
        UserArray.push(newUser);
    
        inputName.value = '';
        inputUserName.value = '';
        inputEmail.value = '';
        inputNumber.value = '';
        inputPassword.value = '';
        inputConfirmPassword.value = '';

        window.location.href = "homePage.html";
    
    }
    else{}
}

function signIn(){
    E = inputLoginEmail.value;
    P = inputLoginPassword.value;
    correct = false;

    for(let i=0; i<UserArray.length; i++){
        if((E == UserArray[i].email) && (P == UserArray[i].password)){
            correct = true;
        }
    }

    if(correct){
        window.location.href = "homePage.html";
    }
    else{
        warningSignIn.style.display="block";
    }
}