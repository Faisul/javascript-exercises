const fibonacci = function(num) {

    if( typeof num != 'number') {
        num = parseInt(num);
    }

    if (num < 0) {
        return "OOPS";
    } else if ( num == 0 || num == 1) {
        return num;
    }

    let prevNumber = 1;
    let currentNumber = 0;
    let counter =1;
    while (counter <= num) {
        temp = currentNumber;
        currentNumber += prevNumber;
        prevNumber = temp;
        counter ++;
    }
    return currentNumber;
   
};

// Do not edit below this line
module.exports = fibonacci;
