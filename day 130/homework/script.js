//* 4

async function fetchPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
    }
}
fetchPost().then(post => {
    console.log('Post data:', post);
}).catch(err => {
    console.error('Error fetching post:', err);
});

//* 2

async function fetchPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (err) {
      console.error('Failed to fetch post:', err);
    }
}

 function renderPost(post) {
    const html = `
      <div class="post-container">
        <div class="post-title">${post.title}</div>
        <div class="post-body">${post.body}</div>
      </div>
    `;
    return html;
}