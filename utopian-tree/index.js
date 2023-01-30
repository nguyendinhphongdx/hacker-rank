function utopianTree(n) {
    // Write your code here
    if (n === 0) return 1;
    var i = 1;
    var result = 0;
    while (i <= n) {
        if (i !== 1 && i % 2 === 0) {
            result++;
        } else {
            result = result === 0 ? 2 : result * 2;
        }
        i++;
    }
    return result;
}
console.log(utopianTree(4));