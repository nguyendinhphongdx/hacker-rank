const a = [4, 6, 5, 3, 3, 1]

function pickingNumber(a) {
    const setArr = new Set(a);
    const result = [];
    setArr.forEach(i => {
        result.push(a.filter(j => j == i || j - i === 1));
    })
    console.log(result)
    const lengths = result.map(a => a.length);
    return Math.max(...lengths);
}
console.log(pickingNumber(a))