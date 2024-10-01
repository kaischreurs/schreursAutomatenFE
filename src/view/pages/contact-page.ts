import { LitElement, html, css } from "lit";

import { Router } from "@vaadin/router";

export default class Contact extends LitElement {
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
    `;
  }

  render() {
    return html` <main></main> `;
  }
}

customElements.define("contact-page", Contact);
