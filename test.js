
var arr = [1, 2, 3, 4, 5];

// map method
// strategy pattern
// functional 
var newArr = arr.map(i => i * 2);
var arr2 = arr.filter(i => i % 2 === 0);
var val = arr.reduce((i, s) => s += i);

// console.log(val);


// console.log(newArr === arr);

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i] * 2);
// }