
//Cerinta 1 Intrebari din laborator
function add(x, y) {
    return x + y;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

for (i = 0; i < 10; i++) {
    a = getRandomInt(100);
    b = getRandomInt(100);
    console.assert(add(a, b) == getRandomInt(100) + getRandomInt(100), "%d + %d = %d", a, b, a + b) //producere de 10 mesaje
}

/////////////////////////////////////////////

var tax = 19; //functie impura cu var tax
// prin stergerea var tax, functia devina pura
function calculateTax(productPrice) {
    return (productPrice * (tax / 100)) + productPrice;


}
function calculateTaxPure(productPrice) {  // functie pura
    return productPrice * productPrice;
}

/////////////////////////////////////////////
var counter = 0;
function increment() {
    counter++;  // Rezultatul nu depinde de param input (de intrare) --> nu respecta regula 3
}
/////////////////////////////////////////////

const time = () => new Date().toLocaleTimeString(); // Functia nu depinde de parametrul input,poate produce efecte secundare din cauza "Date" (regula 4)
console.log(time());

/////////////////////////////////////////////
function appendToArray(myArray, item) {
    return [...myArray, item];
}

var arr = [1, 2, 3, 4]
arr = appendToArray(arr, 3);
console.log(arr);

let adder = {
    add: function (a, b) { //functie modificata
        return a + b;
    }
};
result = adder.add(1, 2);
console.log(result);

/////////////////////////////////////////////

let appender = {
    appendToWord: function (value) { // regula 2 am sters var de stare word(this.word)
        return "hello" + value;
    },
};
rest = appender.appendToWord(" world");
console.log(rest);


//Cerinta 2

function Function(x, y) {
    if (x === 0) {
        return 0;
    } else {
        return ((Math.pow(x, 4) * Math.sqrt(x + y))) / Math.pow(x - y, 2);
    }
}


//Cerinta 3

let student = {
    fname: 'Alex',
    lname: 'Momoi',
    faculty: 'UNIBV',
    age: 20,
    exam: 'PLF',
    examStatus: false,
    mark: null
};
console.log("Student inainte de examen: ", student);

function passExam(student, mark) {  //respecta toate regulile de functie pura: are valori de intrare, nu are var de stare,
                                    // returneaza un obiect determinat de parametrii de intrare si nu provoaca efecte secundare cu var din afara blocului
    return {
        ...student,
        examStatus: true,
        mark: mark
    }
}
console.log("Student dupa examen: ", passExam(student, 10));
