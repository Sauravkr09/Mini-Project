//  // Qs . Add the following element element to the container using only javascript and the Dom methods.
 
// // let para1 = document.createElement('red');
// // para1.innerText = "Hey I'm red";
// // document.querySelector('body').append(para1);

// // para1.classlist.add(red);

// // ii). an <h3> with blue text that says "i am a blue h3"
// let h3 = document.createElement('h3');
// h3.innerText = "Hey I'm blue";
// document.querySelector('body').append(h3);

// para1.classlist.add("blue");

// // a<div> wuth a blzck border and pink background color with the following element inside of it.
// //, ansother <h1> that says 'i am in a div.
// // a <p> that says "Me Too!"

// let div = document.createElement("div");
// let h1=document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerText = "I am in a div";
// para2.innerText = "Me Too!" ;

// div.append(h1);
// div.append(para2);
// div.classList.add("box");
// document.querySelector('body').append(div);

// Qs1.Create a new input and button element on the page using JavaScript only.Set the text of button to“Clickme”;

let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="Clickme";

document.querySelector("body").append(input);
document.querySelector("body").append(button);



// Qs2.Add followingattributestotheelement:-Changeplaceholdervalueofinputto“username”-Changetheidofbuttonto“btn”.


button.setAttribute("id","btn");
input.setAttribute("placeholder","username");



// Qs3.AccessthebtnusingthequerySelectorandbuttonid.Changethebuttonbackgroundcolortoblueandtextcolortowhite.

 let btn=document.querySelector("#btn");
 btn.classList.add("btnStyle");










// Qs4.Createanh1elementonthepageandsetitstextto“DOMPractice”underlined.Changeitscolortopurple.

eth1=document.createElement("h1");
h1.innerHTML="<u>DOMPractice</u>";
document.querySelector("body").append(h1);







// Qs5.Createaptagonthepageandsetitstextto“ApnaCollegeDeltaPractice”,whereDeltaisbold.

let p=document.createElement("p");
p.innerHTML="Apna College <b>Delta</b>Practice";
document.querySelector("body").append(p);