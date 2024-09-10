const sumAll = function(start, end) {
    if (!isPositiveInteger(start) || !isPositiveInteger(end)){
        return "ERROR";
    }
    let index;
    let max;
    if(start <= end) {
        index = start;
        max = end;
    } else {
        index = end;
        max = start;
    }
     
   
    let total =0;
    for (let i=index; i<=max; i++) {
        total += i;
    }
    return total;
};

let isPositiveInteger = function(number) {
   return ("number" === typeof number)
   && number > 0
   && ( number - Math.floor(number) == 0);     
};

// Do not edit below this line
module.exports = sumAll;
