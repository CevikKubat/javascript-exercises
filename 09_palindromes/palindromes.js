const palindromes = function (string) {
    let cleanedArray = string.toLowerCase().split("").filter(element => element != "!" && element != "." && element != "?" && element != "," && element != " ");
    let cleanedString = cleanedArray.join("");
    let reversedString = cleanedArray.reverse().join("");
    console.log("cleanedString: " + cleanedString);
    console.log("reversedString: " + reversedString);
    if (reversedString == cleanedString) return true;
    else return false;
};
console.log(palindromes("A car, a man, a maraca."))
// Do not edit below this line
module.exports = palindromes;