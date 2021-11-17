function namify(users) {
  let result=[]; 
  users.forEach((value, index, array) => 
  {if (value!=undefined&&value.name!= undefined) {result.push(value.name)}});
  return result;
}
