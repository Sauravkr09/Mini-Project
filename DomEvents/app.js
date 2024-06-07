// let btns = document.querySelector("button");
// // console.dir(btn);
// for (btn of btns){
//     btn.onclick = sayHello;
// }

// // btn.onclick = function(){
// //     console.log("button was clicked");
// // };
// function sayHello(){
//     alert("Hello");
// }

// let btns = document.querySelectorAll("button");

// for (btn of btns){
//     btn.onclick = sayHello;
//     btn.onmouseenter = function() {
//         console.log("you are enter a button");
//     };

// }
// function sayHello() {
//     alert("Hello!");
// }
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;
//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;
//     console.log("Color updated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);
//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }
// let  p  = document.querySelector("p");

// p.addEventListener("click", function() {
//     console.log("Parah was clickd");
// });
// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");


// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);


// p.addEventListener("click", changeColor);


// h1.addEventListener("click", changeColor);


// h3.addEventListener("click", changeColor);


// let btn = document.querySelector("button");

// btn.addEventListener("dbclick", function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function(event){
//     console.log()
//     console.log("key was pressed");
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     alert("form submitted");
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event){
//     event.preventDefault();

//     let inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
// })

// Qs . Try out the following events in Event Listener on your own 
//  - mouseout
//  -keypress
//  -scrool
//  -load
//[use mdn for help]

 // Event listener for mouseout
//  document.getElementById('target').addEventListener('mouseout', function() {
//     alert('Mouse left the target!');
//   });

  // Event listener for keypress
//   document.addEventListener('keypress', function(event) {
//     alert('Key pressed: ' + event.key);
//   });

  // Event listener for scroll
  window.addEventListener('scroll', function() {
//     alert('Scrolled!');
//   });

  // Event listener for load
//   window.addEventListener('load', function() {
//     alert('Page loaded!');
//   });






// inp.addEventListener("keyup", function(){
//     console.log("key was pressed");
// });

// Qs2.Create a buttonon thepageusingJavaScript.Addaneventlistenertothebuttonthatchangesthebutton’scolortogreenwhenitisclicked.

// var button = document.createElement('button');
//   button.textContent = 'Click me to change color';
  
//   // Style the button
//   button.style.padding = '10px';
//   button.style.backgroundColor = 'blue';
//   button.style.color = 'white';
//   button.style.border = 'none';
//   button.style.cursor = 'pointer';
  
//   // Add an event listener to change color on click
//   button.addEventListener('click', function() {
//     button.style.backgroundColor = 'green';
//   });
  
//   // Append the button to the body of the page
//   document.body.appendChild(button);
    

// Get the input element and the heading element
var input = document.getElementById('nameInput');
var heading = document.getElementById('nameHeading');

// Add event listener for input event
input.addEventListener('input', function() {
  // Retrieve the value entered by the user in the input field
  var name = input.value;
  
  // Replace any characters that are not letters (a-z, A-Z) or spaces with an empty string
  name = name.replace(/[^a-zA-Z ]/g, '');
  
  // Update the text content of the heading with the sanitized name
  heading.textContent = name;
});



