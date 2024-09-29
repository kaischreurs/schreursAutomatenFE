import { LitElement, html, css } from "lit";

import productsJson from "../products.json" assert { type: "json" };
import { Router } from "@vaadin/router";
import { products, product } from "./machine-page";

export default class Product extends LitElement {
  productId: string | null | undefined;
  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
    const urlParams = new URLSearchParams(window.location.search);
    this.productId = urlParams.get("id");
    console.log(this.productId);
    if (this.productId == null) {
      Router.go(".*");
      return;
    }
    let products: products = productsJson;
    let product: product = products[this.productId];
    if (product == null) {
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
      }
    `;
  }

  render() {
    return html` <main>${this.productId}</main> `;
  }
}

customElements.define("product-page", Product);
