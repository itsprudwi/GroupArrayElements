
const constants = require("./constants/constants");

function groupArrayElements(arrayElement, n) {

    const localArrayElement = arrayElement

    if(localArrayElement === null) {
        return constants.nullArrayElementErrorMsg; 
    }

    else if (isNaN(n) || n <= 0 ) {
        return constants.notNaNErrorMsg;
    } 

    else if ( localArrayElement && localArrayElement.length < n) {
      return constants.arrayLengthErrorMessage;
    } 
    
    else {
      const arrayLength = localArrayElement.length;

      //finding minimum array length 
      const minArrayLength = (arrayLength - arrayLength % n) / n;
      const result = [];
      
      //finding remaining length and distribute those length equally
      let distributionElementsLength = arrayLength % n;
      let startIndex = 0;
      for(i = 0;i < n; i++){
          let splitArraylen = minArrayLength;
          if(distributionElementsLength){
            splitArraylen = splitArraylen+1;
            distributionElementsLength = distributionElementsLength-1;
          }
        const slicedArray = localArrayElement.slice(startIndex, startIndex + splitArraylen)
        startIndex = startIndex + splitArraylen;
        result.push(slicedArray);
      }
      console.log("result:",result);
      return result;
    }
}

exports.groupArrayElements = groupArrayElements;
