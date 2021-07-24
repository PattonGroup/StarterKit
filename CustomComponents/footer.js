const footerTemplate = document.createElement('template');
  footerTemplate.innerHTML = `
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <footer class="pt-3 mt-4 text-muted border-top">
      &copy; 2021
    </footer>`

class Footer extends HTMLElement {
    constructor() {
      super();
    }
    //mode: open means that you can access the shadow DOM using 
    //JavaScript written in the main page context.    
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
  }

customElements.define('footer-component', Footer);
