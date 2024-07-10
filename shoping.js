// many product bye how to calculate those product

const products =[
    {name:'shirt', color:'white', size: 'L', price: 30, quantity: 3},
    {name:'t-shirt', color:'red', size: 'L', price: 20, quantity: 5},
    {name:'pant', color:'black', size: 'L', price: 50, quantity: 4},
    {name:'air-buts', color:'white',  price: 180, quantity: 3},
    {name:'shoes', color:'gray', size: '42', price: 60, quantity: 6}
  
]
let totalPrice = 0;

for (let i = 0; i < products.length; i++) {
    const object = products[i];
    const objectPrice = object.price;
    const objectQuantity = object.quantity;
    const objectTotalPrice = objectQuantity * objectPrice;
    totalPrice = totalPrice + objectTotalPrice;
    
}
console.log(totalPrice);