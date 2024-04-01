import "../componenents/app-bar.js";
import "../componenents/form-input.js";
import "../componenents/note-list.js";
import "../componenents/search-note.js";
import notesData from "../data/notes-data.js";

// Menunggu definisi elemen custom 'note-list'
customElements.whenDefined("note-list").then(() => {
    const noteList = document.querySelector("note-list");
    noteList.note = notesData;
});

customElements.whenDefined("form-input").then(() => {
    document.querySelector("form-input").addEventListener("submit-button", (event) => {
        notesData.push(event.detail);
        // Setelah menambahkan data baru, perbarui properti 'note' di 'note-list'
        const noteList = document.querySelector("note-list");
        noteList.note = notesData;
    });
});
