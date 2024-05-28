const removeFromArray = function(array, ...targetElements) {
    let newArray = []; // Initialize newArray as an empty array
    for (let i = 0; i < array.length; i++) {
        if (!targetElements.includes(array[i])) {
            newArray.push(array[i]); // Add element to newArray if it's not in targetElements
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
