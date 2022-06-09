import {html, LitElement} from 'lit';
export class About extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
        <main id="mainId">
        <div class="container-fluid" style="background-color: #0E8E4C;">
            <div class="row">
                <div class="col-sm-8 my-5 px-5 text-start">
                  <h1 class="display-4 fw-bold">Cahaya Donasi</h1>
                  <p class="fs-5 align-bottom">Cahaya Donasi adalah platform berbasis website sebagai penggalangan dana untuk membangun masjid. dengan adanya website ini, kami ingin memudahkan para donatur masjid untuk melakukan penggalangan dana dengan sistem yang transparan.</p>
                </div>
                <div class="col-sm-4 text-center my-5">
                    <img class="img-fluid rounded-circle" src="/logo.png" alt="logo">
                </div>
              </div>
        </div>
        <div class="container">
            <p class="fs-1 fw-bold text-center py-3">Kontak Kami</p>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col">
              <div class="card">
                <img src="foto" class="card-img-top" alt="foto">
                <div class="card-body text-center">
                  <h5 class="card-title fs-4">Ahmad Dany Mirza</h5>
                  <p class="card-text my-1 fs-5">Universitas Brawijaya</p>
                  <p class="card-text text-muted fs-6">Jombang, Jawa-Timur</p>
                  <a href="https://github.com/ahm4ddm">
                    <button class="btn btn-sm btn-success me-md-2 fs-7" type="button" style="padding: 11px;">Lebih lanjut</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </main>`;
  }
}
customElements.define('about-page', About);
