const assert = require('assert')

console.log('app.js here...');

let userArr = [];
const getPosts = (fetch, num) => {
  return fetch('https://randomuser.me/api/?results='+num)
    .then(res => res.json())
    .then(json => json.results)
};

function getAnimals(fetch, id) {
  return fetch('http://api.animalfarmgame.com/animals/' + id)
    .then(response => response.json())
    .then(data => data.results[0])
}

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
              name: {title: "Mr", first: "Altan", last: "Van de Krol"},
              nat: "NL",
              phone: "(445)-042-6223",
              picture: {thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"}
            }
          ]
        })
      })
    }
    getPosts(fakeFetch, 12345)
      .then(results => {
        assert(results[0].name.first === "Altan")
        done()
      })
  })

  it('returns multiple results', (done) => {
    const fakeFetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve({
          results: [
            { 
              name: {title: "Mr", first: "Altan", last: "Van de Krol"},
              nat: "NL",
              phone: "(445)-042-6223",
              picture: {thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"}
            },
            { 
              name: {title: "Mr", first: "Pat", last: "White"},
              nat: "NL",
              phone: "(512)-555-1234",
              picture: {thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"}
            },
            { 
              name: {title: "Mr", first: "David", last: "White"},
              nat: "NL",
              phone: "(703)-777-9876",
              picture: {thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"}
            }
          ]
        })
      })
    }
    getPosts(fakeFetch, 3)
      .then(results => {
        assert.equal(results.length, 3)
        done()
      })
  })

  it('doesnt reveal fake information', (done) => {
    const fakeFetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve({
          results: [
            { 
              name: {title: "Mr", first: "Altan", last: "Van de Krol"},
              nat: "NL",
              phone: "(445)-042-6223",
              picture: {thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"}
            },
            { 
              name: {title: "Mr", first: "Pat", last: "White"},
              nat: "NL",
              phone: "(512)-555-1234",
              picture: {thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"}
            },
            { 
              name: {title: "Mr", first: "David", last: "White"},
              nat: "NL",
              phone: "(703)-777-9876",
              picture: {thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"}
            }
          ]
        })
      })
    }
    getPosts(fakeFetch, 3)
      .then(results => {
        assert(!results[4])
        done()
      })
  })

  it('should have a picture that points to an object with a thumnail which points to a url', (done) => {
    const fakeFetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve({
          results: [
            { 
              name: {title: "Mr", first: "Altan", last: "Van de Krol"},
              nat: "NL",
              phone: "(445)-042-6223",
              picture: {thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"}
            },
            { 
              name: {title: "Mr", first: "Pat", last: "White"},
              nat: "NL",
              phone: "(512)-555-1234",
              picture: {thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"}
            },
            { 
              name: {title: "Mr", first: "David", last: "White"},
              nat: "NL",
              phone: "(703)-777-9876",
              picture: {thumbnail: "https://randomuser.me/api/portraits/thumb/men/12.jpg"}
            }
          ]
        })
      })
    }
    getPosts(fakeFetch, 3)
      .then(results => {
        assert(/jpg/.test(results[0].picture.thumbnail))
        done()
      })
  })
})