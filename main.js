let arrayOfPosts;

window.onload = function() {
  getPosts();
}

const getPosts = () => {
  fetch('https://randomuser.me/api/?results=100')
    .then(res => res.json())
    .then(posts => {
      arrayOfPosts = posts.results
      document.getElementById('user').innerHTML = `${arrayOfPosts[0].name.first}`;
      console.log(arrayOfPosts[0].name);
    })
}


// console.log(arrayOfPosts);
// document.getElementById('allPosts').innerHTML = arrayOfPosts;