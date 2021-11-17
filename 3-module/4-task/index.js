function showSalary(users, age) {
  let result = [];
  users.forEach((value, index, array) => {
    if (value.age<=age) {
      result.push(value.name+', '+value.balance);
    }
  });
  return result.join('\n');
}
