// const nextSquare = (() =>{
//     let n = -1;
//     return () =>{ n += 1; return n * n; };
// })();
// console.log(nextSquare())
// console.log(nextSquare())
// console.log(nextSquare())
// console.log(nextSquare())

//cerinta 1
const SquareLessThanX = ((x) => {
    let nr = [];
    let i = 0;
    return (x) =>
        {
        while (i < x) {
            nr.push(i * i);
            i++
        }
        return nr;
    };
})();
console.log("Patratele numerelor naturale mai mici decat x:", SquareLessThanX(8));

//cerinta 2
function add(...args) {
    let sum1 = args.reduce(function (x, y) {
        return x + y
    });
    return function (...args) {
        let sum2 = args.reduce(function (x, y) {
            return x + y
        });
        return sum1 + sum2;
    }
}

const sum = add(1,4,5,7);
const rezultat = sum(2,8,9,3)
console.log("Suma: ", rezultat);

//Cerinta 3
function factorial(x) {
    function product() {
        if (x === 0 || x === 1) { //factorialul lui 1 si 0 e 1
            return 1;
        }
        let prod = 1;
        for (i = 1; i <= x; i++) {
            prod = prod*i;
        }
        return prod;
    }
    return product();
}

console.log("Factorial: ", factorial(3));

//Cerinta 4
function fibonacci(x) {
    function calculate() {
        let sir = [1, 1];
        if (x < 2) {
            return sir[x]
        }
        for (i = 2; i <= x; i++)
        {
            let nr = sir[i - 1] + sir[i - 2];
            sir.push(nr);
        }
        return sir[x];
    }

    return calculate();
}
console.log("Sirul Fibonacci:", fibonacci(6));