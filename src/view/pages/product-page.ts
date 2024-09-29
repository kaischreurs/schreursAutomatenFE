import { LitElement, html, css } from "lit";

import productsJson from "../products.json" assert { type: "json" };
import { Router } from "@vaadin/router";
import { products, product } from "./machine-page";
import { state } from "lit/decorators.js";

export default class Product extends LitElement {
  productId: string | null | undefined;
  @state()
  product: product | null | undefined;
  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
    const urlParams = new URLSearchParams(window.location.search);
    this.productId = urlParams.get("id");
    if (this.productId == null) {
      Router.go(".*");
      return;
    }
    let products: products = productsJson;
    this.product = products[this.productId];
    if (this.product == null) {
      Router.go(".*");
      return;
    }
  }

  static get styles() {
    return css`
      main {
        display: flex;
        -ms-overflow-style: none;
        scrollbar-width: none;
        text-align: center;
        place-content: center;
        flex-direction: column;
        height: 100vh;
      }
      .img {
        height: 200px;
        width: auto;
        flex: 1;
      }
      img {
        max-width: 100%;
        max-height: 100%;
      }
    `;
  }

  render() {
    return html`
      <main>
        <div class="img"><img src="../${this.product?.picture}" /></div>
        <br />
        hello
      </main>
    `;
  }
}

customElements.define("product-page", Product);
