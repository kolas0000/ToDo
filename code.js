const modal = document.getElementById('add');
const wind = document.getElementById('modelWindow');
const closeWind = document.getElementById('closeWindow');

modal.onclick = openModel;
closeWind.onclick = closeWindow;

function openModel() {
    wind.style.display = "flex";
}

function closeWindow() {
    wind.style.display = "none";
}

let body = document.getElementsByTagName("body")[0];
const geth1 = document.getElementById('geth1');


document.getElementsByClassName("changeStyle")[0].addEventListener("click", () => {
        body.classList.toggle("style-black");
        body.classList.toggle("style-white");
        wind.classList.toggle("model-Window-black");
        wind.classList.toggle("model-Window-white");
        geth1.classList.toggle("type-black");
        geth1.classList.toggle("type-white");
})

