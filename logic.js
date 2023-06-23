let h1 =document.querySelector("h3");
var b = document.querySelector("body");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
function colorchange(){
b.style.background = "linear-gradient(to right, " 
+ color1.value 
+ ", " 
+ color2.value 
+ ")";
document.querySelector("h3").textContent=b.style.background;
};
color1.addEventListener('input',colorchange);
color2.addEventListener('input',colorchange);