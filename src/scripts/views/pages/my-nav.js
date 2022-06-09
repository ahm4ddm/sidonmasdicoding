import {html, LitElement} from 'lit';

export class MyNav extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <nav class="navbar navbar-expand-md navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img src="/logo.png" alt="logo" width="32" height="32">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link fs-5" href="/">Beranda</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-5" href="/donasi">Donasi</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-5" href="/about">Tentang Kami</a>
                </li>
              </ul>
              <ul class="navbar-nav ms-auto gap-2">
                  <a href="/login">
                      <li class="nav-item"><button class="btn btn-success me-md-2 fs-5" type="button">Masuk</button></li>
                  </a>
                  <a href="/register">
                      <li class="nav-item"><button class="btn btn-light fs-5" type="button">Daftar</button></li>  
                  </a>
              </ul>
            </div>
          </div>
      </nav>
      <slot></slot>`;
  }
}
customElements.define('my-nav', MyNav);
