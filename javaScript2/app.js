

    // practice question 
    // ----> Write an arrow function that return the square of a number 'n'.

    //   const square = n => n*n;
    //   console.log(square);

    
    // write a function that prints "Hello World" 5 time at intervals of 2s each.

//    let id= setInterval(()=>{
//         console.log("Hello World");
//     }, 2000);

//     setTimeout(()=>{
//         clearInterval(id);
//         console.log("clear interval run");
//     }, 10000);

// Write an arrow function named arrayAverage that accept an array of number and return the average of those number.

const arrayAverage = (arr) => {
    let total = 0;
    for (let number of arr) {
        total += number;
    }
    return total / arr.length;
};

let arr = [1,2,3,4,5,6];
console.log(arrayAverage(arr));



    

