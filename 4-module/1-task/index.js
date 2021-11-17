function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  friends.forEach((value, index, array) => {
    let li = document.createElement('li');
    li.innerHTML+=value.firstName+' '+value.lastName;
    ul.appendChild(li);
  })
  return ul;
}
