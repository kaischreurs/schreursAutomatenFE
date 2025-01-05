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
  id: string;
  description: string;
}

interface machine {
  products: string[];
  status: string;
}

interface machines {
  [index: string]: machine;
}

export interface products {
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
      machineId = localStorage.getItem("machineId");
      if (machineId == null) {
        Router.go(".*");
        return;
      }
    }

    localStorage.setItem("machineId", machineId);
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

  connectedCallback(): void {
    super.connectedCallback();
    const urlParams = new URLSearchParams(window.location.search);
    let machineId = urlParams.get("id");
    if (machineId == null) {
      urlParams.set("id", localStorage.getItem("machineId")!);
      window.location.search = urlParams.toString();
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
