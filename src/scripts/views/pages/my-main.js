import {html, LitElement} from 'lit';

export class MyMain extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <main id="mainId">
    <div class="container">
      <div class="row my-5">
        <div class="col-md">
        <img class="img-fluid my-5" src="/ilus-landing.png" alt="people send money">
        </div>
        <div class="col-md">
      <p class="fs-1 fw-bold my-5">Mari Bantu Donasi Masjid</p>
      <p class="fs-4 text-break">Sekecil apapun yang Anda berikan akan bermanfaat bagi yang membutuhkan</p>
      <button class="btn btn btn-success fs-3 my-3" type="button">Mulai Donasi</button>
      </div>
    </div>
    </main>`;
  }
}
customElements.define('my-main', MyMain);
