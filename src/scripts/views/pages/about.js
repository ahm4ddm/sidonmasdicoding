import {html, LitElement} from 'lit';
export class About extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <main class="bg">
    <div class="container">
        <p class="fs-1 fw-bold text-center">Coming soon</p>
    </div>
    </main>`;
  }
}
customElements.define('about-page', About);
