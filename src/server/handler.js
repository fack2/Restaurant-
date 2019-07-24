const fs = require('fs');
const path = require('path');

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
	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify({ name: 'rand' }));
};

module.exports = {
	homeHandler,
	publicHandler,
	cuisineHandler
};
