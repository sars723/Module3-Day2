const eminemSongs=document.getElementById("emineum-songs")
const loadData = () => {
  fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "b87c9d36dfmshbdaaa406e5e01c5p1cb598jsn7ba2f852ed1d",
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
	}
})
.then((response) => response.json())
.then((jsondata) => {
  console.log(jsondata)
  const list = document.getElementById("myList");
  for (let i = 0; i < jsondata.length; i++) {
    const listElement = document.createElement("li");
    listElement.className = "list-group-item";
    listElement.innerText = `${jsondata[i].title}${jsondata[i].title_short}`;
    list.appendChild(listElement);
  }
})

.catch((err) => {
  console.error(err);
});
}