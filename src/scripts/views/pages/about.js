import {html, LitElement} from 'lit';
export class About extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <main class="bg">
    <div class="container-fluid" style="background-color: #0E8E4C;">
        <div class="row">
            <div class="col-sm-8 my-5 px-5 text-start">
              <h1 class="display-4 fw-bold">Cahaya Donasi</h1>
              <p class="fs-5 align-bottom" style="text-align:justify">Cahaya Donasi adalah platform berbasis website sebagai penggalangan dana untuk membangun masjid. Website ini bertujuan agar dapat memudahkan para pengguna masjid untuk melakukan penggalangan dana dan melakukan donasi masjid dengan sistem yang transparan.</p>
            </div>
            <div class="col-sm-4 text-center my-5">
                <img class="img-fluid rounded-circle" src="/logo.png" alt="logo">
            </div>
          </div>
    </div>
    <div class="container">
        <p class="fs-1 fw-bold text-center py-3">Kontak Kami</p>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col mb-3">
                <div class="card">
                    <img src="/profiles/dany.webp" class="card-img-top" alt="foto">
                    <div class="card-body text-center">
                        <h5 class="card-title fs-4">Ahmad Dany Mirza</h5>
                        <p class="card-text my-1 fs-5">Universitas Brawijaya</p>
                        <p class="card-text text-muted fs-6">Jombang, Jawa Timur</p>
                        <a href="https://github.com/ahm4ddm">
                            <button class="btn btn-sm btn-success me-md-2 fs-7" type="button" style="padding: 11px;">Lebih lanjut</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col mb-3">
                <div class="card">
                    <img src="/profiles/aryandi.webp" class="card-img-top" alt="foto">
                    <div class="card-body text-center">
                        <h5 class="card-title fs-4">Aryandi Syahputra</h5>
                        <p class="card-text my-1 fs-5">Universitas Gunadarma</p>
                        <p class="card-text text-muted fs-6">Utan Kayu Utara, Jakarta Timur</p>
                        <a href="https://github.com/AryandiS">
                            <button class="btn btn-sm btn-success me-md-2 fs-7" type="button" style="padding: 11px;">Lebih lanjut</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col mb-3">
                <div class="card">
                    <img src="/profiles/bagus.webp" class="card-img-top" alt="foto">
                    <div class="card-body text-center">
                        <h5 class="card-title fs-4">Ida Bagus Gede Pala Asmara</h5>
                        <p class="card-text my-1 fs-5">Universitas Halu Oleo</p>
                        <p class="card-text text-muted fs-6">Kendari, Sulawesi Tenggara</p>
                        <a href="https://github.com/Asmara123">
                            <button class="btn btn-sm btn-success me-md-2 fs-7" type="button" style="padding: 11px;">Lebih lanjut</button>
                        </a>
                    </div>
                </div>
            </div>

            <div class="col mb-3">
                <div class="card">
                    <img src="/profiles/rosa.webp" class="card-img-top" alt="foto">
                    <div class="card-body text-center">
                        <h5 class="card-title fs-4">Rosa Sansabila</h5>
                        <p class="card-text my-1 fs-5">Universitas Mataram</p>
                        <p class="card-text text-muted fs-6">Dompu, Nusa Tenggara Barat</p>
                        <a href="https://github.com/RosaSansabilaa">
                            <button class="btn btn-sm btn-success me-md-2 fs-7" type="button" style="padding: 11px;">Lebih lanjut</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<my-footer></my-footer>
</body>`;
  }
}
customElements.define('about-page', About);
