//  var a=2;
//  for(i=0; i<=10;i++){
//     console.log(a,"*",i,'=',a*i);
//  }

// for(i=0; i<=100;i++){
//     console.log(i%10 ===0 ? "this is a "+i : i);
// }

// 1 program

// var name="Gangireddy";
// console.log(name);
// if(name=="Gangireddy"){
//     console.log("my is name "+name);
// }else{
//     console.log("this is not name"+name);
// }
// re=""
// for(var n of name){
//     // full_name = n+full_name
// re +=n
//     }
// console.log(re,re.length);    

// 2 program 

// var a=10; b=20;
// console.log("result=",a+b);
// result=a+b
// if(result){
//     console.log("result= "+result)
// }
// var c=10; d=20;
// var result = 0;
// for(var n of  result ){
//     re +=n
//     console.log(re);
// }

// 3 program
// var a=10; b=20;
// console.log("result=",a-b);
// result=a-b
// if(result){
//     console.log("result= "+result)
// }

// 4 program
// var a=4;
// console.log(a*a);

// for(var i=1; i<=10;i++){
//     console.log("square of numbes= "+ i ,"=" ,(i*i))
// }
// 5 program 

// var age=23;
// nextyearAge= age+1;
// console.log(nextyearAge);

// if(age > 0){
//     console.log("next year Age= " +( age +1));
// }

// 6 program

// var d =-10;
// if(d>0){
//     console.log("postive number = "+d)
// }else{
//     console.log("negitive number= "+d);
// }

// program 7

// var s=20
// if (s%2 == 0){
//     console.log("even number is = "+s)
// }else{
//     console.log("odd number is = "+s)
// }

// program 8

// var a=23
// if (a>=18){
//     console.log("vote eligible = "+a)
// }else{
//     console.log("vote not eligible= "+a)
// }

// program 9

// var b=67;
// if(b>35){
//     console.log("this student is pass in exams= "+b)
// }else{
// console.log("this student is fail in exams= "+b)
// }

// program 10

// var c=35; d=24;
// if(c>d){
//     console.log(c +" is greater ="+d);
// }else{
//     console.log(d+"is lessthan ="+c)
// }

// program 11

// var name="Gangireddy@123"
// if(name === "Gangireddy@123"){
//     console.log("correct")
// }else{
//     console.log("wrong")
// }

// programs 12

// var B=88;
// if(B>=92){
//     console.log("grade A= "+B);
// }else if(B>=75) {
//     console.log("grade B= "+B);
// }else if(B>=50){
//     console.log("grade C= "+B)
// } else if(B>=35){
//     console.log("grade D= "+B)
// }else{
//     console.log("Fail")
// }

// program 13
// var C=23;
// if(C>=18){
//     console.log("Major= "+C);
// }else{
//     console.log("Minor= "+C)
// }

// program 14
// var A=42;
// if(A>=40){
//     console.log("HOT tempature= "+ A + " degrees")
// }else{
//     console.log("normal tempature= "+ A + " degrees")
// }

// program 15
// for(var i=1;i<=5;i++){
//     // console.log("print 1 to 5 numbers")
//     console.log(i);
// }

// program 16
// for(var i=5;i>=1;i--){
// console.log(i);
// }

// program 17

// for(var i=1;i<=10;i++){
//     if(i % 2 == 0){
//         console.log("even number= "+i)
//     }
// }

// program 18
// for(var i=1;i<=10;i++){
//     if(i % 2 !== 0){
//         console.log("odd number= "+i)
//     }
// }

// program 19

// for(var i=1;i<=20;i++){
//     if(i % 5 == 0){
//         console.log("divisible by 5 number= "+i)
//     }
// }

// program 20

// for(var i=1;i<=10;i++){
//     // if(i % 2 == 0){
//         console.log(4,"*",i ,"=",4*i)
//     }

// program 21
// var add=3;
// for(var i=1;i<=5;i++){
//       add= add +i;
// }
//         console.log(add)

// program 22
// var Array=["A","B","C","D","E","F"];
// console.log(Array);
// console.log(Array[0],"Array length of " + Array.length);

// // // Array.pop();
// // Array.push("K");
// // // Array.shift();
// // Array.unshift("M");
// // console.log(Array)

// program 23

// var Array=["A","B","C","D","E","F"];
// console.log(Array);
// console.log(Array[Array.length -1]);

// program 24
// var Array=["A","B","C","D","E","F"];
// console.log(Array);

// program 25
// var num=[2,14,86,31,3,17,88,10,98,4,9];
// for(var i=0;i<=num.length ;i++){
//     if(num[i]>=10)
//         console.log("10 greater than = "+ num[i]);
// }

// program 26
// var num=[2,14,86,31,3,17,88,10,98,4,9];
// for(var i=0;i<=num.length ;i++){
//     if(num[i]% 2 == 0){
//         console.log("this is even = " +num[i]);
//     }
// }


// program 27,28,29,30
// Array methods

// var Array=["A","B","C","D","E","F"];
// console.log(Array);
// console.log(Array.pop()," pop delete the last element",Array.length);

// console.log(Array);
// console.log(Array.push("W"),"push ADD the last element",Array.length);

// console.log(Array);
// console.log(Array.unshift("Z")," unshift ADD  the first element",Array.length);

// console.log(Array);
// console.log(Array.shift(),"first element delete ",Array.length);

// program 31,32,33,34

var B={name:"Reddy",id:35,age:23,marks:456}
console.log("name property= " + B.name)
console.log("age property= "+ B.age)

if(B.age > 18){
    console.log("Major= " + B.age );
}else{
    console.log("Minor= "+ B.age );
}

if(B.marks >= 230){
    console.log("Pass= " + B.marks );
}else{
    console.log("Fail= "+ B.marks);
}
