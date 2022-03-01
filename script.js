fetch('https://www.reddit.com/r/showerthoughts/hot.json?limit=100')
  .then(data => data.json())
  .then(postdata => {
      const post= postdata.data.children;  // all posts in thr
      function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      currPost = post[getRndInteger(0,99)].data;
      // currPost = post[getnumber(10)].data;
      // currPost = post[i].data; 
      // const postTitle =currPost.title

      const postElement = document.getElementById('PostElement');
      postElement.innerHTML = currPost.title;
      
      // const linkElement = document.getElementById('LinkElement');
      // linkElement.innerHTML = currPost.url;

      const contentElement = document.getElementById('ContentElement');
      // contentElement.innerHTML = currPost.selftext;
    //   document.addEventListener('DOMContentLoaded', () => {
    //     var y = document.getElementById("LinkElement");
    //     y.addEventListener("click", openIndex);
    //  });
     
    //  function openIndex() {
    //     chrome.tabs.create({active: true, url: currPost.url});
    //  }
      //currPost.url
      //currPost.selftext
      
      //   const postcontent = postdata.data.children.selftext;
    
})
