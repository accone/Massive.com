//Registration's logic

var register_caches = []; //A variable in which all information is stored

document.getElementById('add').onclick = function(){ //The function that when you click the "register me" button adds data to the localStorage
        var name = document.getElementById('name');
        var surname = document.getElementById('surname');
        var email = document.getElementById('email');
        var password = document.getElementById('password');
 
    let cache = {
        name : name.value,
        surname : surname.value,
        email : email.value,
        password : password.value,
    }

function right(){
                var email = document.getElementById('email');
                var status = document.getElementById("status");
                var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
                if (re.test(str)) status.innerHTML = "Адрес правильный";
                else status.innerHTML = "Адрес неверный";
                if(isEmpty(str)) status.innerHTML = "Поле пустое";
                function isEmpty(str){
                return (str == null) || (str.length == 0);
        }
    }
}

    register_caches.push(cache)
    saveRegister_cache();


function saveRegister_cache(){ //Function that adds information to localStorage  
    localStorage.setItem('register_caches', JSON.stringify(register_caches));
}