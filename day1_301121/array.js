/*
[
    { field: 'name', value: 'Sơn Đặng' },
]

OUTPUT:
{ name: 'Sơn Đặng' }
*/
/*
let array = [
    { field: 'name', value: 'Sơn Đặng' },
]

function getRequest(myArray) {
    let result = {};

    console.log(myArray);
    
    
}

*/

/*
const myArray = ["Javascript"];
myArray.push("HTML");
console.log(myArray);
*/

/*
const myArray = new Array(4);
// console.log(myArray.fill("X"));

const arr = Array(4);
console.log(arr.fill("js"));
*/

/*
const myArray = new Array(5).fill("JS");
// console.log(myArray);

const arr = ["Javascript", "HTML"];
console.log(arr.fill("JS"));

*/

//fill push concat, split
// indexOf, lastIndexOf, Array.isArray includes

//fill
// const arr = new Array(8);
// console.log(arr.fill('js'));

//push
/*
const myArray = ["HN", "Paris", "HCM"];
myArray.push("Cananda");
console.log(myArray);
*/

//concat
/*
const premier = ["HN", "Paris", "HCM"];
const second = ["Bordeaux"];
const espace = " ";
console.log(premier.concat(second));
*/

//split
/*
const arr = "HN, Paris, HCM";
console.log(arr.split(','));
*/

//indexOf
// const villes = ["HN", "Paris", "HCM"];
/*
console.log(villes.indexOf("Paris"));
console.log(villes.includes("Nghe an"));
console.log(Array.isArray(villes));
*/

//slice splice joind
const villes = ["HN", "Paris", "HCM"];
const fruits = ["Banana", "Orange", "Kiwi"];
const result = villes.join(); 
// console.log(villes.join(' # '));
// console.log(fruits.toString());

//splice
const numbers = [2, 3, 4, 5, 6];
console.log(numbers.splice(0, numbers.length));
// console.log(numbers.splice(1, 4,  ));
