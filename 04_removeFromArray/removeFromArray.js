const removeFromArray = function(array, ...elements) {
    let newArray = new Array();
    array.forEach(element => {
        if(!elements.includes(element)) 
          newArray.push(element);
    });
   
    return newArray;
};



// Do not edit below this line
module.exports = removeFromArray;
