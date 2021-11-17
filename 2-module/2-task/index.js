function isEmpty(obj) {
  let c =0;
  for (let v in obj){
    c++;
  }
  if (c>0){return false;}
  else {return true;}
}
