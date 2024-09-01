import { LitElement, html, css } from "lit";

import "../components/product-component";

import machinesJson from "../machines.json" assert { type: "json" };
import productsJson from "../products.json" assert { type: "json" };

import { property } from "lit/decorators.js";
import { Router } from "@vaadin/router";

export interface product {
  picture: string;
  name: string;
  price: string;
}

interface machine {
  products: string[];
  status: string;
}

interface machines {
  [index: string]: machine;
}

interface products {
  [index: string]: product;
}

export default class Machine extends LitElement {
  @property({ attribute: false })
  products!: product[];

  constructor() {
    super();
    const urlParams = new URLSearchParams(window.location.search);
    let machineId = urlParams.get("id");
    if (machineId == null) {
      console.log("test");
      Router.go(".*");
      return;
    }
    let machines: machines = machinesJson;
    let machine: machine = machines[machineId];
    if (machine == null) {
      Router.go(".*");
      return;
    }
    if (machine.status === "progress") {
      Router.go("/progress");
      return;
    }
    let allProducts: products = productsJson;
    this.products = machine.products.map((product) => allProducts[product]);
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
    return html`
      <main>
        ${this.products.map(
          (product) =>
            html` <product-component product=${JSON.stringify(product)} />`
        )}
      </main>
    `;
  }
}

customElements.define("machine-page", Machine);
