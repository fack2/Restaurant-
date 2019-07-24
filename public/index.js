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

const cuisineDivs = document.querySelectorAll('.type');
const ul = document.createElement('ul');

cuisineDivs.forEach((element) => {
	const img = document.querySelector(`#${element.id} img`);
	img.addEventListener('click', () => {
		request(`/cuisine=${img.alt}`, (data) => {
			data.forEach((ele) => {
				console.log('data', data);
				const restaurantColumn = document.createElement('div');
				const restaurantContent = document.createElement('div');

				const restaurantLogo = document.createElement('img');
				restaurantLogo.setAttribute('width', '20%');
				restaurantLogo.setAttribute('height', '20%');
				const deliviry = document.createElement('p');
				const phone = document.createElement('p');
				restaurantContent.appendChild(restaurantLogo);
				restaurantContent.appendChild(deliviry);
				restaurantContent.appendChild(phone);

				const li = document.createElement('li');

				const imageName = ele.res_name.replace(/ /g, '');
				console.log(imageName);
				restaurantLogo.src = `./public/images/${imageName}.png`;
				let delivery = 'Yes';
				if (!ele.delivery) {
					delivery = 'No';
				}
				deliviry.innerText = `Deliviry: ${delivery}`;
				phone.innerText = `Phone: ${ele.phone}`;
				restaurantColumn.appendChild(restaurantContent);
				li.appendChild(restaurantColumn);

				ul.appendChild(li);
			});
			element.appendChild(ul);
		});
		ul.innerText = '';
	});
});
