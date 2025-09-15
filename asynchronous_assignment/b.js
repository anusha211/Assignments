export default function apiCall() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());
}
