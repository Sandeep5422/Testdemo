//for loop
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

//for in loop
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

//for of loop
let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x + "<br>";
}

//for each
let text = "";
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

document.getElementById("demo").innerHTML = text;
 
function myFunction(item, index) {
  text += index + ": " + item + "<br>"; 
}