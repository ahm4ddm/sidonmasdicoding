import {html, LitElement} from 'lit';

export class MyMain extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <main class="bg" id="maincontent">
    <div class="container">
      <div class="row py-5">
        <div class="col-md text-center">
          <img class="my-5" width="300" height="300" src="/ilus-landing.webp" alt="people send money">
        </div>
      <div class="col-md">
        <p class="fs-1 fw-bold my-5">Mari Bantu Donasi Masjid</p>
        <p class="fs-4 text-break">Sekecil apapun yang Anda berikan akan bermanfaat bagi yang membutuhkan</p>
        <a href="/donasi" target="_blank" rel="noopener noreferrer">
          <button class="btn btn btn-success fs-3 my-3" type="button">Mulai Donasi </button>
        <a/>
      </div>
    </div>
    </main>
    <my-footer></my-footer>
   `;
  }
}
customElements.define('my-main', MyMain);
