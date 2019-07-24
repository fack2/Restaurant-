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
cuisineInput.forEach((element) => {
    element.addEventListener('click', function() {
        console.log(element.alt);
        console.log(`/cuisine=${element.alt}`);

    });
});