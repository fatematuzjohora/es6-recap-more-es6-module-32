const fish = {color: 'silver', price: 2000, name: 'Hilsha', address: 'chandpur'};
// const price = fish.price;
// const name = fish.name;
// const address = fish.address;
// const color = fish.color;

const { price, name, address, color } = fish;


console.log(price, name, address, color);


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
    const { id, food } = company.ceo;
    const { framework, employee } = company.web;
    const { first, second, third } = company.web.tech;
    console.log(food, framework, employee, id, first, second, third);