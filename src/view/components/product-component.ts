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
        flex-direction: row;
        overflow: hidden;
        text-align: left;
        font-size: 25px;
        margin: 5px;
        height: 100px;
        background-color: white;
      }

      img-component {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 20%;
        height: 80%;
      }
    `;
  }

  render() {
    return html`
      <main>
        <img-component img=${this.product.picture}></img-component>
        <div>${this.product.name} ${this.product.price}</div>
      </main>
    `;
  }
}

customElements.define("product-component", Product);
