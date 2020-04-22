function add(num1, num2){
    var sum = 0;
    const elements = [...arguments];    // Now it's a real array
    //console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        const num = elements[i]; 
        sum = sum + num;
    }
    return sum;
}

const result = add(2,5,7,8);
console.log(result);