import { LitElement, html, css } from "lit";

export default class OverView extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      main {
        display: flex;
        height: calc(100vh - 96px);
        text-align: center;
        color: #00ad00;
        place-content: center;
        flex-direction: column;
      }
    `;
  }

  render() {
    return html` <main></main> `;
  }
}

customElements.define("overview-page", OverView);
