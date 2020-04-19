const numbers = [3,4,5,6,7,8];

// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }

// Using map (returns array)
// const result = numbers.map(function(element, index ,array){
//     //console.log(element, index ,array);
//     return element * element;
// })

// Using arrow Function
//const square = x => x * x;

// Using map + arrow Function
const result = numbers.map(x => x*x);
console.log(result);

// Filter (to select some elements) (returns array)

const bigger = numbers.filter(x => x>5);
console.log(bigger);

// find : (returns a element)
const isThere = numbers.find(x => x>5);
console.log(isThere);