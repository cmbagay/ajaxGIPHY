const form = document.querySelector('#giphy-form');
const input = document.querySelector('#search') ;

const giphs = document.querySelector('#giphs');
const removeImages = document.querySelector('#rmvBtn')

//completed API getter
async function giphySearch(search){

	//pulls from giphy api; arg of inputable search term/ limits search result to 5 gifs
	const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=25`); 
	console.log('API Data: ', response); // JSON data preview

	//Access API data tests
	console.log(`Index of Randomly Chosen GIF: ${rdmGIF()}`)
	console.log(`GIF Image URL: ${response.data.data[rdmGIF()].images.original.url}`);
	
	//append imgs
	const makeImg = document.createElement('img');
		makeImg.src = response.data.data[rdmGIF()].images.original.url;
		makeImg.id = 'img';

	giphs.appendChild(makeImg);

	form.reset(); //reset search bar input
}

function rdmGIF() {
	return Math.floor(Math.random() * 25); //choose random GIF from API
}

form.addEventListener('submit', function(e) {
	e.preventDefault(); 	
	console.log(`Search Term: ${input.value}`);

	giphySearch(input.value);
});

removeImages.addEventListener('click', function(e) {
	e.preventDefault();
	
	while (giphs.firstChild){
		giphs.removeChild(giphs.firstChild);
	}
	
	form.reset();
})