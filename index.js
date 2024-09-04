//! 1-Write a program that allow to user enter number then print it
/*var number = window.prompt("enter number ");
window.alert(number);*/


//!2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
/*var number = window.prompt("enter number");
number = Number(number);
if (number % 3 == 0 && number %4 == 0){
    window.alert("yes")
}else{
    window.alert("no")
}*/



//!3- Write a program that allows the user to insert 2 integers then print the max
/*var number1 = Number( window.prompt("enter number 1"));
var number2 = Number( window.prompt("enter number 2"));
if(number1 > number2 ){
    window.alert(number1)
}else{
    window.alert(number2)
}*/



//!4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
/* var number = Number( window.prompt("enter number "));
if(number<0){
    window.alert("negative")
}else{
    window.alert("positive")
} */



//!5- Write a program that take 3 integers from user then print the max element and the min element.
/*var number1 = Number( window.prompt("enter number 1"));
var number2 = Number( window.prompt("enter number 2"));
var number3 = Number( window.prompt("enter number 3"));

if(number1>number2 && number1>number3){
    window.alert("mix number is :" +number1)
}else if(number2>number1&&number2>number3){
    window.alert("mix number is :"+number2)
}else if(number3>number1&&number3>number2){
    window.alert("mix number is :"+number3)
}
if (number1<number2 && number1<number3){
    window.alert("min number :"+ number1)
}else if (number2<number1 && number2<number3){
    window.alert("min number :"+ number2)
}else if (number3<number2 && number3<number1){
    window.alert("min number :"+ number3)
}*/


//!6- Write a program that allows the user to insert integer number then check If a number is oven or odd
/*var number = Number( window.prompt("enter number "));
if(number %2 == 0){
    window.alert("even")
}else{
    window.alert("odd")
}*/



//!8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
/*var char = window.prompt("enter your char");
switch (char) {
    case 'a':
    case 'e':
    case 'I':
    case 'o':
    case 'u':
        window.alert("vowel");
        break;
        default:
            window.alert("consonant");
            break;
}*/


//!9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
/*var number = Number( window.prompt("enter number "));
for(var i = 1 ;i <= number ; i++){
    window.alert(i);
}*/



//!10- Write a program that allows user to insert integer then print a multiplication table up to 12.
/*var number = Number( window.prompt("enter number "));
for(var i= 1; i<=12 ; i++){
    window.alert(i*number)
}*/


//!11- Write a program that allows to user to insert number then print all even numbers between 1 to this number
/*var number = Number( window.prompt("enter number "));
for(var i =1 ; i <= number ; i++){
    if(i%2==0){
        window.alert(i);
    }
}*/


//!12- Write a program that take two integers then print the power
/*var number = Number( window.prompt("enter number "));
var power = Number( window.prompt("enter power"));
var result=1 ;
for(var i = 0 ; i <power ; i++){
    result*= number;
}
window.alert(result)*/


//!12- Write a program to enter marks of five subjects and calculate total, average and percentage.
/*var total = 0;
for(var i =0 ; i<5 ; i++){
    total+=Number( window.prompt("enter mark subject "+(i+1)));
}
window.alert("total marks = "+ total);
window.alert("average = "+ total/5);
window.alert("percentage = "+ total/500 * 100+ "%");*/


//!13-Write a program to input month number and print number of days in that month.
/*var monthNo = window.prompt("enter month number :")
if(monthNo == 1 || monthNo==3 || monthNo==5|| monthNo ==7 || monthNo ==8 || monthNo==10 || monthNo==12){
    window.alert("31")
}else if (monthNo == 2){
    window.alert("28 days in common year and 29 days in leap years")
}else if (monthNo ===4 || monthNo==6 || monthNo == 9|| monthNo==11){
    window.alert("30")
}*/


//!14- Write a program to input marks of five 
//!subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

/*var Physics = Number(window.prompt("enter Physics subject : "));
var Chemistry = Number(window.prompt("enter Chemistry subject : "));
var Biology = Number(window.prompt("enter Biology subject : "));
var Mathematics = Number(window.prompt("enter Mathematics subject : "));
var Computer = Number(window.prompt("enter Computer subject : "));

var percentage = (Physics+Chemistry+Biology+Mathematics+Computer)/500*100;

if(percentage >= 90){
    window.alert("grad A")
}else if(percentage >= 80){
    window.alert("grad B")
} else if(percentage >= 70){
    window.alert("grad C")
} else if(percentage >= 60){
    window.alert("grad D")
} else if(percentage >= 40){
    window.alert("grad E")
} else if(percentage < 40){
    window.alert("grad F")
} */




//!15- Write a program to print total number of days in month
/*var monthNo = window.prompt("enter month number :");
switch (monthNo) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        window.alert("31");
        break;
    case "2":
        window.alert("28 days in common year and 29 days in leap years");
        break;
    case "4":
    case "6":
    case "9":
    case "11":
        window.alert("30");
        break;  

}*/


//!16- Write a program to check whether an alphabet is vowel or consonant
/*var char = window.prompt("enter your char");
switch (char) {
    case 'a':
    case 'e':
    case 'I':
    case 'o':
    case 'u':
        window.alert("vowel");
        break;
        default:
            window.alert("consonant");
            break;
}*/


//!17- Write a program to find maximum between two numbers
/*var number1 = Number(window.prompt("enter number 1"));
var number2 = Number(window.prompt("enter number 2"));


switch (number1 > number2) {
    case true:
        window.alert(number1);
        break;
    case false:
        window.alert(number2);
        break;
}*/


//!18- Write a program to check whether a number is even or odd
/*var number = window.prompt("enter number ");
switch (number % 2 == 0) {
    case true:
        window.alert("even");
        break;
    case false:
        window.alert("odd");
        break;
}*/



//!19- Write a program to check whether a number is positive or negative or zero
/*var number = Number(window.prompt("enter number "));
switch (number > 0) {
    case true:
        window.alert(" number is positive ")
        break;
    case false:
        switch (number == 0) {
            case true:
                window.alert("0");
                break;
            case false:
                window.alert(" nuber is negative");
                break;
        }
        break;
}*/




//!20- Write a program to create Simple Calculator
var number1 = Number(window.prompt("enter number 1"));
var number2 = Number(window.prompt("enter number 2"));
var sign = window.prompt("enter sign");

switch (sign) {
    case '+':
        window.alert(number1+number2);
        break;
    case '-':
        window.alert(number1-number2);
        break;
    case '*':
        window.alert(number1*number2);
        break;
    case '/':
        window.alert(number1/number2);
        break;

}
