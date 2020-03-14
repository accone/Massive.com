var register_caches = [];

document.getElementById('add').onclick = function(){
    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var cache = {
        name : name.value,
        surname : surname.value,
        email : email.value,
        password : password.value,
    }

        if(name.value=="") {
                alert("you didn't enter your name!");
        }

        else if(surname.value=="") {
                alert("You didn't enter your surname!");
        }

        else if(email.value=="") {
                alert("You haven't entered your e-mail!");
        }

        else if(password.value=="") {
                alert("You didn't enter your password!");
        }

        else if(password.lenght < 6) {
                alert("Less than 6 digits cannot be entered!");
        }

    register_caches.push(cache)
    saveRegister_cache();
}

function saveRegister_cache(){
    localStorage.setItem('register_caches', JSON.stringify(register_caches));
}