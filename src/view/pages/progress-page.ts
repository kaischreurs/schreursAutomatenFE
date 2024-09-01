import { LitElement, html, css } from "lit";

export default class Progress extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      main {
        display: flex;
        overflow: hidden;
        height: calc(100vh - 96px);
        text-align: center;
        color: #000000;
        place-content: center;
        flex-direction: column;
        font-size: 2em;
      }
    `;
  }

  render() {
    return html` <main>Aan deze pagina word nog gewerkt.</main> `;
  }
}

customElements.define("progress-page", Progress);
