import {html, LitElement} from 'lit';
export class Login extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <main id="mainLoginRegister">
    <div class="container flex-column bd-highlight">
    <div class="p-2 bd-highlight justify-content-center d-xxl-flex">
        <form class="pt-5 mx-5">
            <a href="index.html" class="text-decoration-none fs-1 fw-bold"><p class="text-center ">Cahaya Donasi</p></a>
            <p class="fs-2 fw-bold">Halaman Masuk</p>
            <div class="mb-4">
              <label for="exampleInputUsername" class="form-label fs-4">Username</label>
              <input type="username" class="form-control form-control-lg" id="exampleInputUsername" aria-describedby="usernameHelp">
              <div id="username" class="form-text"></div>
            </div>
            <div class="mb-4">
              <label for="exampleInputPassword" class="form-label fs-4">Password</label>
              <input type="password" class="form-control form-control-lg" id="exampleInputPassword">
            </div>
            <p class="fs-5 pt-3">Belum mempunyai akun? <a href="register.html"><button type="button" class="btn btn-lg btn-link"> Daftar disini</button></a></p>
              <!-- <a href="register.html" class="p-2">di sini</a>  -->
            <button type="submit" class="btn btn-lg btn-success">Masuk</button>
          </form>
    </div>
    <div class="p-3 bd-highlight justify-content-center d-flex">
        <img src="/ilus-login.png" alt="">
    </div>
    </div>
    </main>`;
  }
}
customElements.define('login-page', Login);