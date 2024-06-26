import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";

export default class Img extends LitElement {
  @property()
  img!: string;

  @property({ attribute: false })
  imgUrl!: string;

  constructor() {
    super();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.imgUrl = new URL("../images/" + this.img, import.meta.url).href;
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
    return html` <main><img src=${this.imgUrl} /></main>`;
  }
}

customElements.define("img-component", Img);
