const assert = require('assert')

console.log('app.js here...');

let userArr = [];
const getPosts = (fetch, num) => {
  return fetch('https://randomuser.me/api/?results='+num)
    .then(res => res.json())
    .then(json => json.restults[0])
// .then(json => {userArr = json.results.map(user=> user)})
// .then(json => displayUsers(json.results))
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
// .then(res => res.json())
// .then(json => console.log(json));



describe('getPosts', () => {
it('calls fetch with the correct url', () => {
const fakeFetch = url => {
assert(
url ===
'https://randomuser.me/api/?results=123'
)
return new Promise(function(resolve) {

})
}
getPosts(fakeFetch, 123)
})

it('parses the response of fetch correctly', (done) => {
  const fakeFetch = () => {
    return Promise.resolve({
      json: () => Promise.resolve({
        results: [
          {
            name: {title: 'Mr', first: 'Altan', last: 'Van de Krol'},
            nat: 'NL',
            phone: '(445)-042-6223',
            picture: {thumbnail: 'https://randomuser.me/api/portraits/thumb/men/12.jpg'}
          }
        ]
      })
    })
  }
  getPosts(fakeFetch, 12345)
    .then(result => {
      assert(result.name.first === 'Altan')
      done()
    })
})
})