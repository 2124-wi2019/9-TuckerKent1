/*
    Tucker Kent
    kent_a09b.js
    19WI_INFO_2124_WW Online Javascript I
    Thoendel
    February 12 2020
*/

let pTag = document.getElementsByTagName("p"); //declaring and initializing variable to store HTMLCollection 
let divTag = document.getElementsByTagName("div"); //declaring and initializing variable to store HTMLCollection
let pClass = document.getElementsByClassName("paragraph"); //declaring and initializing variable to store HTMLCollection
let blockTextClass = document.getElementsByClassName("block-text"); //declaring and initializing variable to store HTMLCollection
let idVar = document.getElementById("b001"); //declaring and initializing variable for element with ID of "b001"

console.log("The total number of paragraph tags in this document is: " + pTag.length); //logging number of <p> tags to console -- getting number with length property
console.log("The total number of div tags in this document is: " + divTag.length); //logging number of <div> tags to console -- getting number with length property
console.log("The total number of elements with the class name 'paragraph' in this document is: " + pClass.length); //logging number of elements with paragraph class name to console -- getting number with length property
console.log("The total number of elements with the class name 'block-text' in this document is: " + blockTextClass.length); //logging number of elements with block-text class name to console -- getting number with length property
console.log("The element with ID attribute 'b001' contains:"); // logging String value to console
console.log(idVar); //logging contents of the class name b001 element to console