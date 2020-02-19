let register_caches = [];
loadDatabases();

document.getElementById('add').onclick = function(){
    let cache_name = document.getElementById('name');
    let cache_surname = document.getElementById('surname');
    let cache_email = document.getElementById('email');
    let cache_password = document.getElementById('password');
    let cache_number = document.getElementById('number');

let register_cache = {
	name : cache_name.value,
	surname : cache_surname.value,
	email : cache_email.value,
	password : cache_password.value,
	number : cache_number.value,
}

function writeDatabases(){

	if(cache_name.value=="") {
        alert("You did not enter your name!");
        saveDatabases() = false;
    }

    else if(cache_surname.value=="") {
        alert("You did not enter your surname!");
        saveDatabases() = false;
    }

    else if(cache_email.value=="") {
        alert("You have not entered your e-mail!");
        saveDatabases() = false;
    }

    else if(cache_password.value=="") {
        alert("You did not enter your password!");
        saveDatabases() = false;
    }

    else if(cache_password.lenght < 8) {
        alert("Less than 6 digits cannot be entered!");
        saveDatabases() = false;
    }

    else if(cache_password.lenght > 16) {
        alert("Password must contain less than 12 numbers!");
        saveDatabases() = false;
    }

    else if(cache_number.value=="") {
        alert("You did not enter your phone number!");
        saveDatabases() = false;
    }
}

register_caches.push(register_cache)
saveDatabases();
}

function saveDatabases(){
    localStorage.setItem('register_caches', JSON.stringify(register_caches));    
}

function loadDatabases(){
    if (localStorage.getItem('register_caches')) register_caches = JSON.parse(localStorage.getItem('register_caches'));
}

function TofDatabases(){		
		alert("You did not enter your details completely!");				
} 