// Question - Write a function called same, which accept two arrays. 
// The function should return true if every value in the array has it's corresponding value squared
// in the second array.
// The frequencey of values must be same.

// output 
// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [4, 1]) // false
// same([1, 2, 1], [4, 1, 4]) // false ( must be same frequency)

export default function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i ++) {
        const index = arr2.indexOf(arr1[i] ** 2);
        if(index === -1) {
            return false;
        } 
        arr2.splice(index, 1);
    }
    return true;
}

// Complexity O(n^2)

// Solve the problem using frequency pattern