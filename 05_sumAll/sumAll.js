const sumAll = function(smaller, bigger) {
    let newSum = 0;
    for (let i = bigger; i >= smaller; i--)
        {
            newSum += bigger;
            bigger = bigger - 1;
        }
    return newSum;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
