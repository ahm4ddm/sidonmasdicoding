import {html, LitElement} from 'lit';

export class MyFooter extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <footer class="bg-secondary text-white text-center">
    <div class="container p-4">
     <p class="fs-3"> Mari sisihkan harta demi kehidupan nanti </p>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
     <p class="fs-4"> © 2022 Copyright Cahaya Donasi </p>
    </div>
  </footer>`;
  }
}
customElements.define('my-footer', MyFooter);
