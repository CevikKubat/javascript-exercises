const sumAll = function(smaller, bigger) {
    if (smaller < 0 || bigger < 0 || !Number.isInteger(smaller) || !Number.isInteger(bigger))
        {
            return "ERROR"
        }
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

// Do not edit below this line
module.exports = sumAll;
