function hurdleRace(k, height) {
    // Write your code here
    const max = Math.max(...height);
    if (k >= max) return 0;
    return max - k;
}
const k = 1;
const height = [1, 2, 3, 3, 2];
console.log(hurdleRace(k, height));