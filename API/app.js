// let btn = document.querySelector("button");

// btn.addEventListener("click" , async () =>{
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//    innerImage = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch (e){
//         consol.log("error - ", e);
//         return "No fact found";
//     }
// }



// let btn = document.querySelector("button");
// let url2 =  "https://cat.ceo/api/breeds/image/random";

// btn.addEventListener("click" , async () =>{
//  let link = await getImage();
// //  console.log(link);
// let img = document.querySelector("#result");
// img.setAttribute("src" , link);
// });
// async function getImage(){
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }catch (e){
//         console.log("error - ", e);
//         return "No Image found";
//     }
// }

    // const url = "https://icanhazdadjoke.com/";

    // async function getJokes(){
    //     try {
    //         const config = { headers: {Accept: "application/json"}};
    //         let res = await axios.get(url, config);
    //         console.log(res);
    //     }catch(err){
    //         console.log(err);
    //     }
    // }


    
          
    //   university code search 

//     let url = "http://universities.hipolabs.com/search?name=";
//     let btn = document.querySelector("button");

//     btn.addEventListener("click", async () => {
//         let country = document.querySelector("input").value
//         console.log(country);

//      let colleges =  await getColleges(country);
//      show(colleges);
//     });

//     function show(colleges) {
//         let list = document.querySelector("#list");
//         list.innerText = "";
//         for(col of colleges){
//             console.log(col.name);


//             let li = document.createElement("li");
//             li.innerText = col.name;
//             list.appendChild(li);
//         }
//     }

//    async function getColleges(country){
//     try{
//     let res =  await axios.get(url+country);
//     return res.data;
//     }catch(e){
//         console.log("error : ",e);
//         return [];
//     }


//    }























// fetch(url)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error('There was a problem with the fetch operation:', err);
//   });
