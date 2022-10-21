function password(){
    var password = document.getElementById('password').value;

    if(password == "arroz"){
        location.href = "fase2.html";
    }else {
        alert('error');
    }
}
