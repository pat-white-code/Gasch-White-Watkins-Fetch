let arrOfUsers = [];

window.onload = function() {
  getUser();
}

const getUser = () => {
  fetch('https://randomuser.me/api/?results=10')
  .then(res => res.json())
  .then(userArr => {
  // };

  // function getFive() {
  //   fetch('https://randomuser.me/api/?results=5')
  // .then(res => res.json())
  // .then(resArr => arrOfUsers => resArr)
  // };
    
  // const displayUsers = (arr) => {
    // arrOfUsers = users;
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
      userProfile.appendChild(userThis);
      userImg.src = user.picture.thumbnail;
      userProfile.appendChild(userImg);
      userName.innerHTML = `${user.name.first} ${user.name.last}`;
      userProfile.appendChild(userName);
      userInfo.innerHTML = `${user.location.city}, ${user.location.state}`;
      userProfile.appendChild(userInfo);
      userProfile.appendChild(moreUser);
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
