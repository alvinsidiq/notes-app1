class Nav extends HTMLElement{
   _Root= null ;
   _style = null ;

   constructor(){
    super();
    this._Root = this.attachShadow({mode:"open"});
    this._style = document.createElement("style");
   }

   _updateStyle(){
    this._style.textContent =`
    nav {
        
            display: flex;
            justify-content: space-between;
            background-color:BED7DC;
            box-shadow: 0 3px 6px 0 rgb(190, 215, 220);
            padding: 17px;
            font-size: 1em;
            flex-wrap: wrap;
            
           
            
          }

          @media screen and (max-width: 1000px) {
            header {
              width: 100%;
            }
            nav {

                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                font-size: 0.8em;
              }
    }
    
    `;
   }

   _emptyContent(){
    this._Root.innerHTML ="";
       }
    connectedCallback( ){
        this.render();
   }

   render(){
    this._emptyContent();
    this._updateStyle();
    this._Root.appendChild(this._style);
    this._Root.innerHTML +=`
    <nav>
    <div class="app-name">
        <h1>Notes App</h1>
    </div>

     <div class="app-name-description">
        <h1>add notes  your activities</h1>
    </div>
</nav>
    
    `;
   }
}

customElements.define("app-bar", Nav);
