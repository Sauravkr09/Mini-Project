// write a js program to delete all occurrence of element 'num' in a given array.
// let arr = [1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i=0; i<arr.length; i++){
//     if(arr[i] == num){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr);





//write a js program to find the no of digit in a number
//  let number = 287152;
//  let count = 0;

//  let copy = number;

//  while(copy > number){
//     count++;
//     copy = Math.floor(copy/10);
//  }
// console.log(count);







//write a js program to find the sum of digits in a number

//  let number = 287152;
//   let sum = 0;

//   let copy = number;

//   while(copy > 0){
//      digit = copy % 10;
//      sum+= digit;
//     copy = Math.floor(copy/10)
//  }
//   console.log(sum);







// //print the factorial of a number n

// let n = 5;
//  let factorical = 1;
//  for(let i=1; i<=n; i++){
//     factorial *=i;
//  }
//  console.log('factorail of ${n} is ${factorial}');




// //find the largest number in an array with only positive number

//  let arr = [2,5,10,4,2,7,1,9];
//  let largest = 0;

//  for(let i=0; i<=arr.length; i++){
//     if(largest < arr[i]){
//         largest = arr[i];
//     }
//  }
//  console.log(largest);

// creatre a program that generates a ramdom number representing a dice roll[the number shouuld b3e between 1 and 6]

//   let dice = Math.floor(Math.random() * 6) + 1;
//   console.log(dice);






// create an object representing a car that stores the following properties for the car:name :model,color.
// print the cars name

// const car={
//     name:"BMW",
//     model:"bs6",
//     color:"black"
    
    
// };
// console.log(car.name);





// Create an object Person with their name age and city,original value to change it to "New york" add a new property country and set it to United States.
 
  const Person = {
    name: "Jane Doe",
    age: 21,
    city: "New Jersey",
  };
  Person.city = "New York";
  Person.country = "United States";
  console.log(Person);







