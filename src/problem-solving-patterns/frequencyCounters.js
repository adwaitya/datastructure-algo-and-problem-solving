// Question - Write a function called same, which accept two arrays. 
// The function should return true if every value in the array has it's corresponding value squared
// in the second array.
// The frequencey of values must be same.

// output 
// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [4, 1]) // false
// same([1, 2, 1], [4, 1, 4]) // false ( must be same frequency)

// export default function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i ++) {
//         const index = arr2.indexOf(arr1[i] ** 2);
//         if(index === -1) {
//             return false;
//         } 
//         arr2.splice(index, 1);
//     }
//     return true;
// }

// // Complexity O(n^2)

// // Solve the problem using frequency pattern
const frequenceyCounters = {

    same : (arr1, arr2) => {
        if (arr1.length !== arr2.length) {
            return false;
        }
        const object1 = {};
        const object2 = {};
        arr1.forEach(value => {
            object1[value] = (object1[value] || 0) + 1;
        });
        arr2.forEach(value => {
            object2[value] = (object2[value] || 0) + 1;
        });
    
        for (let key in object1) {
            if (!(key ** 2 in object2)) {
                return false;
            }
    
            if (object2[key ** 2] !== object1[key]) {
                return false
            }
        }
        return true;
    
    },
    
    //  Complexity O(n)
    
    
    // ANAGRAMS
    // Questions - Given two strings, write a function to determine if the second string is an 
    // anagram of the first. An anagram is a word, phrase or name formed by rearrenenging the letters
    // of another, such as cinema , formed from iceman
    
    validAnagram : (str1, str2) => {
    
        if (str1.length !== str2.length ) {
            return false;
        }
        const object1 = {};
        // const object2 = {};
        for (let char of str1) {
            object1[char] ?  object1[char] += 1:  object1[char] = 1;
        }
    
        // for (let char of str2) {
        //     object2[char] = (object2[char] || 0) + 1;
        // }
    
        console.log('object1', object1);
        for (let i = 0;i< str2.length; i ++) {
            var char = str2[i];
            if (!(object1[char])) {
                return false;
            } else {
                object1[char] -= 1;
            }
        }
        return true;
    }
    
}

export default  frequenceyCounters;
