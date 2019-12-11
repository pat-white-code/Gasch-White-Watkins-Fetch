let arrayOfUsers;

window.onload = function() {
  getUsers();
}

// const getPosts = () => {
//   fetch('https://randomuser.me/api/?results=100')
//     .then(res => res.json())
//     .then(users => {
//       arrayOfUsers = users.results
//       document.getElementById('user').innerHTML = `${arrayOfUsers[0].name.first} ${arrayOfUsers[0].name.last}`;
//       let img = document.createElement('img');
//       img.src = arrayOfUsers[0].picture.large;
//       document.getElementById('userPic').appendChild(img);
//       console.log(arrayOfUsers[0]);
//     })
// }

const getUsers = () => {
  fetch('https://randomuser.me/api/?results=100')
  .then(res => res.json())
  .then(resArray => {
    arrayOfUsers = resArray.results;
    console.log(arrayOfUsers[0]);
      arrayOfUsers.map(user => {
        const userProfile = document.getElementById('user');
        const userName = document.createElement('li');
        const thirdThing = document.createElement('li');
        const userEmail = document.createElement('li');
        const userGender = document.createElement('li');
        const userAge = document.createElement('li');
        const userCity = document.createElement('li');
        const button = document.createElement('button');
        const profilePic = document.createElement('img');
        userName.innerHTML = `${user.name.first} ${user.name.last}`;
        userEmail.innerHTML = `email: ${user.email}`;
        userGender.innerHTML = `gender: ${user.gender}`;
        userAge.innerHTML = `age: ${user.dob.age}`;
        userCity.innerHTML = `current city: ${user.location.city}, ${user.location.state}`;
        profilePic.src = user.picture.large;
        button.innerHTML = 'full profile';
        userProfile.appendChild(userName);
        userProfile.appendChild(profilePic);
        userProfile.appendChild(thirdThing);
        thirdThing.appendChild(button);
        button.addEventListener('click', function () {
          thirdThing.removeChild(button),
          thirdThing.appendChild(userEmail),
          thirdThing.appendChild(userGender),
          thirdThing.appendChild(userAge),
          thirdThing.appendChild(userCity)
        })
      })
    })
  }