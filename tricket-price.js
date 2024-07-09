/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets price will be 100 ticket. 
rest tickets will be 90 taka per piece
    first 100 ---->100tk
    rest ----> 90tk
3. if you purchase more than 200 tickets
    first 100 ---> 100tk
    101-200 ---> 90tk
    200+ ----> 70tk
*/

function calculation(tricketQuantity) {
    const first100 = 100;
    const second100= 90;
    const third100 =70;
    if (tricketQuantity <=100 ) {
        const tricketPrice = tricketQuantity * first100;
        return tricketPrice;
    }

    else if (tricketQuantity <=200) {
        const moreThen100 = tricketQuantity -100;
        const first100Price = 100 * first100;
        const second100Price = moreThen100 * second100;
        const totalPrice = second100Price + first100Price;
        return totalPrice;
    }
    else{
        const moreThen200 = tricketQuantity - 200;
        const first100Price = 100 * first100;
        const second100Price = 100 * second100;
        const third100Price = moreThen200 * third100;
        const totalPrice = first100Price + second100Price + third100Price;
        return totalPrice;
    }
}

const totalCost = calculation(405);
console.log(totalCost);