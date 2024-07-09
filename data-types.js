const country = 'Bangladesh';
const age = 23;
const isIndependent = true;
const friends = ['sazib','mahfuj','noyon','shakil'];
const phone = {brand:'redmi', price:'24500', memory: '128 gb'};

console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isIndependent));
//console.log(typeof(friends));(that is not right way to cheak in array)
console.log(typeof(phone));
// that is the right way to cheak array
console.log(Array.isArray(friends));