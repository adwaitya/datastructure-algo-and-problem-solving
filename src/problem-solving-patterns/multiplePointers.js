const multiplePointers = {
    sumZero: (arr) => {
        let left = 0; 
        let right = arr.length - 1;
        while (left < right ) {
            let sum = arr[left] + arr[right];
            if (sum === 0) {
                return [arr[left], arr[right]]
            } else if (sum > 0) {
                right --;
            } else {
                left ++;
            }
        }
    },
    countUniqueValue: (arr) => {
        let index = 0;
        for (let j = 1; j < arr.length; j ++) {
            if (arr[index] !== arr[j]) {
                index++;
                arr[index] = arr[j];
            }
            console.log(index, j);
        }
        return index + 1;
    }
}

export default multiplePointers;