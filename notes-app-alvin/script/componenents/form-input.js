class NotesInput extends HTMLElement {
  _Root = null;
  _style = null;
  _notes = null;

  constructor() {
    super();

    this._Root = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }
  _updateStyle() {
    this._style.textContent = `
                .form-container {

                    margin-top: 70px;
                    background-color:BED7DC;
    
                }
                
                .form-container h2 {
                    text-align: center;
                    font-size: 2em;
                    
                }
                
                form {
                    margin-top: 20px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                  
                }
                
                input[type="text"],
                form textarea {
                    padding: 10px;
                    font-size: 15px;
                    margin-top: 20px;
                    font-size: 16px;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
                
                form button {
                    margin-top: 20px;
                    padding: 15px;
                    background-color: F1EEDC;
                    border: none;
                    border-radius: 20px;
                    width: 100px;
                    cursor: pointer;
                    font-size: 15px;
                    align-self: center;
                  
                }

                @media screen and (max-width: 500px) {
                    input, textarea {
                        width: 60%;
                    }
                }
     `;
  }

  _emptyContent() {
    this._Root.innerHTML = "";
  }
  set notes(value) {
    this._notes = value;
 
    // Render ulang
    this.render();
  }
 
  get notes() {
    return this._notes;
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._Root.appendChild(this._style);
    this._Root.innerHTML += `
        <div class="form-container">
            <h2>Input  Notes</h2>
            <form id="form">
            <div class="form-group">
                <input
                type="text"
                name="input-title"
                id="input-title"
                placeholder="Masukkan judul"
                size="63"
                />
            </div>
            
            <div class="form-group">
                <textarea
                name="input-notes"
                id="input-notes"
                cols="59"
                rows="10"
                placeholder="Masukkan notes"
                ></textarea>
            </div>
            <button id="submit-button">Submit</button>
            </form>
        </div>
    `;

    const submitButton = this._Root.getElementById("form");
    submitButton.addEventListener("submit-button", (event) => {
      event.preventDefault();

      const inputTitle = this._Root.getElementById("input-title").value;
      const inputNote = this._Root.getElementById("input-notes").value;

      const addNote = {
        title: inputTitle,
        body: inputNote,
        createdAt: new Date().toISOString(),
        archived: false,
      };

      this.dispatchEvent(new CustomEvent("addNewNote", { detail: addNote }));
    });
  }
}

customElements.define("form-input", NotesInput);
