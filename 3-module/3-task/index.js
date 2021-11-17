function camelize(str) {
  str = str.split('-');
  console.log(str)
 let result = [];
  if(str!=''){
 str.forEach((value, index, array) => {
   if(value!=''){
   result.push(value[0].toUpperCase()
   +value.substring(1,value.length));}
 });
    if(str[0]!=''){
    let toLC = result[0].toLowerCase();
    delete result[0];
   result.unshift(toLC);
  }}
return result.join(''); 
}
