
exports.min = function min (array) {
  if ( array && array.length > 0 ) {
      
    return Math.min.apply(null, array);

  
  }

  return []; 
}



exports.max = function max (array) {
  let arr = [];

  if ( array && array.length > 0 ) {

    return Math.max.apply(null, array);
  }

  return arr;
}



exports.avg = function avg (array) {
  let arr = [];

  if (array && array.length > 0 ) {
    let sum = 0;
    for( let item of array)

    sum += item;
    
    return sum / array.length;

  }
 return arr;
}
