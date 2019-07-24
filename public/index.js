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


const cuisineDivs = document.querySelectorAll(".type");
const ul = document.createElement("ul");
cuisineDivs.forEach((element) => {
    const img = document.querySelector(`#${element.id} img`);
    img.addEventListener('click', () => {
        request(`/cuisine=${img.alt}`, (data) => {
            data.forEach(ele => {
                const li = document.createElement("li");
                li.textContent = ele.res_name;
                ul.appendChild(li);
            });
            element.appendChild(ul);
        });
        ul.innerText = "";
    });
});