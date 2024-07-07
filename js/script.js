

var usernameInput = document.getElementById("usernameInput");
var userEmailInput = document.getElementById("userEmailInput");
var userPasswordInput = document.getElementById("userPasswordInput");

var userinfo;
if (localStorage.getItem("users") == null) {
    userinfo = [];
} else {
    userinfo = JSON.parse(localStorage.getItem("users"));
}

// sign in 
function signUp() {
    var isValidInput = userInputValidation();
    var isUserExist = isExist();

    if (isValidInput && !isUserExist) {
        var user = {
            name: usernameInput.value,
            email: userEmailInput.value,
            password: userPasswordInput.value
        };

        userinfo.push(user);
        localStorage.setItem("users", JSON.stringify(userinfo));

        var confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");

        var signIn = document.getElementById("signIn");
        signIn.classList.replace("d-none", "d-block");
    } else {
        var tryAgainMsg = document.getElementById("tryAgainMsg");
        tryAgainMsg.classList.replace("d-none", "d-block");
    }
}

// name validation 
function userNameValidation() {
    var usernameAlert = document.getElementById("usernameAlert");
    var regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/;

    if (regex.test(usernameInput.value) && usernameInput.value != "") {
        usernameInput.classList.add("is-valid");
        usernameInput.classList.remove("is-invalid");
        usernameAlert.classList.replace("d-block", "d-none");
        return true;
    } else {
        usernameInput.classList.add("is-invalid");
        usernameInput.classList.remove("is-valid");
        usernameAlert.classList.replace("d-none", "d-block");
        return false;
    }
}

// password validation 
function userPasswordValidation() {
    var regex = /^.{5,15}$/;
    var userPasswordAlert = document.getElementById("userPasswordAlert");

    if (regex.test(userPasswordInput.value) && userPasswordInput.value != "") {
        userPasswordInput.classList.add("is-valid");
        userPasswordInput.classList.remove("is-invalid");
        userPasswordAlert.classList.replace("d-block", "d-none");
        return true;
    } else {
        userPasswordInput.classList.add("is-invalid");
        userPasswordInput.classList.remove("is-valid");
        userPasswordAlert.classList.replace("d-none", "d-block");
        return false;
    }
}

// email validation 
function userEmailValidation() {
    var userEmailAlert = document.getElementById("userEmailAlert");
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regex.test(userEmailInput.value) && userEmailInput.value != "") {
        userEmailInput.classList.add("is-valid");
        userEmailInput.classList.remove("is-invalid");
        userEmailAlert.classList.replace("d-block", "d-none");
        return true;
    } else {
        userEmailInput.classList.add("is-invalid");
        userEmailInput.classList.remove("is-valid");
        userEmailAlert.classList.replace("d-none", "d-block");
        return false;
    }
}

// Checks if data already exists in the database
function isExist() {
    var accountExistMsg = document.getElementById("accountExistMsg");

    for (var i = 0; i < userinfo.length; i++) {
        if (userinfo[i].name.toLowerCase() === usernameInput.value.toLowerCase() || userinfo[i].email.toLowerCase() === userEmailInput.value.toLowerCase()) {
            usernameInput.classList.remove("is-valid");
            userEmailInput.classList.remove("is-valid");
            accountExistMsg.classList.replace("d-none", "d-block");
            return true;
        }
    }

    return false;
}

// Validate all inputs
function userInputValidation() {
    var isNameValid = userNameValidation();
    var isEmailValid = userEmailValidation();
    var isPasswordValid = userPasswordValidation();


    if (userNameValidation() == true && userEmailValidation() == true && userPasswordValidation() == true ) {
        return true; 
    }else{
        return false ;
    }


}


///////////////////////////////////// Login /////////////////////////////////////////////

var username = localStorage.getItem("sessionUsername");



function login()
{
    var loginEmail = document.getElementById("loginEmail");
    var loginPassword = document.getElementById("loginPassword");
    var loginBtn = document.getElementById("loginBtn");
    var wrongMsg = document.getElementById("wrongMsg");

    if(loginEmail.value == "" || loginPassword.value == "" )
        {
            var fillMsg = document.getElementById ("fillMsg");
            fillMsg.classList.replace ("d-none" , "d-block");
            return false;

        }
        for (var i = 0 ; i < userinfo.length ; i++)
            {
                if  (userinfo[i].email. toLowerCase() == loginEmail.value .toLowerCase() 
                    && userinfo[i].password.toLowerCase() == loginPassword.value.toLowerCase())
                { 
                    localStorage.setItem("sessionUsername", userinfo[i].name);
                    loginBtn.setAttribute("href" , "welcome.html")
                 }
                 else {wrongMsg.classList.replace("d-none" , "d-block");}
            }

}

function displayWelcomeUser() {
    var username = localStorage.getItem("sessionUsername");
    document.getElementById("username").innerHTML = "Welcome " + username;
}








































