let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
console.log(integers.filter(number => number < 19).sort(function(a, b){return b - a}).map(function (element) {return ((element * 1.5) - 1)}).reduce((number, nextNumber) => number += nextNumber))

