const fs = require('fs');
const path = require('path');
const getData = require('../queries/getData');
const postData = require('../queries/postData');
const qs = require('querystring');

const homeHandler = (request, response) => {
	const filePath = path.join(__dirname, '..', '..', 'public', 'index.html');
	fs.readFile(filePath, (error, file) => {
		if (error) {
			console.log(error);
			response.writeHead(500, {
				'Content-Type': 'text/html'
			});
			response.end('<h1>Server Error</h1>');
		} else {
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.end(file);
		}
	});
};

const publicHandler = (request, response, endpoint) => {
	const extension = endpoint.split('.')[1];
	const extensionType = {
		html: 'text/html',
		css: 'text/css',
		js: 'application/javascript',
		png: 'image/png',
		jpg: 'image/jpg'
	};

	const filePath = path.join(__dirname, '..', '..', endpoint);

	fs.readFile(filePath, (error, file) => {
		if (error) {
			console.log(error);
			response.writeHead(500, {
				'Content-Type': 'text/html'
			});
			response.end('<h1>Server Error</h1>');
		} else {
			response.writeHead(200, {
				'Content-Type': extensionType[extension]
			});
			response.end(file);
		}
	});
};

const cuisineHandler = (request, response) => {
	const type = request.url.split('=')[1];
	getData(type, (error, result) => {
		if (error) {
			return errorHandler(request, response);
		}
		console.log('result', result);

		let dynamicData = JSON.stringify(result);
		response.writeHead(200, {
			'Content-Type': 'application/json'
		});
		response.end(dynamicData);
	});
};

const addRestaurantHandler = (req, res) => {
	let body = '';
	req.on('data', (chunk) => {
		body += chunk.toString(); // convert Buffer to string
		console.log('chunk', body);
	});
	req.on('end', () => {
		const result = qs.parse(body);
		console.log(
			'cuisine',
			result.cuisine,
			'name',
			result.res_name,
			'location',
			result.location,
			'phone',
			result.phone,
			'delivery',
			result.deliviry,
			'phone'
		);
		postData(result, (err, data) => {
			console.log('err', err);
			console.log('data', data);
			console.log('result', result);
		});
		res.writeHead(302, { Location: '/' });
		res.end(JSON.stringify(result));
	});
};

const errorHandler = (request, response) => {
	response.writeHead(404, {
		'content-type': 'text/html'
	});
	response.end('<h1>404 Page Requested Cannot be Found</h1>');
};

module.exports = {
	homeHandler,
	publicHandler,
	cuisineHandler,
	addRestaurantHandler,
	errorHandler
};
