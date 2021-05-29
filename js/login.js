function validate() {
    if(document.getElementById("user").value == "admin" && document.getElementById("senha").value == "admin"){
        window.location.href = "../index.html";
    }else{
        alert("Usuário ou senha incorreto")
    }
}