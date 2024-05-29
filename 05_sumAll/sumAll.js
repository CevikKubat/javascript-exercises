const sumAll = function(smaller, bigger) {
    let newSum = 0;
    if (bigger < smaller)
        {
            [smaller, bigger] = [bigger, smaller];
        }
    for (let i = bigger; i >= smaller; i--)
        {
            newSum += bigger;
            bigger = bigger - 1;
        }
    return newSum;
};

console.log(sumAll(4, 1));

// Do not edit below this line
module.exports = sumAll;
