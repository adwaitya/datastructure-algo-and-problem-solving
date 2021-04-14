// Write a function which takes a string and returns count of each charecter in the string.
// Output - charCount("hello world") // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

export default function charCount(str) {
    // make an object to return at the end
    const result = {};
   
    for (let char of str) {
        // if the char is an number or letter and key is in object , add to one count
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }
    return result;
}

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric
        !(code > 64 && code < 91) && //upper (A -Z)
        !(code > 96 && code < 123) // lower (a -z)
    ) {
        return false;
    }
    return true;
}