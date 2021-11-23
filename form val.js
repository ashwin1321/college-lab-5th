function showmessage(message, location, color) {
    document.getElementById(location).innerHTML = message;
    document.getElementById(location).style.color = color;
}

function validname() {
    let uname = document.getElementById('uname').value;

    if (uname.length == 0) {
        showmessage("please enter user name", "errorname", "red");
        // return false;
    }

    else if (uname.length < 3) {
        showmessage("not enough character", 'errorname', 'red')
        // return false;
    }

    else if (!uname.match(/^[a-zA-Z]{3,30}\s{1}[a-zA-Z]{3,30}$/)) {
        showmessage('please enter first and last name with space', 'errorname', 'red')
        // return false
    }

    else
        showmessage("valid user name", 'errorname', 'green');

}

function validpass() {
    let upass = document.getElementById('upass').value;

    if (upass.length == 0)
        showmessage("Please enter password!", 'errorpass', 'red')
    else if (upass.length < 7)
        showmessage("not enough character", 'errorname', 'red')

    else
        showmessage('valid password', 'errorpass', 'green')
}



function validemail() {
    let email = document.getElementById('uemail').value
    if (email.length == 0)
        showmessage('Email is required', 'erroremail', 'red');
    else
        if (!email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(([.]+[a-zA-Z0-9-]+)+)$/))
            showmessage("Enter valid email", 'erroremail', 'red')

        else
            showmessage("Valid email", 'erroremail', 'green')

}

function phonevalid() {

    let phone = document.getElementById("phone").value

    if (phone.length == 0)
        showmessage("Enter your phone number", 'errorphone', 'red')
    else if (!phone.match(/^[0-9]$/))
        showmessage("plese enter number only", 'errorphone', 'red')

    else if (phone.dubstr(0, 2) != "98")
        showmessage('The number must start with 98', 'errorphone','red')

    else if (phone.length != 10)
    showmessage("Enter 10 digit number",'errorphone','red')

    else
    showmessage('valid phone number','errorphone','green')
}

function validradio() {
    let radio = document.getElementById('radio').value


    
}