function getMinMax(str) {
  let srt =[];
  str.split(' ').forEach((value, index, array) => {
  if(!isNaN(value)){
    srt.push(value)
  }
  });
  let result ={
    min: 0,
    max: 0
  }
  
  result.min=Math.min.apply(null,srt);
  result.max=Math.max.apply(null,srt);
  return result;
}
