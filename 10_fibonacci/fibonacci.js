const fibonacci = function(number) {
    if (number < 0){
        return "OOPS";
    }
    if (typeof number == "string"){
        number = Number(number);
    }
    if (number <= 1){
        return number;
    }
    else{
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
};

console.log(fibonacci(15));
// Do not edit below this line
module.exports = fibonacci;
