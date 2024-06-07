// let msg = "   hello  ";

// let password = prompt("set your password");
// console.log(password.trim());
// let msg = "iloveCoding";

// let msg = "    hello  ";
// let newMsg = msg.trim();
// console.log(newMsg);
//  newMsg=newMsg.toUpperCase();
//  console.log(newMsg);
// msg=msg.toUpperCase().trim();
// console.log(msg);

// let name = "iloveCoding";
// name.slice(1);
// console.log(name);

// let msg = "iloveyou";
// console.log(msg.slice(0,msg.length));

// let msg = "saurav&barsa";
// console.log(msg.slice(-2));

// let str = "ilovebarsa";
// console.log(str.replace("love","saurav"));

// let msg = "saurav";
// console.log(msg.repeat(3));

// let msg = "  help!  ";
// console.log(msg.toUpperCase().trim());

// practice qs
// let name = "ApnaCollage";
// console.log(name.slice(4,9));
// console.log(name.indexOf("na"));
// console.log(name.replace("Apna","Our"));
// console.log(name.slice(4).replace('l','t'));

  // Arrat(Data types)
// let students = ["saurav","barsa","atul"];

// let nums = [2,4,6,8];
// let info = ["aman",24,35.5];
// console.log(info);
// let news=[];

// let fruits = ["mango","banana","papaya"];
// console.log(fruits[0]="graps");

// let cars = ["maruti","bmw","varna"];
// console.log(cars.push("marcdic"));

// let cars = ["maruti","bmw","varna"];
// console.log(cars.pop());

// let follower = ["a","b","c"];
// let blocked = follower.shift();
// console.log(follower);

// let name = ["saurav","manjeet","aditya"];
// let unfriend = name.shift();
// console.log(name);

// for the given start of an array.change it to final form using methods.
// let month = ["january","july","march","august"];
// month.shift();
// month.shift();
// month.unshift("june");
// month.unshift("july");
// console.log(month);

// let cars = ["bmw","odi","farari","marcidic"];
// // cars.indexOf("odi");
// cars.includes("odi");

// let primary = ["red","yellow","blue"];
// let secondary = ["orange","green","violet"];
// console.log(primary.concat(secondary));

// let primary = ["red","yellow","blue"];
// console.log(primary.reverse());

// let colors = ["red","yellow","blue","orange","green","violet"];
// // colors.slice();
// // colors.slice(2);
// console.log(colors.slice(2,3));

//  let colors = ["red","yellow","blue","orange","green","violet"];
//  console.log(colors.splice(0,1,"black","pink"));

  //sorts methods
// let days = ['monday','tuesday','wednesday','thrusday','friday','saturday','sunday'];
// console.log(days.sort());
// let char = ['d','f','a','c','h','o','g'];
// console.log(char.sort());

// let marks = [1,3,4,2,5,6,7,8,9,10];
// console.log(marks.sort());
 
       //practice qs
 // for the given start sate of an array,change it to final form using splice
      //  let years = ['january','july','march','august'];
      //  years.splice(0,2,"july","june");
      //  console.log(years);

      //qs2 Return the index of the "javascript" form the given array.if it was reversed.
      // let subject = ['c','c++','html','javascript','python','java','c#','sql'];
      // subject.reverse().indexOf("javascript");
      // console.log(subject);

      // nested array 
      // let nums = [[2,4],[5,8],[9,7]];
      //  console.log(nums[0]);

       // Practice qs
       //create a nested array to show the following tic-tac-toe game state.
      //  let games = [["x",null,"0"],[null,"x",null],["0",null,"x"]];
      //  console.log(games);

      // assigment practice qs
      //Qs1.Write a JavaScript program to get the first n elements of an array.[n can be any positive number].For example:for array[7,9,0,-2]andn=3Print,[7,9,0].
      // let arr = [7,9,0,-2]
      // let n = 3;

      // let ans = arr.slice(0,n);
      // console.log(ans);

      //Qs2.WriteaJavaScriptprogramtogetthelastnelementsofanarray.[ncanbeanypositivenumber].Forexample:forarray[7,9,0,-2]andn=3Print,[9,0,-2]
      // let arr =[7,9,0,-2];
      // let n = 3;
      // let ans = arr.slice(arr.length-n);
      // console.log(ans);

      //Qs3.WriteaJavaScriptprogramtocheckwhetherastringisblankornot.
      let str = prompt("please enter a string");
      if(str.length == 0){
        console.log("string is empty");
      }else{
        console.log("string is not empty");
      }
      //s4.WriteaJavaScriptprogramtotestwhetherthecharacteratthegiven(character)indexislowercase
      let str = "sauravkumar";
      let idx = 3;
      if(str[idx] == str[idx].toLowerCase()){
        console.log("character is lowercase");
      }else{
        console.log("character is not lowercase");
      }

      //Qs5.WriteaJavaScriptprogramtostripleadingandtrailingspacesfromastring.
      // let str = prompt("please enter a string");
      // console.log('original string = $(str)');
      // console.log('string without spaces = ${str.trim()}');

      //Qs5.WriteaJavaScriptprogramtostripleadingandtrailingspacesfromastring.
      // let arr = ["hello",'a',23,64,99,-6];
      // let item = 64;
      // if(arr.indexOf(item) != -1){
      //   console.log("element exits in arry");
      // }else{
      //   console.log("enter doesnot exit in array");
      // }



  

