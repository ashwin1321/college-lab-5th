function showMessage(location, message, color) {
    document.getElementById(location).innerHTML = message;
    document.getElementById(location).style.color = color;
}

function nameValid() {
    var name = document.getElementById('uname').value;
    if (name.length == 0)
        showMessage("errname", "enter name", "red");
    else if (name.length < 3)
        showMessage("errname", "enter your real name", "red");
    else if (!name.match(/^[a-zA-z]{3,30}\s{1}[a-zA-z]{3,30}$/))
        showMessage("errname", "Try giving a space between first name and last name", "red");
    else
        showMessage("errname", "valid name", "green");
}

function numberValid() {
    var number = document.getElementById('phno').value;

    if (number.length == 0) {
        showMessage("errnumber", 'enter your phone number', 'red');
    } else if (number.match(/^((?=.*[(98|97)]))[0-9]{8}$/)) {
        showMessage("errnumber", "Nepali number hala na", 'red');
    } else if (number.length < 10)
        showMessage("errnumber", 'Nepali number 10 digit ko hunxa ne', 'red');
    else
        showMessage("errnumber", 'Valid Number', 'green');
}

function validemail() {
    var email = document.getElementById('email').value;
    if (email.length == 0)
        showMessage('erremail', 'Email is requried', 'red');
    else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(([.]+[a-zA-Z0-9-]+)+)+$/))
        showMessage('erremail', 'Enter valid email', 'red');
    else
        showMessage('erremail', 'Valid Email', 'green');

}

function validPassword() {
    var password = document.getElementById('psw').value;
    if (password.length == 0)
        showMessage('errpassword', "Password is required", "red");
    else if (password.length < 8)
        showMessage("errpassword", 'Not Enough Character', 'red');
    else
        showMessage('errpassword', "Valid Password", 'green');

}

function validcheckbox() {
    var rad = document.getElementById("gender").checked;
    if (rad == true) {
        showMessage("thank you", "errcheckbox", "green");
    } else {
        showMessage("invalid", "errcheckbox", "red");
    }
}

function valdcomment() {
    var comment = getElementById('ucomment').value;
    var required = 40;
    var left = required - comment.length;
    if (left > 0)
        showMessage("errcomment", left + "" + "character required", "red");
    else
        showMessage("errcomment", "valid comment", "green");
}