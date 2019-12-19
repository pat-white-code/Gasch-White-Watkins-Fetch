let userArr = [];
const getPosts = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(json => {userArr = json.results.map(user=> user)})
  .then(json => displayUsers(json.results))
};

// displayUsers = (arr) => {
//   arr.forEach(user => {
//     let userSection = document.getElementById('users');
//     let userDiv = document.createElement('div');
//     let userImg = document.createElement('img');
//     userImg.src = user.picture.thumbnail;
//     let userh1 = document.createElement('h1');
//     let userBtn = document.createElement('button');
//     userBtn.innerText = 'Reveal Gender';
//     let userGender = document.createElement('p')
//     userGender.innerText = `${user.gender}`
//     userBtn.addEventListener('click', ()=>{
//       userDiv.appendChild(userGender)
//     })
//     userh1.innerText = `${user.name.first} ${user.name.last}`
//     let userP = document.createElement('p');
//     userP.innerText = `${user.email}`;
//     userDiv.appendChild(userh1);
//     userDiv.appendChild(userImg);
//     userDiv.appendChild(userP);
//     userSection.appendChild(userDiv);
//     userSection.appendChild(userBtn);
//   })
// }
// window.onLoad = getPosts();

const assert = require('assert')

function getAnimals(fetch, id) {
  return fetch('http://api.animalfarmgame.com/animals/' + id)
    .then(response => response.json())
    .then(data => data.results[0])
}

describe('getAnimals', () => {
  it('calls fetch with the correct url', () => {
    const fakeFetch = url => {
      assert(
        url ===
        'http://api.animalfarmgame.com/animals/123'
      )
      return new Promise(function(resolve) {

      })
    }
    getAnimals(fakeFetch, 123)
  })

  it('parses the response of fetch correctly', (done) => {
    const fakeFetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve({
          results: [
            { name: 'fluffykins' }
          ]
        })
      })
    }
    getAnimals(fakeFetch, 12345)
      .then(result => {
        assert(result.name === 'fluffykins')
        done()
      })
  })
})