const fs = require('fs');
const path = require('path');
const request = require('request');

const homeHandler = (request, response) => {
	const filePath = path.join(__dirname, '../', '../', 'public', 'index.html');
	console.log('file path', filePath);
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

	const filePath = path.join(__dirname, '../', '../', endpoint);
	console.log('file path', filePath);
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

const cuisineHandler = (request, response) => {};

module.exports = {
	homeHandler,
	publicHandler,
	cuisineHandler
};
