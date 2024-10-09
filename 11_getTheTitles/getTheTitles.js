const getTheTitles = function(objArr) {
   return objArr.filter(obj => obj.hasOwnProperty("title")).map(obj => obj["title"]);

};

// Do not edit below this line
module.exports = getTheTitles;
