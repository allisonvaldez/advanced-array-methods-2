/*
QUESTIONS:
1. #2 why convert to string if we are working with numbers --> does not mention it being an array
2. #4 why use indexOf? i tried using bracket notation to access the index value but didnt pass... how are we supposed to know this method?
3. #5 make sure i understand in --> loops through object but no for keyword
4. #6 is it because we want to see if each key exists we dont care about the value?  why not key[val] instead of val[key]

looking at the syntax is ok during interview
*/

// SOME -- atleast one is true so return true for whole array

/*
1. Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr) {
    return arr.some((val) => {
        return val % 2 !== 0;
    });
}

/*
2. Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(num) {
    return num.toString().split("").some((val) => {
        return val === "0";
    });
 }



// EVERY -- atleast one is false so return false for array

/*
3. Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr) {
    return arr.every((val) => {
        return val % 2 !== 0;
    });
}

/*
4. Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

// function hasNoDuplicates(arr) {
//     return arr.every((val) => {
//         return val[i] !== val[i + 1];
//     })
// }

function hasNoDuplicates(arr) {
    return arr.every((val) => {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}

/*
5. Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key) {
    return arr.every((val) => {
        return key in val;
    });
}

/*
6. Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue) {
    return arr.every((val) => {
        return val[key] === searchValue;
    });
}
