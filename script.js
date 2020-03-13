let register_caches = [];
loadRegister_cache();

document.getElementById('add').onclick = function(){
    let name = document.getElementById('name');
    let surname = document.getElementById('surname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');

let cache = {
    name : name.value,
    surname : surname.value,
    email : email.value,
    password : password.value,
}

    if(name.value='') {
        alert("You did not enter your name!");
    }

    else if(surname.value='') {
        alert("You did not enter your surname!");
    }

    else if(email.value='') {
        alert("You have not entered your e-mail!");
    }

    else if(password.value='') {
        alert("You did not enter your password!");
    }

    else if(password.lenght < 8) {
        alert("Less than 6 digits cannot be entered!");
    }

register_caches.push(cache)
saveRegister_cache();
}

function saveRegister_cache(){
    localStorage.setItem('register_caches', JSON.stringify(register_caches));    
}

function loadRegister_cache(){
    if (localStorage.getItem('register_caches')) register_caches = JSON.parse(localStorage.getItem('register_caches'));
}