// function one(){
//     return 1;
// }
// function two () {
//     return one() + one();
// }

// function three () {
//     let ans = two() + one();
//     console.log(ans);
// }

// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);

// setTimeout( () =>{
//     console.log("apna collage");
// }, 2000);
// setTimeout( () =>{
//     console.log("saurav barsa");
// }, 2000);

// console.log("Hello...");

// h1 = document.querySelector("h1");

// function changeColor(color,delay, nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }
// changeColor("red" ,1000, () =>{
// changeColor("orange", 1000, () =>{
//     changeColor("green", 1000, () =>{
//         changeColor("black",1000,() =>{
//             changeColor("pink",1000);
//         });
//     });
// });
// });

// function savetoDb(data , success , failure){
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed >4){
//         success();
//     }else{
//     failure();
// }
// }

// savetoDb("hello world")
//   .then(() => {
//     console.log("your data was saved ");
//     return savetoDb("hello world");
//   })
//   .then(() => {
//     console.log("success: data2 saved");
//   })
//   .catch(() => {
//     console.log("your network was weak. data not saved");
//   });

// function savetoDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// }

// let request = saveToDBPromise("apnacollage");
// request
// .then(() =>{
//     console.log("promise resolved");
// })
// .catch(()=>{
//     console.log("promise rejected");
// });

// saveToBPromise("apnacollage");
// .the(()=>{
//     console.log("promise1 revolved");
//     return saveToDBPromise("hello world");
// })
// .then(()=>{
//     console.log("promise2 resolved");
// })
// .catch(() =>{
//     console.log("some promise rejected");
// });

// saveToDBPromise("anpnacollage")
// .then((result)=>{
//     console.log("result : ", result);
//     console.log("promise1 resolved");
//     return saveToDBPromise("hello world");
// })
// .then((result)=>{
//     console.log("result : ", result);
//     console.log("pro,ise resolved");
// })
// .catch((error) =>{
//     console.log("error : ", error);
//     console.log("some promise rejected");
// });

h1 = document.querySelector("h1");


function changeColor(color, delay){
  return   new promise (()=>{
        setTimeout((resolve, reject)=> {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    });
    
}

// changeColor("red", 1000)
// .than(()=>{
//     console.log("red color was completed");
//     return changeColor("orange", 2000)

// })

// .than(()=>{
//     console.log("orange color was complete");
//     return changeColor("blue", 3000);
// })
// .then(()=>{
//     console.log("blue color was complete");
//     return changeColor("green", 4000);
// })
// .then(()=>{
//     console.log("green color was complete");
    
// })

// .catch((error)=>{
//     console.log("this code was not complete there some error");
//     return changeColor("error");
// });


// changeColor("red", 1000, ()=>{
//     changeColor("orange", 1000, ()=>{
//         changeColor("green", 1000, ()=>{
//             changeColor("yellow", 1000, ()=>{
//                 changeColor("yellow", 1000, ()=>{


// });
// });
// });
// });
// });

// async function greet(){
//     throw "404 page not found";
//     return "hello!";
// }

// greet()
// .then(()=>{
//     console.log("promise was resolved");
// })
// .catch((err)=>{
//     console.log("promise was rejected");
// });

async function show() {
    await colorChange("violet", 1000);
    await colorChange("indigo", 1000);
    await colorChange("green", 1000);
    await colorChange("yellow", 1000);
    await colorChange("orange", 1000);

    return "done";
}
