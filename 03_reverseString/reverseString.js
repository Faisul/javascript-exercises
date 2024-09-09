const reverseString = function(text) {
    let reversedText = '';
    for ( let i= text.length-1; i>=0; i--){
        reversedText += text.at(i);
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
