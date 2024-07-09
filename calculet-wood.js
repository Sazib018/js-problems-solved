/* 
fixed: per item wood requirements 
1. chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft

vary: quantity
*/

function calculation(chairQuantity, tableQuantity, bedQuantity) {
    const chairCft =3;
    const tableCft =10;
    const bedCft =50;

    const totalChairCft = chairQuantity * chairCft;
    const totalTableCft = tableQuantity * tableCft;
    const totalBedCft = bedQuantity * bedCft;

    const totalCft = totalChairCft + totalBedCft + totalTableCft;
    return totalCft;
}
const pich = calculation(12, 5, 2)
console.log(pich);