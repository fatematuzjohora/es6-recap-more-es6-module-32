// declare variable based on the name of an object property
const myObject = {x: 34, y: 23, a: 12, b: 23, z: 25};
const { x, b } = myObject;
// console.log(x, b);
// destructuring array 
const [p,q] = [21, 34, 56, 67, 78, 89];
// console.log(p, q);
const [good, bad] = ['Himu', 'Tonu']
const { before, after } = {before:'slim', after:'fatty'};
// console.log(before, after);

// chaining
const company = {
    name: 'GP',
    ceo: {id: 1, name: 'John', food: 'burger',},
     web : {work: 'website development', employee : 22, 
     framework: 'react',
      tech:{
          first: 'html',
          second: 'css',
          third : 'js'
      }
    } 
    }
    console.log(company.web.tech.third);