

var signUp = document.getElementById("signup");
var signIn = document.getElementById("signin");

function sign(){
    var password = document.getElementById("password").value;
    var repeat = document.getElementById("repeat").value;
var fn = document.getElementById("fn").value;
var ln = document.getElementById("ln").value;
var em = document.getElementById("em").value;
   if(password == repeat && password != "" && repeat != "" &&  fn != "" && ln != "" && em != ""){
    signUp.style.display = "none";
    signIn.style.display = "flex";
   }
  
}