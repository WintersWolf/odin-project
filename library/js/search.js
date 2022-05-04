const noRefresh = document.getElementById("search_form");
function handleForm(event) { event.preventDefault(); } 
noRefresh.addEventListener('submit', handleForm);

 const doSearch = async () => {
  const search = document.getElementById('search_term').value; 
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=" + search, {
      method: "GET",
      mode: "cors"
    }
  );
  const json = await response.json();
  let items = json.items;
  console.log(items);
  console.log(json);
};


