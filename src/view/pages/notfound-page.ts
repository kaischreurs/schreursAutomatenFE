import { LitElement, html, css } from "lit";

export default class NotFound extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      main {
        display: flex;
        height: calc(100vh - 96px);
        text-align: center;
        color: #00ad00;
        place-content: center;
        flex-direction: column;
      }
    `;
  }

  render() {
    document.body.style.background = "white";
    return html`
      <main>
        <h1 style="font-size: 150px;">404</h1>
        <h1>${"Pagina niet gevonden"}</h1>
      </main>
    `;
  }
}

customElements.define("notfound-page", NotFound);
