const names =['sazib','asif','raju','alamin','saikat','alamin','raju','sazib','asif','sazib'];

let duplicateNameRemove =[];

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if (duplicateNameRemove.includes(element) === false) {
        duplicateNameRemove.push(element);
    }

}
console.log(duplicateNameRemove);