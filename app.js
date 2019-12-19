console.log('app.js here...');

let userArr = [];
const getPosts = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  // .then(json => {userArr = json.results.map(user=> user)})
  .then(json => displayUsers(json.results))
};

displayUsers = (arr) => {
  arr.forEach(user => {
    let userSection = document.getElementById('users');
    let userDiv = document.createElement('div');
    let userImg = document.createElement('img');
    userImg.src = user.picture.thumbnail;
    let userh1 = document.createElement('h1');
    let userBtn = document.createElement('button');
    userBtn.innerText = 'Reveal Gender';
    let userGender = document.createElement('p')
    userGender.innerText = `${user.gender}`
    userBtn.addEventListener('click', ()=>{
      userDiv.appendChild(userGender)
    })
    userh1.innerText = `${user.name.first} ${user.name.last}`
    let userP = document.createElement('p');
    userP.innerText = `${user.email}`;
    userDiv.appendChild(userh1);
    userDiv.appendChild(userImg);
    userDiv.appendChild(userP);
    userSection.appendChild(userDiv);
    userSection.appendChild(userBtn);
  })
}
// window.onLoad = getPosts();


// fiveUsers
//   .then(res => res.json())
//   .then(json => console.log(json));

