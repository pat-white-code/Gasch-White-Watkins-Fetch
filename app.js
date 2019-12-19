const assert = require('assert')

console.log('app.js here...');

let userArr = [];
const getPosts = (fetch, num) => {
fetch('https://randomuser.me/api/?results='+num)
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
cell: "633-586-155",
dob: {date: "1966-03-28T00:10:47.921Z", age: 53},
email: "valentin.alonso@example.com",
gender: "male",
id: {name: "DNI", value: "05329900-G"},
}
]
})
})
}
getPosts(fakeFetch, 1)
.then(result => {
assert(result.cell === "633-586-155")
done()
})
})
})