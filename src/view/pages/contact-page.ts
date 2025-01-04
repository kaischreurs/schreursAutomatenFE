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
        text-align: left;
        margin-left: 5vw;
        flex-direction: column;
        height: 100vh;
        font-size: 1em;
      }
      p {
        font-size: 2em;
      }
    `;
  }

  render() {
    return html`
      <main>
        <p>contactgegevens</p>
        Email: schreursautomaten@gmail.com
        <br />
        <a href="tel:06 51 84 47 85">tel: 06 51 84 47 85</a>
      </main>
    `;
  }
}

customElements.define("contact-page", Contact);
