import { LitElement, html, css } from "lit";

import "../components/product-component";

import machines from "../machines.json" assert { type: "json" };

import { property } from "lit/decorators.js";

export interface product {
  picture: string;
  name: string;
}

interface machine {
  products: string[];
}

export default class Machine extends LitElement {
  // @property({ attribute: false })
  // machineId: string | null;

  constructor() {
    super();
    const urlParams = new URLSearchParams(window.location.search);
    let machineId = urlParams.get("id");
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
        <product-component
          product='{"id": "testId", "name": "test", "picture": "test.png"}' />
      </main>
    `;
  }
}

customElements.define("machine-page", Machine);
