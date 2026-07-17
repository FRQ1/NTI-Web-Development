function greaterThan(arr, value) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value){
            result.push(arr[i]);
        }

    }
    return result;
}

let value = 5;
let numbers = [3, 7, 1, 9, 5, 2];

console.log(greaterThan(numbers, value));