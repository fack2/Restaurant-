const request = (url, cb) => {
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return cb(data);
		})
		.catch((error) => {
			console.log(error);
		});
};
const cuisineInput = document.getElementsByTagName('li');

cuisineInput.addEventListener('click', function(event) {
	console.log(cuisineInput.alt);
	//  event.preventDefault();
	//	request(`/cuisine=${cuisineInput.alt}`, (data) => {});
});
