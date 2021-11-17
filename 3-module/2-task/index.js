function filterRange(arr, a, b) {
  let result = [];
  arr.forEach((value, index, array) => {
    if (index==a||index==b||value==a||value==b){
      result.push(value);
    } 
  });
  return result;
}
