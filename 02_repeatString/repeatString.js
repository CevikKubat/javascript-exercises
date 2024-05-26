const repeatString = function(greeting, greetingCount) {
    if (greetingCount < 0){
        return "ERROR"
    }
    let greetingNew = greeting;
    if (greetingCount == 0)
        {
            greetingNew = "";
        }
    else if (greetingCount > 0){
        for (let i = 1; i < greetingCount; i++){
            greetingNew = greetingNew.concat(greeting);
        }
    }
    // console.log(greetingNew);
    return greetingNew;
};

// Do not edit below this line
module.exports = repeatString;
