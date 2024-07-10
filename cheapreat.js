// low price phone name show

const phones =[
    {brand:'realme', ram: 8, rom:128, camera: 50, color: 'blue', price: 25000},
    {brand:'samsung', ram: 4, rom:64, camera: 30, color: 'red', price: 15000},
    {brand:'oneplus', ram: 12, rom:128, camera: 60, color: 'gray', price: 50000},
    {brand:'redme', ram: 10, rom:256, camera: 100, color: 'silver', price: 55000},
    {brand:'htc', ram: 4, rom:28, camera: 30, color: 'blue', price: 13000},
    {brand:'sony', ram: 6, rom:128, camera: 120, color: 'lowblue', price: 60000},
    {brand:'nokia', ram: 8, rom:128, camera: 50, color: 'blue', price: 33000},
    {brand:'honour', ram: 12, rom:128, camera: 50, color: 'white', price: 22000},
    {brand:'symponi', ram: 10, rom:128, camera: 50, color: 'navi', price: 14000},
    {brand:'walton', ram: 8, rom:128, camera: 50, color: 'blue', price: 21000}
]
/* let priceOfArray =[]
for (let i = 0; i < phones.length; i++) {
    const object = phones[i];
    const phonePrice = object.price;
    priceOfArray.push(phonePrice)
    
}

const cheapPrice = Math.min (...priceOfArray);
console.log(cheapPrice); */

// another way

const firstObject = phones[0];
let cheapPrice = firstObject.price;

for (let i = 0; i < phones.length; i++) {
    const object = phones[i];
    const phonePrice = object.price;

    if (cheapPrice > phonePrice) {
        cheapPrice = phonePrice
    }
}
console.log(cheapPrice);




// cheak spacific valu

/* const a ={brand:'realme', ram: 8, rom:128, camera: 50, color: 'blue', price: 25000}
console.log(a.camera); */