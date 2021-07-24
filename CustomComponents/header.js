const headerTemplate = document.createElement('template');
  headerTemplate.innerHTML = `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid d-flex">
          <a class="navbar-brand px-5" href="index"> <h2>Patton UniverCity</h2> </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse d-flex flex-row-reverse navbar-collapse" >
            <div class="navbar-nav px-5" id="navbarNavAltMarkup">
              <a class="nav-link active" aria-current="page" href="index">Home</a>
              <a class="nav-link" href="lessons">Lessons</a>
              <a class="nav-link" href="showcase">Showcase</a>
              <a class="nav-link" href="about">About</a>
            </div>
          </div>
        </div>
      </nav>`

class Header extends HTMLElement {
    constructor() {
      super();
    }
    //mode: open means that you can access the shadow DOM using 
    //JavaScript written in the main page context.    
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
  }

customElements.define('header-component', Header);
