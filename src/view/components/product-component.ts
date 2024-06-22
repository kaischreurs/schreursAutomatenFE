import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

import { product } from "../pages/machine-page";

export default class Product extends LitElement {
  @property({ type: Object })
  product!: product;

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
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
    return html` <main>${this.product.picture} ${this.product.name}</main> `;
  }
}

customElements.define("product-component", Product);
