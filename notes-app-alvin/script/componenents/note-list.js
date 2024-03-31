import notesData from "../data/notes-data.js";

class NoteList extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
    .notes-list {
        margin-top: 50px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-template-rows: auto;
        display: grid;
        justify-items: center;
        gap: 20px;
        margin: 30px;
      }
      
      .notes-item {
        background-color:F1EEDC;
        box-shadow: 0 4px 9px 0 rgb(241, 238, 220);
        padding: 20px;
        font-size: 15px;
      }
      
      .title-note,
      .body-note,
      .date-note {
        margin-bottom: 10px;
      }
      `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
        <div class="notes-list">
        ${notesData
          .map(
            (note) => `
            <div class="notes-item">
            <div class="title-note">
                <h3>${note.title}</h3>
            </div>
            <div class="body-note">
                <p>${note.body}</p>
            </div>
            <div class="date-note">${new Date(
              note.createdAt
            ).toLocaleDateString()}</div>
            </div>
            `
          )
          .join("")}
        </div>
    `;
  }
}

customElements.define("note-list", NoteList);
