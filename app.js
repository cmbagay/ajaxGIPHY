// const form = document.querySelector('giphy-form');
// const giphySearch = document.querySelector('input[name=search]') ;

// const giph = document.querySelector('#giphs')

// form.addEventListener('submit', function(e) {
// 	e.preventDefault();

// 	const searchTerm = giphySearch.value;

// 	//make GIF
// 	const captureGIF = document.createElement('img');
// 	captureGIF.src = gif.url;

// 	giph.appendChild(captureGIF);
// })

//completed API getter
async function giphySearch(search){

		const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym&limit=5`); //pulls from giphy api; arg of inputable search term/ limits search result to 5 gifs
		console.log(response); // JSON data preview

		const data = response.data.data;
		for(let gif of data){
			console.log('GIF Title: ', gif.title); // console log GET value test
		}
}

