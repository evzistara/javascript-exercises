const reverseString = function(string) {
    const splitArray = string.split("");
    const reversedArray = splitArray.reverse();
    const reversedString = reversedArray.join("");
    return reversedString;


};

// Do not edit below this line
module.exports = reverseString;
