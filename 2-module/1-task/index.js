function sumSalary(salaries) {
  let sum = 0; 
  for(let key in salaries){
    let val = salaries[key];
    if(typeof(val)=='number'&& val>0 && val<Infinity){
      sum+=val;
    }
  }
  return sum;
}
