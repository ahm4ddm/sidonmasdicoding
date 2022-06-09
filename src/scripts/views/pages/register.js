import {html, LitElement} from 'lit';
export class Register extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <main id="mainLoginRegister">
    <div id="my-register-load" class="container flex-column bd-highlight">
        <div class="p-2 bd-highlight justify-content-center d-xxl-flex">
            <form class="pt-5 mx-5">
                <a href="index.html" class="text-decoration-none fs-1 fw-bold"><p class="text-center ">Cahaya Donasi</p></a>
                <p class="fs-2 fw-bold">Halaman Daftar</p>
                <div class="mb-4">
                    <label for="exampleInputFullname" class="form-label fs-4">Nama Lengkap</label>
                    <input type="fullname" class="form-control form-control-lg" id="exampleInputFullname" aria-describedby="fullnameHelp">
                    <div id="fullname" class="form-text"></div>
                  </div>
                <div class="mb-4">
                  <label for="exampleInputUsername" class="form-label fs-4">Username</label>
                  <input type="username" class="form-control form-control-lg" id="exampleInputUsername" aria-describedby="usernameHelp">
                  <div id="username" class="form-text"></div>
                </div>
                <div class="mb-4">
                    <label for="exampleInputEmail" class="form-label fs-4">Email</label>
                    <input type="email" class="form-control form-control-lg" id="exampleInputEmail" aria-describedby="emailHelp">
                    <div id="email" class="form-text"></div>
                </div>
                <div class="mb-4">
                    <label for="exampleInputNumber" class="form-label fs-4">Nomor Telepon</label>
                    <input type="number" class="form-control form-control-lg" id="exampleInputNumber" aria-describedby="phonenumberHelp">
                    <div id="number" class="form-text"></div>
                </div>
                <div class="mb-4">
                  <label for="exampleInputPassword" class="form-label fs-4">Password</label>
                  <input type="password" class="form-control form-control-lg" id="exampleInputPassword">
                </div>
                <p class="fs-5 pt-3">Sudah mempunyai akun? <a href="login.html"><button type="button" class="btn btn-lg btn-link"> Masuk sekarang</button></a></p> 
                  <!-- <a href="register.html" class="p-2">di sini</a>  -->
                <button type="submit" class="btn btn-lg btn-success">Masuk</button>
              </form>
        </div>
    </div>
    </main>`;
  }
}
customElements.define('register-page', Register);
