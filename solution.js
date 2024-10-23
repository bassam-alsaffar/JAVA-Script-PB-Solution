// Create your solutions here

//task 1

function startsWithLosOrNew(input) {
    // Convert the input string to lowercase
    const lowerCaseInput = input.toLowerCase();
    
    if (lowerCaseInput.startsWith("los") || lowerCaseInput.startsWith("new")) {
        return true;
    } else {
        return false;
    }
}

console.log(startsWithLosOrNew("New York")); // true
console.log(startsWithLosOrNew("newark")); // true 
console.log(startsWithLosOrNew("London")); // false
console.log(startsWithLosOrNew("Los Angeles")); // true
console.log(startsWithLosOrNew("lOs Angeles")); // true
console.log(startsWithLosOrNew("San Carlos")); // false


// task 2

function isDivisibleBy100(number) {

    if (number % 100 === 0) {
        return true;
    } else {
        return false;
    }
}


console.log(isDivisibleBy100(1)); // false
console.log(isDivisibleBy100(1000)); // true
console.log(isDivisibleBy100(100)); // true


// task 3

function isRaining(isRain) {
    return isRain ? "wet day - you need an umbrella" : "dry day - leave your umbrella at home";
}


console.log(isRaining(true)); // 'wet day - you need an umbrella'
console.log(isRaining(false)); // 'dry day - leave your umbrella at home'


// task 4

function powerOf(number) {
    return number ** number;
}


console.log(powerOf(2)); // 4
console.log(powerOf(3)); // 27
console.log(powerOf(4)); // 256
console.log(powerOf(5)); // 3125


// task 5

function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log(range(5, 10)); // [ 5, 6, 7, 8, 9, 10 ] 
console.log(range(10, 16)); // [ 10, 11, 12, 13, 14, 15, 16 ] 
console.log(range(1, 6)); // [ 1, 2, 3, 4, 5, 6 ] 
console.log(range(0, 3)); // [ 0, 1, 2, 3 ]