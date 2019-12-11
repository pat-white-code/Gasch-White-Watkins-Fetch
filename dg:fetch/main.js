let arrOfUsers = [];

window.onload = function() {
  getSome(5);
}

const getUser = () => {
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(users => arrOfUsers = users)
}

function getSome(num) {
  for (let i = 0; i < num; i++) {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(users => arrOfUsers.push() = users)
    }
    return users
  }

  function getFive(arr) {
    let arrFive = [];
    for (let i = 0; i < 5; i++) {
      arrFive.push(arr[i]);
      arr.shift();
    }
    return arrFive
  }
  // display the result of getFive function 
  const displayFive = () => {
    const allUsers = document.getElementById('all-users')
    getFive(arrayOfUsers).map((user, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Name: ${user.title} ${user.first} ${user.last}  
    ${user.city}, ${user.name}`)
    li.appendChild(text);
    allPosts.append(li)
    })
  }


const consoleUsers = () => {
  console.log(arrOfUsers)
}

let addImg = (src) => {
  let imgElement = document.createElement('img')
  imgElement.src = src;
  // document.body.appendChild(imgElement)
}

const displayUser = () => {
  const allUsers = document.getElementById('all-users')
  arrayOfUsers.map((user, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`#${index}, Name: ${user.title} ${user.first} ${user.last}  
    ${user.city}, ${user.name}`)
    li.appendChild(text);
    allPosts.append(li)
  })
}