function angryProfessor(k, a) {
    // Write your code here
    const countEarly = a.filter(i => i <= 0);
    if(countEarly.length < k) return 'YES';
    return 'NO';
}
const k = 3;
const a = [-1, -3, 4, 2];
console.log(angryProfessor(k, a));