import "../componenents/app-bar.js";
import "../componenents/form-input.js";
import"../componenents/note-list.js";
import"../componenents/search-note.js";
const noteList = document.querySelector("note-list");
noteList.note = notesData;

customElements.whenDefined("form-input").then(() =>{
    document
    .querySelector("form-input")
    .addEventListener("submit-button",(event) =>{
        notesData.push(event.detail);
        noteList.note = notesData;
    })
})