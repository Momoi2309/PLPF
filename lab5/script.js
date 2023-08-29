//cerinta 1
console.log("\nCerinta 1:");
function SumOfArrayRecursive(array) {
    if (_.isEmpty(array)) {
        return 0;
    }
    return array[0] + SumOfArrayRecursive(_.rest(array));
}
const sum = SumOfArrayRecursive([1, 2, 3]); //6
console.log("Sum of Array Recursive: ", sum);



function MaxOfArrayRecursive(array) {
    if (array.length == 1) {
        return array[0];
    }
    return array[0] < MaxOfArrayRecursive(_.rest(array)) ? MaxOfArrayRecursive(_.rest(array)) : array[0];
}
const max = MaxOfArrayRecursive([1, 2, 3, 4, 5]); //5
console.log("Max of Array Recursive: ", max);



function AvgSumOfArrayRecursive(array, nr) {
    let sum, avg;
    if (nr == 1) {
        sum = array[0];
    } else {
        sum = array[nr - 1] + (nr - 1) * AvgSumOfArrayRecursive(array, nr - 1);
    }
    avg = sum / nr;
    return avg;
}

const avg = AvgSumOfArrayRecursive([1, 2, 3], 3); //6/2=3
console.log("Average sum of Array Recursive", avg);


//cerinta 2 pairs
console.log("\nCerinta 2:");
function existy(x) {
    return x != null
};

function cat() {
    var head = _.first(arguments);
    if (existy(head))
        return head.concat.apply(head, _.rest(arguments));
    else
        return [];
}

function construct(head, tail) {
    return cat([head], _.toArray(tail));
}

function constructPairs(pair, rests) {
    if (_.isEmpty(pair) || _.isEmpty(rests))
        return [construct([,])];

    return [[construct(_.first(pair), _.first(rests))]].concat(constructPairs((_.rest(pair)), (_.rest(rests))));
}
pairs = constructPairs(["a", 1, 6, 8], [[2], [3], [4], [5]]);
console.log("Pairs ", pairs);

//cerinta 3 graphs

console.log("\nCerinta 3:");
var influences = [
    ["Lisp", "Smalltalk"],
    ["Lisp", "Scheme"],
    ["Smalltalk", "Self"],
    ["Scheme", "JavaScript"],
    ["Scheme", "Lua"],
    ["Self", "Lua"],
    ["Self", "JavaScript"]
];

function nexts(graph, node) {
    if (_.isEmpty(graph)) return [];
    var pair = _.first(graph);
    var from = _.first(pair);
    var to = pair[1];
    var more = _.rest(graph);
    if (_.isEqual(node, from))
        return construct(to, nexts(more, node));
    else
        return nexts(more, node);
}

function get_path_BFS(graph, initialNode, finalNode) { // breadth first traversal algorithm
    if (_.isEmpty(graph)) {
        return [];
    }
    var pair = _.first(graph);
    var from = _.first(pair);
    var to = pair[1];
    var more = _.rest(graph);
    console.log(from);
    console.log(to);
    if (_.isEqual(from, initialNode)) {
        return get_path_BFS(more, initialNode, finalNode);
    } else return get_path_BFS(more, from, finalNode);
}

function isEven(n) {
    return (n % 2) === 0
}

function andify(/* preds */) {
    var preds = _.toArray(arguments);
    return function (/* args */) {
        var args = _.toArray(arguments);
        var everything = function (ps, truth) {
            if (_.isEmpty(ps))
                return truth;
            else
                return _.every(args, _.first(ps))
                    && everything(_.rest(ps), truth);
        };
        return everything(preds, true);
    };
}

var evenNums = andify(_.isNumber, isEven);
var result_even = evenNums(2, 4, 6, 8);
console.log("Numbers of array are even:",result_even);
result_even = evenNums(1, 4, 6, 8);
console.log("Numbers of array are even:",result_even);

function isString(obj) {
    return typeof obj === 'string';
}
var dictionary = [
    {key:"str1",value:1},
    {key:"str2",value:2}
];
var strCheck = andify(_.isString,isString);
strCheck(dictionary);
console.log("Verify if keys are string type:",strCheck());
