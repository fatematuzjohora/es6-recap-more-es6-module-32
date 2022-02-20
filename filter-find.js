const number = [2, 45, 56, 12, 34, 2, 3, 4, 5, 6, 7,]
const bigNumbers = number.filter(n => n>20);
const smallNumbers = number.filter(n => n<10);
// console.log(bigNumbers, smallNumbers);

const product = [
    {name: 'mobile', price: 1900, color: 'black'},
    {name: 'water bottle', price: 190, color: 'white'},
    {name: 'watch', price: 900, color: 'light blue'},
    {name: 'book', price: 230, color: 'green'},
    {name: 'paper', price: 23, color: 'red'}
]
const expensive = product.filter(pd => pd.price >200);
const selectedColor = product.filter(pd => pd.color == 'black')
// console.log(selectedColor);

const whiteItem =product.find(pd => pd.color == 'white');
console.log(whiteItem);