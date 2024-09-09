const repeatString = function(word, count) {
    let concatText = '';
    if (count <0){
        return "ERROR";
    }
    for(let i=0; i<count; i++) {
        concatText += word;
    }
    return concatText;
};

// Do not edit below this line
module.exports = repeatString;
