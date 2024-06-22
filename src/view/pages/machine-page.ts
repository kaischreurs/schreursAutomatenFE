import { LitElement, html, css } from "lit";

import "../components/product-component";

export default class Machine extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      main {
        display: flex;
        overflow: hidden;
        text-align: center;
        place-content: center;
        flex-direction: column;
      }
    `;
  }

  render() {
    document.body.style.background = "white";
    return html`
      <main>
        <h1 style="font-size: 150px;">machine</h1>
        <product-component />
      </main>
    `;
  }
}

customElements.define("machine-page", Machine);
