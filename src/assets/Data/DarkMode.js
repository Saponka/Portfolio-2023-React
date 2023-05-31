let Ligth = document.querySelector("#capa .ligth");
let Dark = document.querySelector("#capa .dark"); 
let body = document.querySelector("body");


Ligth.onclick = function (){

  Ligth.style.display = "none";
  Dark.style.display ="block";
  body.style.backgroundColor = "black";
  body.style.color = "white";
}
Dark.onclick = function (){
    Dark.style.display = "none";
    Ligth.style.display ="block";
    Ligth.style.background ="white";
    body.style.backgroundColor = "white";
    body.style.color = "black";
}

