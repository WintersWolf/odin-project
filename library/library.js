const postSection = document.querySelector('#posts');
const postTemplate = document.querySelector('#post-template');

getData()
  .catch(err => console.error(err));

async function getData() {
  const postStream = await fetch('https://openlibrary.org/books/OL7353617M/Fantastic_Mr._Fox');
  const posts = await postStream.json();
  let i = 0;

  // throw 'Get Data Error';
  // console.log(posts);

  console.log(posts)
}