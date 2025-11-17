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

let textNote = document.getElementById('NameNote');
const addNote = document.getElementById('apply');
const noteList = document.getElementById('listing');


addNote.addEventListener("click", () => {
    const noteText = textNote.value.trim();
    if (textNote.value == ''){
        return;
    }
  

    const note = document.createElement("div");
    note.className = "list";
    note.innerHTML = `
        <div class="note-dontComplete">
            <input type="checkbox" class="checkbox">
            <span class="spa">${noteText}</span>
        </div>
        <div class="control">
            <img src="redact.svg" class="edit">
            <img src="trash-svgrepo-com 1.svg" class="delete">
        </div>
    `;


    noteList.appendChild(note);
    
    
    closeWindow();

    textNote.value = "";

    const checkbox = note.querySelector(".checkbox");
    const span = note.querySelector(".spa");
    const deleteBtn = note.querySelector(".delete");
    const editBtn = note.querySelector(".edit");

    

    checkbox.addEventListener("click", () => {
        span.classList.toggle("complete");
    });

  
    deleteBtn.addEventListener("click", () => {
        note.remove();
    });

    
    editBtn.addEventListener("click", () => {
        const newText = prompt("Измени текст заметки:", span.innerText);
        
            span.innerText = newText;
        
    });

   

})


const search_input = document.getElementById('search');

search_input.addEventListener("input", () => {
    let listNotes = document.querySelectorAll(".list >div > span");
    for (let i = 0; i < listNotes.length; i++) {
        listNotes[i].parentElement.parentElement.style.display = "block";

        if (!listNotes[i].innerText.includes(search_input.value)) {
            listNotes[i].parentElement.parentElement.style.display = "none";
        }
    }
}
)


   
    
