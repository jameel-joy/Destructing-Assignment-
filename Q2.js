// 02. Only unique items are allowed.

// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.

function uniqueVal(arr){
    return new Set(arr)
}

console.log(uniqueVal([1,2,3,4,4,5,2]));

const s = new Set();
console.log(s.size);
console.log(s.add(12));
console.log(s.has(12));
