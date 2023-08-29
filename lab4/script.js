
//cerinta 1
const users = [
    { name: "Ana", age: 15 },
    { name: "Ion", age: 19 },
    { name: "Dan", age: 25 },
];

const myfilter = f => arr => arr.filter(f);
const mymap = f => arr => arr.map(f);
const compose = (...functions) => args => functions.reduce((arg,fn) => fn(arg), args);

res = compose(
    myfilter(u => u.age >= 18 ), // inainte erau inversate. Mymap inainte de myfilter
    mymap(u => u.name)
)(users);

console.log("\nUserii cu varsta peste 18 sunt:",res);

// suma primelor n nume naturale pare

function getNumbers(n) {
    const numbers = [];
    for(let i=0; i<=n;i++)
    {
        numbers.push(i);
    }return numbers
}

let array1 = getNumbers(10);

sum = 0; //initializez suma cu 0
res = compose(
    myfilter(u => u%2===0 ),
    mymap(u => sum =sum + u)
)(array1);

console.log("Suma primelor n numere nat pare este:",sum);


let array2 = getNumbers(20);
sum = 0;
 res = compose(
    myfilter(u => u%2===1 ),
    mymap(u => sum =sum+ u)
)(array2);

console.log("Suma primelor n numere nat impare este:",sum);

//cerinta 2

let array3 = getNumbers(1000);
res = compose(
    myfilter(u => u%10===0 ),
    mymap(u => u)
)(array3);

console.log("\nNumere de la 1 la 1000 divizibile cu 10:",res);
//console.log(res.length);

//cerinta 3

const projects = [
    { nume: "Proiect PLF", dataCrearii: "2020-03-20", dataUltimeiModificari: "2020-03-25", activ: true,  detalii: "Javascript"},
    { nume: "Proiect SO", dataCrearii: "2021-02-01", dataUltimeiModificari: "2021-02-20", activ: true, detalii: "Linux"},
    { nume: "Proiect PA", dataCrearii: "2022-10-25", dataUltimeiModificari: "2022-10-28", activ: false, detalii: "Java"},
    { nume: "Proiect LDH", dataCrearii: "2019-06-14", dataUltimeiModificari: "2019-06-23", activ: false,  detalii: "Verilog"},
    { nume: "Proiect IA", dataCrearii: "2019-12-20", dataUltimeiModificari: "2019-12-27", activ: true,  detalii: "Python"},
    { nume: "Proiect GUI", dataCrearii: "2019-11-20", dataUltimeiModificari: "2019-12-29", activ: true,  detalii: "C#"},
    { nume: "Proiect POO", dataCrearii: "2018-02-20", dataUltimeiModificari: "2019-03-04", activ: true,  detalii: "C++"},
];

projects.sort(function compare(a, b) {
    var date1 = new Date(a.dataUltimeiModificari);
    var date2 = new Date(b.dataUltimeiModificari);
    return date2 - date1;
});

res = compose(
    myfilter(u => u.activ ),
    mymap(u => u.nume + " : " + u.detalii + "--" + u.dataUltimeiModificari)
)(projects);

console.log("\nProiecte active ordonate crescator dupa data ultimei modificari:",res);
