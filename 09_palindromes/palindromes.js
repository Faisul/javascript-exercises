const palindromes = function (str) {
    console.log("string= "+ str);
    if (str.length ==1) {
        return true;
    }
    //remove special charaters and space
    let cleanedStr = str.replaceAll(",", "").replaceAll(".", "").replaceAll("!", "").replaceAll("'", "").replaceAll(" ","").toLowerCase();
   console.log("cleaned string= "+ cleanedStr);
    let size = cleanedStr.length-1;
   for ( let i=size; i >=size/2; i--) {
       // console.log("comparing "+ cleanedStr.charAt(i) + " [vs] " + cleanedStr.charAt(size - i));
        if(cleanedStr.charAt(i) != cleanedStr.charAt(size - i)) {
            return false;
        }
   }
   return true;

};

// Do not edit below this line
module.exports = palindromes;
