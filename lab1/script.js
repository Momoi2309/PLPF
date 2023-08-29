//cerinta 1
var nums=[1,2,3,4,5]

function min(array){
    return _.reduce(array,function(a,b){
        return a<b ? a:b
    });
}

function max(array){
    return _.reduce(array,function(a,b){
        return a>b ? a:b
    });
}

console.log("Minimul este:",min(nums));
console.log("\nMaximul este:",max(nums));


//cerinta 2
var albums = [{title: "Black Monday", genre: "Metal"},
    {title: "Scientist", genre: "Dub"},
    {title: "Fireworks", genre: "Pop"},
    {title: "Fade", genre: "Pop"},
    {title: "Undertow", genre: "Metal"}];

gensort = _.sortBy(albums, function(a) { return a.genre });
console.log("Sorted by genre:",gensort);

titlesort =_.sortBy(albums,function(a){return a.title});
console.log("Sorted by title:",titlesort);

//cerinta 3
gengroup =_.groupBy(albums,(a) => a.gen);
gencount =_.map(gengroup,function(v,k){
    return [k,_.size(v)];
});
console.log("Number of songs from collection grouped by genre:",gencount);

//cerinta 4
function traverseArray(arr, func) {
    let result = " ";
    for (const value of arr) {
        result += func(value) + " ";
    }
    console.log(result);
}
const arr = [1, 2, 3, 4, 5];
const doubleit = (function(value)
{
    return value *2
});
console.log("Numbers [1,2,3,4,5] after doubleit function:")
traverseArray(arr, doubleit);

//cerinta 5
const printName = (name) => console.log(name);
console.log("Name:")
printName("Momoi Alexandru");
