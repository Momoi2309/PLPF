
//Cerinta 1 : Răspundeti întrebărilor de la pagina 3.

var people = [ {name: "Fred", age: 65, health: 3},
    {name: "Lucy", age: 36, health: 5},
    {name: "Max", age: 25, health: 7},
    {name: "Gabriel", age: 80, health: 1}
];

function getbest(fun, coll) {
    return _.reduce(coll, function(x, y) {
        return fun(x, y) ? x : y
    });
}

var youngest = getbest(function(x, y) {
    return x.age < y.age
}, people);


var healthless = getbest(function(x, y) {
    return x.health < y.health
}, people);


var healthThenAge = getbest(function (x, y) {
    return x.health === y.health ? x.age < y.age : x.health < y.health;
}, people);

console.log("Youngest person:", youngest);
console.log("Healthless person:", healthless);
console.log("Health then age:", healthThenAge);

//Cerinta 2:Generatii toate numerele divizibile cu 10 de la 1 la 1000, folosind functii de nivel înalt

console.log("\nNumbers from 1 to 1000 divided by 10:");
function generateNumbers(fun, coll) {
    return function (){
        console.log(coll.filter(n => fun(n)));
    }
}

const dividebyten = generateNumbers(nr => nr % 10 === 0, _.range(1, 1001));
dividebyten(); //apelul functiei

//Cerinta 3:Agregator

const agregator = (arr, fun) => {
    return _.reduce(arr, fun);
}

const numbers = [8,4,6,7,1,3];

const sum = agregator(numbers, (x, y) => x + y);
const average = agregator(numbers, (acc, curr) => curr === numbers[numbers.length - 1] ? (acc + curr) / numbers.length : acc + curr);
const median = agregator(numbers, (x, y) => x === numbers.sort()[numbers.length / 2] ? x : y);
const maximum = agregator(numbers, (x, y) => Math.max(x, y));
const minimum = agregator(numbers, (x, y) => Math.min(x, y));
const peopleAge = agregator(people.map(p => p.age), (x, y) => x + y);

console.log("Sum: ", sum);
console.log("Average: ", average);
console.log("Median:  ", median);
console.log("Maximum: ", maximum);
console.log("Minimum: ", minimum);
console.log("Sum of people's age: ", peopleAge);