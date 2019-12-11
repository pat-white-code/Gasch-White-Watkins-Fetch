window.onload = function() {
  getPosts();
}

const getPosts = () => {
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}