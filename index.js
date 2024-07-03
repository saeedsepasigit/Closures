function outerFunction() {
    let outerVariable = 'I am outside!';
    
    function innerFunction() {
        console.log(outerVariable); // دسترسی به متغیر بیرونی
    }
    
    return innerFunction;
}

const myFunction = outerFunction();
myFunction(); // 'I am outside!'

function createCounter() {
    let count = 0;
    
    return {
        increment: function() {
            count++;
            return count;
        },
        reset: function() {
            count = 0;
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.reset()); // 0

