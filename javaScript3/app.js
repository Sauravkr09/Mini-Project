//   Array Methods

// ----> for each ----->
  
// let arr = [1,2,3,4,5];

// let print = function (el){
//     console.log(el);
// };
// arr.forEach(print);

//  let arr = [{
//     name:"saurav",
//     marks:98
//  },
//  {
//     name:"Barsa",
//     marks:85
//  },
//  {
//     name:"aditya",
//     marks:88
//  },
// ];
// arr.forEach((student)=>{
//     console.log(student.marks);
// });

    // Map function


//  let students = [
//   {
//     name:"saurav",
//      marks:98 },
//  {
//     name:"Barsa",
//     marks:85
//  },
//  {
//     name:"aditya",
//     marks:88
//  },
// ];
// let gpa = students.map((el) => {
//     return el.marks /10;
// });

    // let nums = [1,2,3,4,5,12,23,44,15,16];
    // let ans = nums.filter((el) => {
    //     return el % 2 == 0; // even -->true
    // })

    // -----> Filter Methods------->

    // let nums = [2,4,5,6,7,8,9,2,1];
    // let ans = nums.filter((el)=>{
    //     return el%2 ==0;
    // });


    //------->Reduce------>
    // let nums = [1,2,3,4];
    // let finalVal = nums.reduce((res,el)=> res+el);
    // console.log(finalVal);

     let arr = [1,3,4,5,6,6,8,4,2];
    //   let max = -1;

    //   for(let i=0; i<arr.length; i++){
    //     if(max < arr[i]){
    //         max = arr[i];
    //     }
    // }
    //   console.log(max);

    // let max = arr.reduce((max,el) => {
    //     if(max <el){
    //         return el;
    //     }else {
    //         return max;
    //     }
    // });
    // console.log(max);

    //--------> Practice qs ---------->
    // check if all number in our array are multiple of 10 or not.

    // let nums = [10,20,30,40];
    // let  ans = nums.every((el) => el% 10 == 0);
    // console.log(ans);






    // create a function to find the min number in an array.
    //  let min = arr.reduce((min,el) => {
    //     if(min >el){
    //         return el;
    //     }else {
    //         return min;
    //     }
    // });
    // console.log(min);

    // --------> Spread ------>
     
    //  const data = {
    //     email: "souravkr9012@gmail.com",
    //     password: "abcd",
    //  };
    //  const dataCopy = { ...data, id:123};

     // --------> Rest ------>

    //  function sum(...args) {
    //     for(let i =0; i<args.length; i++){
    //         console.log("you gave us: ", args[i])
    //     }
    //  }

    // ------>Destructuring--------->

    // let names = ["tony","bruce","steve","peter"];
    // let [winner , runnerup] = names;
    // console.log(winner, runnerup);

    // const student = {
    //     name:"saurav",
    //     age:14,
    //     class:9,
    //     subject:["hindi","english","math","science"],
    //     username:"sauravkr@",
    //     password:"abcd",
    // };
    // let {username, password } = student;



    // -------->practice qS ---------->

    // qS.sQUARE AND SUM THE ARRAY ELEMENT USING THE ARROW FUNCTION AND THEN FIND THE AVERAGE OF THE ARRAY.
    let nums = [1,2,3,4,5];

    const square = nums.map((num) => num* num);
    console.log(square);

    let sum =square.reduce((acc, cur) => acc + cur, 0);

    let avg = sum / nums.length;
    console.log(avg);


    //QS . CREATE A NEW ARRAY USING THE MAP FUNCTION WHOLE EACH ELEMENT IS EQUAL TO THE ORIGINAL ELEMENT PLUS 5.

    let strings = ["adam","bob","catlyn","donald", "eve"];
    console.log(string.map((string) => string.toUpperCase()));


    //Qs. Creat a new array element are in uppercase of word present in the original array.

    let strings =["adam","bob","catlyn","donald","eve"];
    console.log(strings.map((string) => string.toUpperCase()));

    //Qs . Write a function called doubleAndReturnArgs which accept an array a variable number of argument.The function should return a new with the original array value and all of the additional argument double.

   const doubleAndReturnArgs = {arr, ...args} => [
    ...arr,
    ...args.map((v) => v *2),
   ];

   doubleAndReturnArgs([1,2,3],4,4);
   doubleAndReturnArgs([2],10,4);




    //Qs . Write a function called mergeObject that accept two object and return a new object which contain all the keys and values of the first object and second object.
    const mergeobjects = (obj1, obj2) => ({...obj1, ...ojb2});
    mergeObjects({a:1, b:2}, {c:3, d:4});
    
