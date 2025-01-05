import { LitElement, html, css } from "lit";

import { Router } from "@vaadin/router";

export default class Nav extends LitElement {
  clickhandler(route: string) {
    Router.go(route);
  }

  static get styles() {
    return css`
      main {
        display: flex;
        -ms-overflow-style: none;
        scrollbar-width: none;
        text-align: center;
        flex-direction: column;
        height: 100vh;
        font-size: 1.5em;
      }

      .navItem {
        border: 1px solid black;
        border-radius: 20px;
        text-align: center;
        font-size: 1.5em;
        margin: 5px;
        height: 100px;
        line-height: 90px;
        background-color: white;
        color: black;
        text-decoration: none;
      }
    `;
  }

  render() {
    return html`
      <main>
        <a href="/contact" class="navItem"> Contactgegevens </a>
        <a href="/automaat" class="navItem"> Product informatie </a>
      </main>
    `;
  }
}

customElements.define("nav-page", Nav);
