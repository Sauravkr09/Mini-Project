 let todo =[];

 let req = prompt("please enter the request");

 while(true){
     if(req == "quit"){
       console.log("quitting app");
         break;
     }

     if(req == "list"){
        console.log("-------------");
        for(let i=0; i<=todo.length; i++){
            console.log(i,todo[i]);
        }
         console.log("-------------");
     }else if(req == "add"){
      let task = prompt("please enter to task you want to add");
      todo.push(task);
       console.log("task added");
     }else if(req == "delete"){
        let indx = prompt("please enter to task index ");
        todo.splice(i,1);
        console.log("task delete");
     }else{
        console.log("wrong request");
     }
     req = prompt("please enter you request");
 }