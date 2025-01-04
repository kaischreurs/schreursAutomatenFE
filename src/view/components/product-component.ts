import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

import "./img-component";

import { product } from "../pages/machine-page";
import { Router } from "@vaadin/router";

export default class Product extends LitElement {
  @property({ type: Object })
  product!: product;

  constructor() {
    super();
  }

  clickhandler() {
    Router.go(`/product?id=${this.product.id}`);
  }

  static get styles() {
    return css`
      main {
        border: 1px solid black;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
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
        margin-left: 10px;
        margin-right: 10px;
      }
      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
        font-size: 20px;
      }
    `;
  }

  render() {
    return html`
      <main @click=${this.clickhandler}>
        <img-component img=${this.product.picture}></img-component>
        <div>
          ${this.product.name}
          <br />
          <a>beschrijving</a>
        </div>
      </main>
    `;
  }
}

customElements.define("product-component", Product);
