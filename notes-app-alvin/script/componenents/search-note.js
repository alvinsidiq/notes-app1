// Define the custom element class
class SearchNote extends HTMLElement {
  constructor() {
      super();

     
      this.attachShadow({ mode: 'open' });

     
      this.shadowRoot.innerHTML = `
          <style>
              /* Add your CSS styles here */
              .search-container {
                  display: flex;
                  align-items: center;
                  background-color: B3C8CF;
                margin-top:5px;
                padding:24px;
              }
              .search-container input {
                  flex: 1;
                  padding: 4px;
                  border: 1px solid #ccc;
                  border-radius: 4px;
                  margin-right: 4px;
                 
                 
              }
              .search-container button {
                  padding: 8px 8px;
                  border: none;
                  border-radius: 4px;
                  background-color:  F1EEDC;
                 
                  cursor: pointer;
              }
             
          </style>
         
          <div class="search-container">
              <input type="text" id="searchInput" placeholder="cari notes...">
              <button id="searchButton">Search</button>
          </div>
          
         
      `;

      
      this.searchInput = this.shadowRoot.getElementById('searchInput');
      this.searchButton = this.shadowRoot.getElementById('searchButton');

      
      this.searchButton.addEventListener('click', this.handleSearch.bind(this));
  }

  
  handleSearch() {
      const searchTerm = this.searchInput.value;
      
      console.log('Searching for:', searchTerm);
      
      this.dispatchEvent(new CustomEvent('search', { detail: searchTerm }));
  }
}


customElements.define('search-note', SearchNote);
