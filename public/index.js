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
const cuisineInput = document.querySelectorAll('img.cuisine');
console.log(cuisineInput);

cuisineInput.forEach((element) => {
	element.addEventListener('click', function(event) {
		console.log(element.alt);
		request(`/cuisine=${element.alt}`);
	});
});
