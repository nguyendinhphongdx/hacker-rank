function beautifulDays(i, j, k) {
    // Write your code here
    const reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
    const result = [];
    for (let index = i; index <= j; index++) {
        const count = Math.abs(index - reversedNum(index)) / k;
        result.push(count);
    }
    
    const sum = result.reduce((pre, cur) => {
        if(cur - Math.floor(cur) === 0){
            return pre + 1;
        }
        return pre;
    }, 0);
    return sum;
}
console.log(beautifulDays(20, 23, 6))