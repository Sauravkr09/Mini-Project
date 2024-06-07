// function hello(){
    
//     console.log("hello");
// }


// function printName(){
//     console.log("saurav&barsa");
// }
// // printName();

// function print1to5(){
//     for(let i =1; i<=5; i++){
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult(){
//     let age = 13;
//     if(age >= 23){
//         console.log("adult");
//     }else{
//         console.log("your are not verify this age");
//     }
// }
// isAdult();

// function isAdult(){
//     let age =17;
//     if(age >=18){
//         console.log("your age is adult");
//     }else{
//         console.log("your age is not adult");
//     }
// }
// isAdult();

// print a poem in a funcation 


//  function printName(){
//     console.log("Twinkle, twinkle, little star,");
//     console.log(" When the blazing sun is gone,");
//     console.log("  How I wonder what you are!,");
//     console.log("Up above the world so high,");
//     console.log("Like a diamond in the sky .");
//     console.log("When he nothing shines upon,");
//     console.log(" Then you show your little light,");
//     console.log(" Twinkle, twinkle, all the night.");
//  };
//  printName();

// Create a Function to roll a dice & always display the value the value of the dice (1 to 6)

//  function rollDice(){
//     let rand = Math.floor(Math.random()*6) +1;
//     console.log(rand);
   
//  }
//  rollDice();

// Function Argument

// function printName(name){
//     console.log(name);
// }
// printName("saurav");
// printName("barsa");
// printName("sauravkumar");

// function printInfo(name,age){
//     console.log((name),'age is',(age));
// }
// printInfo("saurav",21);
// printInfo("barsa",21);


// function sum(a,b){
//     console.log(a+b);
// }
// sum(4,7);
// sum(6,9);
// sum(1999,7780);
// sum(200,10);

// practice qs create a Function that gives us the average of 3 number.

//  function calAvg(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log(avg);
//  }
//  calAvg(2, 4, 6);

// practice qs create a Function that prints the multiplication table of a number .

// function printTable(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }

// printTable(5);

// return function 

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(sum(1,4),5));

// function multiply(a,b){
//     return a*b;
// }
// console.log(multiply(multiply(2,3),4));

// function subtract(a,b){
//     return a-b;
// }
// console.log(subtract(subtract(8,2),4));

//   function isAdult(age){
//     if(age >= 18){
//         return "adult";
//     }else {
//         return "not adult"
//     }
//     console.log("bye bye");
//   }

  // practice qs create a function that returns the sum of number from 1 to n.

//    function getSum(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum += i;
//     }
//     return sum;
//    }
   
    // function getSum(n){
    //     let sum = 0;
    //     for(let i=0; i<=n; i++){
    //         sum += i;
    //     }
    //     return sum;
    // }


    // prectice qs create a function that return the concatenation of all string in an array.

    // let str = ["hi","hello","bye","!"];

    //   function concat (str){
    //     let result = "";

    //     for(let i=0; i<=str.length; i++){
    //         result += str[i];
    //     }
    //     return result;
    //   }
    //   concat(str);

    // function scope
    // let sum =25; // goable scop
    // function calSum(a,b){
    //   let sum = a+b; //function scope
    //   console.log(sum);
    // }
    
    // calSum(2,5);
    // console.log(sum);

    // lexical funcetioni
    // function outerFun(){
    //   let x =5;
    //   let y=6;
    //   function innerFun(){
    //     console.log(x);
    //   }
    //   innerFun();
    // }
    // outerFun();

    // function outerFunction(){
    //   let x = 5;
    //   let y = 6;
    //   function innerFunction(){
    //     let a = 10;
    //     console.log(x);
    //     console.log(y);
       
    //   }
    //   console.log(a);
    //   innerFunction();
    // }


      // practice Qs 
      // let greet = "hello";
      // function changeGreet(){
      //   let greet = "namaste";
      //   console.log(greet);
      //   function innerGreet(){
      //     console.log(greet);
      //   }
      //   innerGreet();
      // }
      // console.log(greet);
      //   changeGreet();


      // Function Expressions

      // const sum = function(a,b){
      //   return a+b;
      //   console.log();
      // }
      // sum(2,3)

      // Higer Order Function 
      // function multipleGreet(funcation , n){
      //   for(let i=1; i<=n; i++){
      //     funcation();
      //   }
      // }
      // let greet = function(){
      //   console.log("hello");
      // }
      // multipleGreet(greet, 2);

      
      // Higer Order Function 

//      let odd = function (n){
//       console.log(!(n%2 == 0));
//      }
// let even =function (n){
//   console.log(!(n%2 == 0));
//  }

//  function oddOrEvenFactory(request){
//   if(request == "odd"){
//     let odd = function (n){
//       console.log(!(n%2 == 0));
//      }
//      return odd;
//   }else if (reuqest == "even"){
//     let even =function (n){
//       console.log(!(n%2 == 0));
//      }
//      return "even";
//   }else{
//     console.log("wrong request");
//   }
//  }
//  let request = "odd"; // even

// method

//  const calculator = {
//   add: function(a,b){
//     return a+b;
//   },
//   sub: function(a,b){
//     return a-b;
//   },
//   mul: function(a,b){
//     return a*b;
//   }
//  };

// Qs . Write a javasScript function that return arrray element larger than a number.
    let arr =[8,9,1,2,3,4,5,6,7];
    let num = 5;

    function getElements(arr,num){
      for(let i=0; i<arr.length; i++){
        if(arr[i] >num){
          console.log(arr[i]);g
        }
      }
    }
    getElements(arr, num);


  // Qs  Write a javaScript function to extract unique characters from a string .

    let str = "abcdefghijklmnop";

    function getUnique(str){
      let ans = "";
      for(let i=0; i< str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){

          ans += currChar;
        }
      }
      return ans;
    }
    getUnique(str);










  // Qs Write a javaScript  function that accept a list of country names as input and return the longest country as output.

let country = ["delhi", "Mumbai", "USA", "Germany"];
function longestNmae(country){
  for(let i = 0; i<country.lrngth; i++){
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if(currLen > ansLen){
      ansIdx = i;
    }
  }
  return country[ansIdx];
}
longestNmae(country);











  // Qs Write a javaScript function to count the number of vowels in a string argument.
 
   let str = "sauravkumar";

   function countVowels(str){
    for(let i=0; i<str.length; i++){
      if(
        str.charAt(i)=="a" ||
        str.charAt(i) == "e"     ||
        str.charAt(i)   == "i"     ||
        str.charAt(i)  == "o"       ||
        str.charAt(i)   == "u"
      ){
        count++;
      }
    }return count;

   }




  //Qs Write a javaScript function a random number within a range (satrt end).

    let start =100;
    let end = 200;

    function generateRandom(start,end){
      let diff = end - start;
      return Math.floor(Math.random() *diff)+ start;
    }
    