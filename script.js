let register_caches = [];
loadRegister_cache();

document.getElementById('add').onclick = function(){
    let cache_name = document.getElementById('name');
    let cache_surname = document.getElementById('surname');
    let cache_email = document.getElementById('email');
    let cache_password = document.getElementById('password');

let register_cache = {
	name : cache_name.value,
	surname : cache_surname.value,
	email : cache_email.value,
	password : cache_password.value,
}

function writeRegister(){

	if(cache_name.value=="") {
        alert("You did not enter your name!");
        saveRegister_cache() = false;
        loadRegister_cache() = false;
    }

    else if(cache_surname.value=="") {
        alert("You did not enter your surname!");
        saveRegister_cache() = false;
        loadRegister_cache() = false;
    }

    else if(cache_email.value=="") {
        alert("You have not entered your e-mail!");
        saveRegister_cache() = false;
        loadRegister_cache() = false;
    }

    else if(cache_password.value=="") {
        alert("You did not enter your password!");
        saveRegister_cache() = false;
        loadRegister_cache() = false;
    }

    else if(cache_password.lenght < 8) {
        alert("Less than 6 digits cannot be entered!");
        saveRegister_cache() = false;
        loadRegister_cache() = false;
    }

    else if(cache_password.lenght > 16) {
        alert("Password must contain less than 12 numbers!");
        saveRegister_cache() = false;
        loadRegister_cache() = false;
    }
}

register_caches.push(register_cache)
saveRegister_cache();
}

function saveRegister_cache(){
    localStorage.setItem('register_caches', JSON.stringify(register_caches));    
}

function loadRegister_cache(){
    if (localStorage.getItem('register_caches')) register_caches = JSON.parse(localStorage.getItem('register_caches'));
}