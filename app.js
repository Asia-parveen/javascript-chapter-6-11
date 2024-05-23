// chapter 6

// MATH EXPRESSIONS
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// let a = 10;

// document.write(`<b>Result<b><br><br>The value of a: ${a} <br>......................................<br><br><br>`);
// ++a
// document.write(`The value of ++a is: ${a}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`);

// document.write(`The value of a++ is: ${a}<br>`);
// a++;
// document.write(`Now the value of a is: ${a}<br><br>`);
// --a;
// document.write(`The value of --a is: ${a}<br>`);
// document.write(`Now the value of a is: ${a}<br><br>`);
// document.write(`The value of --a is: ${a}<br>`);
// --a;
// document.write(`Now the value of a is: ${a}<br><br>`);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// let a =2;
// let b = 1;
// let result = --a;
// document.write(`a is ${result}<br>`);
//  result =  --a - --b;
//  document.write(`b is ${result}<br>`);
//  result = --a - --b + ++b;
// document.write(`Result is ${ result }<br>`);

// 3. Write a program that takes input a name from user &
// greet the user.

// let userName = prompt("Enter your name");
// // let greet = prompt("Welcome to my site")
// document.write(`Hello ${userName}! <b>welcome to visit my site<b> `);

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// let userNum = +prompt("Enter a number","5");
// for (let i = 1; i <=10 ; i++){
//     let res = userNum*i;
//      document.write(`${userNum} * ${i} = ${res}<br>`);

// };

// chapter 6 End

// chapter 7 start
// chapter 9

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let cityName = prompt("Enter your city name");
// if (cityName == "karachi"){
//     console.log("Welcome to city of lights");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let userAns = prompt("Enter your gender"); 
// if( userAns === "male" ){
//     console.log("Good Morning Sir.");
// }else if(userAns === "female"){
//     console.log(" Good Morning Ma’am.");
//     }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// let userClr = prompt("Enter your color");
// if(userClr === "red"){
//     console.table(`${userClr}: must stop`);
// }else if (userClr === "yellow"){
//     console.table(`${userClr}:Ready to move`);
// }else if(userClr === "green"){
//     console.table(`${userClr}: move now`);
// }

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// let userFuel = prompt("remaning fuel");
// if ( userFuel < 0.25){
//     console.log("Please refill the fuel in your car");
// }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }


//a
// let a = 4;
// a++
// if (++a === 5){
//    alert("given condition for variable a is true");
// }


//b

// let b = 82;
// b++;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// c

// let c = 12;
// c++;
// if (c++ === 13){
// alert("condition 1 is true")
// };
// if (c === 13){
//     alert("condition 2 is true")
// };
// if (++c < 14){
//     alert("condition 3 is true")
// };
// if(c === 14){
//     alert("condition 4 is true")
// }

// d.

// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// e

// if ( true) {
//     alert("True")
// };

// if (false){
//     alert("false")   //alert not run in this false condition
// };

// f

 
// if("car" < "cat") {
// alert("car is smaller than cat");
// }

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// document.write("<h1><b>Marks Sheet<b><br></h1>");
// let obtainedMarks = +prompt("Enter your obtained marks");
// document.write(`Obtained Marks: ${ obtainedMarks} <br>`);
// let totalMarks = 300;
// document.write(`Total Marks: ${totalMarks} <br>`);

// let percentage =obtainedMarks/totalMarks*100;

// document.write(`percentage: ${percentage}<br>`)
// if (percentage >= 80){
//     document.write("Grade: A-one <br> Remarks: Excellent");
// }else if (percentage >= 70){
//         document.write("Grade: A <br> Remarks: Good");
// }else if (percentage >= 60){
//      document.write("Grade: B <br> Remarks: You need to improve");
// }else if (percentage < 60) {
//       document.write("Fail <br> Remarks:sorry");
// }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// let userNum = +prompt("Guess the number");
// let secretNum = 10;
// if (userNum < 10 && userNum > 0){
//     console.log(`Bingo!  Correct answer`);
// }else if (userNum++ == secretNum){
//     console.log(`Close enough to the correct answer`);
// }
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// let num = 9;
// if (num % 3 == 0){
//     console.log(`the nuber is divisible by 3`);
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// let userNum = +prompt("Enter any number");
// if ( userNum % 2 == 0){
//     console.log(`Even number`);
// }else if (userNum % 2 == 1){
//     console.log(`Odd number`);
// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let userTem = +prompt("Enter temprature");
// if (userTem > 40){
//     console.log(`It is too hot outside.`);
// }else if (userTem > 30){
//     console.log(`The Weather today is Normal.`);
// }else if (userTem > 20){
//     console.log(`Today’s Weather is cool.`);
// }else if (userTem > 10){
//     console.log(`OMG! Today’s weather is so Cool.`);
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let firstNum = +prompt("Enter first number");
// let secondNum = +prompt("Enter second number");
// let res1 =  firstNum  +  secondNum ;
// let res2 =  firstNum  -  secondNum ;
// let res3 =  firstNum  *  secondNum ;
// let res4 =  firstNum  /  secondNum ;
// let res5 =  firstNum  %  secondNum ;

// console.log( res1 );
// console.log( res2 );
// console.log( res3 );
// console.log( res4 );
// console.log( res5 );






 



 



