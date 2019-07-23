const { homeHandler, publicHandler, cuisineHandler } = require('./handler');
const router = (request, response) => {
	const endpoint = request.url;
	if (endpoint === '/') {
		homeHandler(request, response);
	} else if (endpoint.indexOf('public') !== -1) {
		publicHandler(request, response, endpoint);
	} else if (endpoint === '/cuisine') {
		cuisineHandler(request, response);
	} else {
		response.writeHead(404, { 'Content-Type': 'text/html' });
		response.end('<h1>404 Not found</h1>');
	}
};

module.exports = router;
