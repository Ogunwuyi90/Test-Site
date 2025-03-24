/* Declare variables below to save the different sections (divs) of your story*/
let button1=document.querySelector(".option-one")
let screen2a=document.querySelector(".option-one-screen")
let button2=document.querySelector(".option-two")
let screen2b=document.querySelector(".option-two-screen")
let open=document.querySelector(".story-opening")
let title=document.querySelector(".title")
let button3=document.querySelector(".option-2a")
let screen3a=document.querySelector(".option-three-screen")
let button4=document.querySelector(".option-2b")
let screen3b=document.querySelector("option-three-screen")
let screen4a=document.querySelector(".option-one-end")
let screen4b=document.querySelector(".option-two-end")
let screen5=document.querySelector(".option-three-end")
let button5=document.querySelector(".option-3a")
let button6=document.querySelector(".option-3b")







/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!*/
button1.onclick=function(){
screen2a.style.display="block";
  open.style.display="none"
  title.style.display="none"
};
//3rd page of my game for option 2 from the opening screen.
button2.onclick=function(){
screen2b.style.display="block";
  open.style.display="none"
  title.style.display="none"
};

//4th page for 2nd decision after option1
button3.onclick=function(){
  screen4a.style.display="block"
  screen2a.style.display="none"
}

//5th page for 2nd decision after option2
button4.onclick=function(){
  screen5.style.display="block"
  screen2a.style.display="none"
  
}

button5.onclick=function(){

screen4b.style.display="block";
  screen2b.style.display="none";
}

button6.onclick=function(){
  screen2a.style.display="block"
  screen2b.style.display="none"
  screen4b.style.display="none"
}

//button1.onclick=function(){
//screen1.style.display="block"
//};

console.log(button1)
console.log(screen2a)
