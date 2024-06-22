import { LitElement, html, css } from "lit";

export default class Product extends LitElement {
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
    return html` <main></main> `;
  }
}

customElements.define("product-component", Product);
