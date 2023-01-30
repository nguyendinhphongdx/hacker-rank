function designerPdfViewer(h, word) {
    // Write your code here
    var maxH = 0;
    for (let index = 0; index < word.length; index++) {
        const element = word[index];
        const hE = h[element.charCodeAt(0) - 97];
        if (hE > maxH) maxH = hE;
    }
    console.log(maxH);
    return maxH * word.length;
}
const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
const word = 'abc'
console.log(designerPdfViewer(h, word))