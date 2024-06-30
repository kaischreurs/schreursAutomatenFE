import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

import "./img-component";

import { product } from "../pages/machine-page";

export default class Product extends LitElement {
  @property({ type: Object })
  product!: product;

  constructor() {
    super();
  }

  static get styles() {
    return css`
      main {
        border: 1px solid black;
        border-radius: 20px;
        display: flex;
        overflow: hidden;
        text-align: center;
        place-content: center;
        flex-direction: column;
        font-size: 30px;
        margin: 5px;
        height: 100px;
      }

      img-component {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 15%;
        height: 100%;
      }
    `;
  }

  render() {
    return html`
      <main>
        <img-component img=${this.product.picture}></img-component>
        ${this.product.name}
      </main>
    `;
  }
}

customElements.define("product-component", Product);
