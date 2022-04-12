function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
fetch('https://www.reddit.com/r/showerthoughts/hot.json?limit=100')
  .then(data => data.json())
  .then(postdata => {
      const post= postdata.data.children;  // all posts in thr
     
      const currPost = post[getRndInteger(0,99)].data;
      
      const postElement = document.getElementById('PostElement');
      postElement.innerHTML = currPost.title;
})
