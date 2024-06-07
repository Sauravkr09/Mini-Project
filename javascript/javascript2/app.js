// // for(let i=1; i<=15; i=i+2){
// //     console.log(i);
// // }

// // for(let i=15; i>=1; i=i-2){
// //     console.log(i);
// // }

// // console.log("print all even number usling for loop in javascript");

// // for(let i=2; i<=10; i=i+2){
// //     console.log(i);
// // }
// // console.log("backbard direction");
// // for(let i=10; i>=2; i=i-2){
// //     console.log(i);
// // }

// // // infinite loops 
// // // for(let i=1; ; i++){
// // //     console.log(i);
// // // }

// // //Print the multiplication table for 5
// //  for(let i=5; i<=50; i=i+5){
// //     console.log(i);
// //  }
// //  console.log("backward table ");
// //  for(let i=50; i>=5; i=i-5){
// //     console.log(i);
// //  }
// //  console.log("three table in for loops");
// //  for(let i=3; i<=30; i=i+3){
// //     console.log(i);
// //  }
// //  console.log("backward three table");
// //  for(let i=30; i>=3; i=i-3){
// //     console.log(i);
// //  }

// // //  let n = prompt("write your number");
// // //  n = parseInt(n);
// // //  for(i=n; i<=n*10; i=i+n){
// // //     console.log(i);
// // //  }

// // // let n = prompt("write your number");
// // //  n = parseInt(n);
// // // for(i=n; i<=n*20; i=i+n){
// // //     console.log(i);
// // // }
// // // Nested for loop
// // console.log("nasted for loop");
// // for(let i=1; i<=3; i++){
// //     for( let j=1; j<=3; j++){
// //         console.log(j);
// //     }
// // }
// // console.log("while loop");

// // let i = 1;
// // while(i <= 5){
// //     console.log(i);
// //     i++;
// // }
//  console.log("while loop");

// //  let j = 1;
// //  while(j<=10){
// //  console.log(j);
// //  j++;
// //  }

//  let i = 1;
//  while(i<=20){
//     console.log(i);
//     i= i+2;
//  }

//  const favoriteMovie = "border";
//   let guess = prompt(" guess my favorite movie");
//  while((guess != favoriteMovie) && (guess != "quite")){
    
//     guess = prompt(" wrong please try again");
//  }
//  if(guess == favoriteMovie){
//     console.log("congrates!1");
//  }else{
//     console.log("quite the game");
//  }

// const favMovie = "angle";
// let gusse = prompt("choose the fav movies!");
// while((gusse != favMovie)&&(gusse != "quite")){
//     gusse = prompt("your ans is wrong");
// }
// if(gusse == favMovie){
//     console.log("congrate!!");
// }else{
//     console.log("you quite the game");
// }

//  const favMovie = "angle";
//   let gusse = prompt("what is your fev movies");
//  while((gusse != favMovie)){
//     if(gusse == "quite"){
//         console.log("you are quite the game");
//         break;
//     }
//      gusse = prompt("your answer is wrong");
//  }
//  if(gusse == favMovie){
//      console.log("congrate!!");
//  }

// let i =1;
// while(i<=5){
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// let i = 1;
// while(i<=20){
//     if(i == 5){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// loopd with array

// let fruits = ["mango","banana","lichi","guava","graps"];
// for( let i=0; i<fruits.length; i++){
//     console.log(i , fruits[i]);
// }

// loop with array reverse
// let fruits = ["banana","lichi","guava","graph","papaya"];
// for(let i=fruits.length-1; i>=0; i--){
//     console.log(i , fruits[i]);
// }

// loops with array . nested loops with nested arrays

// let heros = [ ["aman","saurav","atul"], ["rahul","vans","ujjwal"] ];
// for(let i=0; i<heros.lenght; i++){
//     console.log(i, heros[i],heros[i].length);
//     for( let j=0; j<heros[i].length; j++){
//         console.log('j=${j}, ${heros[i][j]}');
//     }
// }

// let student = [ ["aman", 90],["saurav",95],["barsa",86]];

// for(i=0; i<student.length; i++){
//     for(let j=0; j<student[i].length; j++){
      
//         console.log(student[i][j]);
//     }

// }

// let heros = [["salman","rohit","punjabi"],["barsa","patel","amisha"]];
// for(let i=0; i<heros.length; i++){
//     for(let j=0; j<heros[i].length; i++){
//         console.log(heros[i][j]);
//     }
// }

// let fruits = ["banana","apple","graph","guva","orange"];
// for(fruits of fruits){
//     console.log(fruits);
// }

// for(char of "sauravlovebarsa"){
//     console.log(char);
// }
let students =[ ["saurav","manjeet","aditya","sunny","adrash","sahil"],["aditya","sunny","adrash","sahil"]];
for(list of students ){
    for(name of list){
        console.log(name);
    }
}


