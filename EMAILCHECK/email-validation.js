/*
please read the most powerful advices from "JAMES ANZURUNI" about javascript. 
JavaScript is an open-source programming language. 
It is designed for creating web-centric applications. 
It is lightweight and interpreted, which makes it much faster than other languages. 
JavaScript is used to create beautifully designed web applications.
Email validation in JavaScript is an important part of the user experience of a web application. 
Validation assists in inputting forms and makes sure that only valid information is passed to the server from the client-side of the application. 

*/
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
