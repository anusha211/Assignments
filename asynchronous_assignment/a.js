import apiCall from './b.js';

apiCall().then(posts => {
  const evenPosts = posts.filter(post => post.id % 5 === 0);

  const output = document.getElementById('demo');

  output.innerHTML = evenPosts.map(post => `<p>${post.title}</p>`).join('');
});
