// Qs 1...

// let num=prompt("Enter a number: ")
// if (num%5==0)
//     console.log(num,"is multiple of 5")
// else
//     console.log(num,"is not multiple of 5")


// Qs 2...

// let score = prompt("Enter your score: ")
// if (score>=90 && score<=100)
//     console.log("Your grade is A")
// else if (score>=70 && score<=89)
//     console.log("Your grade is B")
// else if (score>=60 && score<=69)
//     console.log("Your grade is C")
// else if (score>=50 && score<=59)
//     console.log("Your grade is D")
// else
//     console.log("Your grade is F")


// FOR LOOP...

// for(let i=1;i<=5;i++)
//     console.log("Hello World")


// Qs 3. sum of n number...

// let sum=0
// for(let i=1;i<=5;i++)
//     sum+=i
// console.log(sum)


// FOR-OF LOOP...

// let str="SurojitSaha"
// let size=0
// for(let i of str){
//     console.log("i=",i)
//     size++}
// console.log("String Size: ",size)


// Qs 4. Print all even no from 0 to 100...

// for(let i=0;i<=100;i++)
//     if(i%2==0)
//         console.log(i)


// Qs 5. Game number...

// let gamenum=30;
// let usernum=prompt("Guess the game number");
// while(usernum!=gamenum){
//     usernum=prompt("Re-enter game number")
// }
// console.log("Congratulations");


// STRING JS...

// let obj={
//     item:"pen",
//     price:10,
// };
// let output=`The cost of ${obj.item} is ${obj.price}`;
// console.log(output);
// console.log("The cost of", obj.item ,"is", obj.price);


//  Qs 6... 

// let nam=prompt("Enter your full name");
// let len= nam.length;
// let username= "@"+nam+nam.length;
// let username="@"+nam.concat(len);
// console.log(username);


// ARRAY...

// let marks=[98,84,86,95,75];
// console.log(marks);

// let nam=["Surojit","Rup","Shibnath","Kanan"];
// for(let i=0;i<nam.length;i++){
//     console.log(nam[i]);
// }


// Qs 7... Avg marks

// let marks=[85,97,44,37,76,60];
// let sum=0;
// // for( let i=0;i<marks.length;i++){
// for( let i of marks){
//     // sum=sum+marks[i];
//     sum=sum+i;
// }
// let avg = (sum/marks.length);
// console.log(avg);


// Qs 8... price value array

// let prices=[250,645,300,900,50];
// let i=0;
// for (let val of prices){
//     let offer= val/10;
//     prices[i]-=offer;
//     console.log(prices[i]);
//     i++;
// }
// console.log(prices);


// Qs 9...

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log(companies);
// // a
// let remove=companies.shift();
// console.log(remove);
// console.log(companies);
// // b
// let replace=companies.splice(2,1,"Ola");
// console.log(replace);
// console.log(companies);
// // c
// let add=companies.push("Amazon");
// console.log(add);
// console.log(companies);


// FUNCTION...

//  function demo(){
//     console.log("Hello User");
//     console.log("I am Surojit Saha.");
//  }
//  demo();

// function demo(msg,n){
//     //parameter=input
//     console.log(msg,n);    
// }
// demo("I am Surojit",100);//argument

// ARROW FUNCTION...

// const mul=(a,b)=>{
//     console.log(a*b);
// }
// mul(3,4);


// Qs 10...

// function cv(str){
//     let c=0;
//     for(let v of str){
//         if (v=="a"||v=="e"||v=="i"||v=="o"||v=="u"){
//             c++;
//         }
//     }
//     console.log(c);
// }


// Qs 11...

// const cv=(str)=>{
//     let c=0;
//     for(let v of str){
//         if (v=="a"||v=="e"||v=="i"||v=="o"||v=="u"){
//             c++;
//         }
//     }
//     console.log(c);    
// }


// Qs 12...  FOREACH LOOP IN ARRAY    

// let arr=[2,3,4];
// arr.forEach((val)=>{
//     console.log(val*val);    // console.log(val**2);    
// })


// Qs 13...

// let marks=[95,85,91,71,68,99];
// let score=marks.filter((val)=>{
//     return val > 90;
// })
// console.log(score);


// Qs 14...

// let n = prompt("Enter any number: ");
// let arr=[];
// for(i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum = arr.reduce((res,pre) =>{
//     return res+pre;
// })
// console.log(sum);
// let fact = arr.reduce((res,pre) =>{
//     return res*pre;
// })
// console.log(fact);


// DOM(Document Object Model)...

//  console.log(document.body);
//  console.dir(document.body.childNodes[1]);
//  console.dir(document.body.childNodes[3].innerText="World");
// document.body.style.backgroundColor="blue";


// D.O.M Manipulation...

//  let head=document.getElementById("heading");
// console.log(head);
// console.dir(head);

// let head=document.getElementsByTagName("h1");
// console.log(head);
// console.dir(head);


// QUERY SELECTOR...

// let ele= document.querySelector("h1");
// console.log(ele);
// console.dir(ele);

// let ele= document.querySelectorAll("h1");
// console.log(ele);
// console.dir(ele);


//   Qs 15...

// let h2=document.querySelector("h2");
// console.log(h2.innerText);

// h2.innerText=h2.innerText + " lets practice now";
// console.log(h2);


// Qs 16...

// let div=document.querySelectorAll(".box");
// let idx=1;
// // console.log(div[0]);
// // div[0].innerText="This is my 1st div";
// // div[1].innerText="This is my 2nd div";
// // div[2].innerText="This is my 3rd div";
// for(i of div){
//     // console.log(i.innerText);
//     i.innerText=`This is div no ${idx}`;
//     idx++;
// }


// ATTRIBUTE(DOM)...

// let div= document.querySelector("div");
// console.log(div.getAttribute("id"));

// let clas= document.querySelector("p");
// console.log(clas.getAttribute("class"));


// STYLE(DOM)...

// let div = document.querySelector("div");
// console.log(div);
// div.style.backgroundColor="red";


// INSERT ELEMENTS...

// let btn = document.createElement("button");
// btn.innerText = "Click Me";
// console.log(btn);

// let div = document.querySelector("div");
// div.append(btn);
// div.prepend(btn);
// div.before(btn);
// div.after(btn);

// let newhead=document.createElement("h1");
// newhead.innerHTML="<i> Hello Users<i>";
// document.querySelector("body").prepend(newhead);
// document.querySelector("body").append(newhead);


// Qs 17...

// let but= document.createElement("button");
// but.innerText="Click me.";
// but.style.color="white";
// but.style.backgroundColor="red";
// document.querySelector("body").prepend(but);


// Qs 18...

// let para = document.querySelector("p");
// console.log(para.classList.add("newpara"));
// console.log(para.classList.remove("para"));


// EVENTS IN JS...

// EVENT HANDLING...

// let btn= document.querySelector("#but");
// btn.onclick=()=>{
//     console.log("Button was clicked.");  
// }

// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("Inside div.");
// }


// EVENT OBJECT...

// let btn= document.querySelector("#but");
// btn.onclick=(e)=>{
    //     console.log("Button was clicked.");
    //     console.log(e);
    //     console.log(e.type);
    //     console.log(e.target);
    //     console.log(e.clientX,e.clientY);    
    // }

    
    // EVENT LISTENERS...
    
    
// let btn= document.querySelector("#but");
// btn.addEventListener("click",()=> {
//     console.log("Button was clicked");
    
// });

// btn.addEventListener("click",()=> {
//     console.log("Button was clicked again");
    
// });

// btn.addEventListener("click",(evt)=> {
    //     console.log("Button was clicked");
    //    console.log(evt) ;
    // });    
    
// btn.addEventListener("click",()=> {
//     console.log("Button was clicked 1");
    
// });
// btn.addEventListener("click",()=> {
//     console.log("Button was clicked 2.");
    
// });

// const click3=()=>{
//     console.log("Button was clicked 3.");
// };

// btn.addEventListener("click",click3);

// btn.addEventListener("click",()=> {
//     console.log("Button was clicked 4.");
    
// });

// btn.removeEventListener("click",click3);


// Qs 19...

// let modebut=document.querySelector("#but");
// let mode="light";
// modebut.addEventListener("click",()=>{
//     console.log("Tring to change mode.");
//     if(mode==="dark"){
//         mode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     else{
//         mode="dark"
//         document.querySelector("body").style.backgroundColor="black";
//     } 
//     console.log(mode);
// })


// CLASSES & OBJECTS....

// const std={
//     nam:"Surojit Saha",
//     marks:90.4,
//     printmarks: function(){
//         console.log("marks= ", this.marks);
//     },
// };

// const emp={
//     caltax(){
//         console.log("Tax rate 10%");
//     },
// };
// const newemp={
//     sal:10000,
// };
// newemp.__proto__=emp;
// const newemp={
//     sal:10000,
//     caltax(){
//         console.log("Tax rate 20%");
//     },
// };
// newemp.__proto__=emp;


// CLASSES in JSON....

// class bajaj{
//     start(){
//         console.log("start");  
//     }
//     stop(){
//         console.log("stop");
//     }
//     sbrand(brand){
//         this.sbrand=brand;
//     }
// };
// let honda=new bajaj();
// honda.sbrand("honda");
// let hero=new bajaj();
// hero.sbrand("hero");


// CONSTRUCTORS...

// class bajaj{
//     constructor(brand,milage){
//         console.log("Creating Object");
//         this.sbrand=brand;
//         this.milage=milage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// };
// let honda=new bajaj("honda",20);
// console.log(honda);
// let hero=new bajaj("hero",25);
// console.log(hero);


// INHERITANCE...

// class parent{
//     hello(){
//         console.log("Hello");
//     }
// }
// class child extends parent{}
// let obj = new child();

// class person{
    // constructor(){
    //     this.species="homo sepience";
    // }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// };
// class engineer extends person{
//     work(){
//         console.log("Solve problems.");
//     }
// }
// let obj=new engineer();


// SUPER Keywork...

// class person{
//     constructor(){
//     // constructor(nam){
//         this.species="homo sepience";
//         // this.nam=nam;
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// };
// class engineer extends person{
//     constructor(branch){
//     // constructor(nam){
//         super();
//         // super(nam);
//         this.branch=branch;
//     }
//     work(){
//         console.log("Solve problems.");
//     }
// }
// let obj=new engineer("CSE");
// // let obj=new engineer("Surojit");


// Qs 20...

// let data="Secrate info";
// class User{
    //     constructor(nam,email){
    //         this.nam=nam;
    //         this.email=email; 
    //     }
    //     vdata(){
    //         console.log("Data is=",data);   
    //     }
    // }
// let std1=new User("Surojit","abc@gmail.com");
// let std2=new User("Suro","xyz@gmail.com");
// let teacher1=new User("Rup","teach@gmail.com");


// Qs 21...

// let data="Secrate info";
// class User{
//     constructor(nam,email){
//         this.nam=nam;
//         this.email=email; 
//     }
//     vdata(){
//         console.log("Data is=",data);   
//     }
// }
// class Admin extends User{
//     constructor(nam,email){
//         super(nam,email);
//     }
//     editData(){
//         data="data is edited from user.";
//     }
// }
// let std1=new User("Surojit","abc@gmail.com");
// let std2=new User("Suro","xyz@gmail.com");
// let teacher1=new User("Rup","teach@gmail.com");
// let admin=new Admin("Suro","admin@gmail.com");


// ERROR Handling...

// let a= 10;
// let b= 20;
// console.log(a);
// console.log(b);
// console.log(a+b);
// console.log(a-b);
// console.log(a-b);
// try{
//     console.log(a+c);
// }catch(err){
//     console.log(err);
// }
// console.log(a-b);
// console.log(a-b);
// console.log(a-b);


// ASYNC AWAIT...

// setTimeout(()=>{
//     console.log("hello");    
// },2000);

// console.log("1");
// console.log("2");
// setTimeout(()=>{
//     console.log("hello");    
// },2000);
// console.log("3");
// console.log("4");

 
// CALLBACK...

// function sum(a,b){
//     console.log(a+b);
// }
// function cal(a,b,sumcal){
//     sumcal(a,b);
// }
// cal(2,5,sum);

// const hello = ()=>{
//     console.log("hello");
// }
// setTimeout(hello,1000);


// CaLLBACK HELL...

// function setdata(Data,nxtdata){
//     setTimeout(() => {
//         console.log("Data",Data);  
//         if(nxtdata){
//             nxtdata();
//         };
//     },1000);
// }
// setdata(1,()=>{
//     setdata(2,()=>{
//         setdata(3,()=>{
//             setdata(4);
//         });
//     });
// });


// PROMISES...

// let promises= new Promise((resolve,reject)=>{
//     console.log("Hello promise me");
//     resolve("success");
//     // reject("error");
// });
// function setdata(Data,nxtdata){
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         // console.log("Data",Data); 
//         // resolve("success"); 
//         reject("error"); 
//         if(nxtdata){
//             nxtdata();
//         };
//     },1000);
// });
// }

// const getpromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("Hello promise me");
//         resolve("success");
//         // reject("Error");
//     });
// };
// let promise=getpromise();
// promise.then((res)=>{
//     console.log("filfilled!",res);
// })
// promise.catch((err)=>{
//     console.log("Error!",err);
// })

// function asynfun(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data one!");
//             resolve("Success!");
//         },2000);
//     });
// };
// function asynfun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Data one!");
//             resolve("Success!");
//         },4000);
//     });
// };
// console.log("Fetching Data1!");
// let p=asynfun();
// p.then((res)=>{
//     // console.log(res);
//     console.log("Fetching Data2!");
//     let p1=asynfun1();
//     p1.then((res1)=>{
//         // console.log(res1);
// })});


// ASYNC-AWAIT...

// async function hello(){
//     console.log("hello!");
// }

// function fun(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         console.log("weather data");
//         // resolve("success!");
//         resolve(200);
//       },2000);
//     });
// }
// async function wdata() {
//     await fun();
//     await fun();
// }

// function fun(){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         console.log("weather data");
//         // resolve("success!");
//         resolve("Success!");
//       },2000);
//     });
// }
// async function getfun() {
//     await fun(1); 
//     await fun(2);
//     await fun(3);
// }