// propoerly work any matter

function sum(num1, num2) {
    if (typeof (num1) === 'number' && typeof (num2) === 'number') {
      const sumOfNum = num1 + num2;
      return sumOfNum;  
    }
    else{
        return 'please cheak you input';
    }
}
console.log(sum(12, 'sazib'));