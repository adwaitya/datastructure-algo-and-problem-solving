// Given a signed 32-bit integer x, return x with its digits reversed.
//  If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
const reverseInteger = {
    reverseIntegerApproach1: (x) => {
        const maxILimit = 214748364; // OR Math.floor((Math.pow(2, 31) -1) / 10)
        const minILimit = -214748365; // OR Math.floor(-(Math.pow(2, 31)) / 10)
        const sign = Math.sign(x);
        x = Math.abs(x);
        console.log('x', x);
        let res = 0;
        while (x !== 0) {
            const lastD = x % 10; // Get the last digit
            x = Math.floor(x / 10); // // Update x to reflect that we popped the last digit
            if (
                res > maxILimit ||
                (res === maxILimit && lastD > 7) || //limit is 2,147,483,647
                res < minILimit ||
                (res === minILimit && lastD < -8) //limit is -2,147,483,648
              )
                return 0;
            res = res * 10 + lastD;
        }
    
        return res * sign;
    },
    reverseIntegerApproach2 : (x) => {
        if (x > Math.pow(2, 31) || x < Math.pow(-2, 31) || x === 0) return 0;
    
        let answer =
            x > 0
              ? parseInt(x.toString().split("").reverse().join(""))
              : parseInt(Math.abs(x).toString().split("").reverse().join("")) * -1;
    
        return answer < Math.pow(-2, 31) || answer > Math.pow(2, 31) - 1 ? 0 : answer;
    }
};


export default reverseInteger;