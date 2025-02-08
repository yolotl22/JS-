//Exercise #5
//For each of the exercises below, assume you are starting with the following people array.
//let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Write a command that prints out all of the people in the list.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
console.log (people.length);

//Write the command to remove "Dani" from the array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"].splice(2);

//Write the command to remove "Juan" from the array.
let people = ["Maria", "Luis", "Juan", "Camila"].splice(4);
console.log (people);

//Write the command to move "Luis" to the front of the array.
let people = ["Maria", "Dani", "Luis", "Camila"].splice(2);
console.log (people.unshift(3)); 
console.log(people);

//Write the command to add your name to the end of the array.
let people = ["Luis", "Maria", "Camila"].push("Yoli");
console.log (people);

//Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
let people = ["Luis", "Maria", "Camila", "Yoli"];
for (let i = 0; i <people.length; i++) {
console.log (people [i])

};


console.log (people);

//Write the command that gives the indexOf where "Maria" is located.
let people = ["Luis", "Maria", "Camila", "Yoli"];
console.log (people.indexOf (2));

//At the end of the exercise, there should be 4 people in the array. 
let people = ["Luis", "María", "Camila", "Yoli"];
