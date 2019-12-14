// define an array of users
let arrOfUsers = [];
// get users when page loads
window.onload = function() {
  getUser();
}
// get users from api
const getUser = () => {
  fetch('https://randomuser.me/api/?results=10')
  .then(res => res.json())
  .then(userArr => {
    // sort results into variables
      arrOfUsers = userArr.results;
      arrOfUsers.map(user => {
        let userThis = document.createElement('div');
        let userProfile = document.getElementById('users');
        let userImg = document.createElement('img');
        let userName = document.createElement('h4');
        let userInfo = document.createElement('ul');
        // let userPlace = document.createElement('li');
        let userAge = document.createElement('li');
        let userEmail = document.createElement('li');
        let moreUser = document.createElement('button'); 
        let profileName = document.createElement('li')
        // display result variables for each user
      userProfile.appendChild(userThis);
      userImg.src = user.picture.medium;
      userProfile.appendChild(userImg);
      userName.innerHTML = `${user.name.first} ${user.name.last}`;
      userProfile.appendChild(userName);
      userInfo.innerHTML = `${user.location.city}, ${user.location.state}`;
      userProfile.appendChild(userInfo);
      userProfile.appendChild(moreUser);
      // create button to show more info
      moreUser.innerHTML = `More info`;
      moreUser.addEventListener('click', function () {
        userProfile.removeChild(moreUser);
        userEmail.innerHTML = `Email: ${user.email}`;
        userInfo.appendChild(userEmail);
        userAge.innerHTML = `Age: ${user.dob.age}`;
        userInfo.appendChild(userAge);
        profileName.innerHTML = `Username: ${user.login.username}`;
        userInfo.appendChild(profileName);
      })
    })
  })
};

// function getSome(num) {
//   for (let i = 0; i < num; i++) {
//     fetch('https://randomuser.me/api/')
//     .then(res => res.json())
//     .then(users => arrOfUsers.push() = users)
//     }
//     return users
//   }

  // display the result of getFive function 
 

// let addImg = (src) => {
//   let imgElement = document.createElement('img')
//   imgElement.src = src;
//   // document.body.appendChild(imgElement)
// }
