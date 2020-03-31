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

    if (name.length != 0 && surname.length != 0 && email.length != 0 && password.length != 0){
        alert("An error has occurred! Most likely you did not enter all the data!");
        $('#submit').attr();       
    }

    register_caches.push(cache)
    saveRegister_cache();
}

function saveRegister_cache(){   
    localStorage.setItem('register_caches', JSON.stringify(register_caches));
}