const modal = document.getElementById('add');
const wind = document.getElementById('modelWindow');
const closeWind = document.getElementById('closeWindow');
const backgroundLayer = document.getElementById('layer');

modal.onclick = openModel;
closeWind.onclick = closeWindow;


function openModel() {
    wind.style.display = "flex";
    backgroundLayer.style.display = "flex";
}

function closeWindow() {
    wind.style.display = "none";
    backgroundLayer.style.display = "none";
}

let body = document.getElementsByTagName("body")[0];
const geth1 = document.getElementById('geth1');
let btnStyle = document.getElementById('stylebtn');

btnStyle.addEventListener("click", () => {
        body.classList.toggle("style-black");
        body.classList.toggle("style-white");
        wind.classList.toggle("model-Window-black");
        wind.classList.toggle("model-Window-white");
        geth1.classList.toggle("type-black");
        geth1.classList.toggle("type-white");
        btnStyle.classList.toggle("change-Sun");
        btnStyle.classList.toggle("change-Style");
})

