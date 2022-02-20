const friend = ['fatema', 'aklima begum','sabahat nower', 'safowana nower']

const fLength = friend.map(f => f.length);
// console.log(fLength);

const product = [
    {name: 'mobile', price: 1900, color: 'black'},
    {name: 'water bottle', price: 190, color: 'white'},
    {name: 'watch', price: 900, color: 'light blue'},
    {name: 'book', price: 230, color: 'green'},
    {name: 'paper', price: 23, color: 'red'}
]
const productName = product.map(pd => pd.name);
const productPrice = product.map(pd => pd.price);
// product.map (pd => console.log(product))
product.forEach (pd => console.log(product))
// console.log(productName, productPrice);