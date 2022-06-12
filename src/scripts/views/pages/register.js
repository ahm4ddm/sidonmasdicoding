import {html, LitElement} from 'lit';
export class Register extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <main class="bg-primary-login-register">
    <div class="container">

    <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
            
            <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-7">
                    <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Halaman Daftar</h1>
                        </div>
                        <form class="user" action="/createakun" method="post">
                            <div class="form-group">
                                <input type="text" name="username" class="form-control form-control-user" id="username"
                                    placeholder="Username" autocomplete="off" required>
                                <small id="username" class="form-text text-muted px-2">Jika Anda sebagai pengelola masjid masukan<i class="text-danger"> nama masjid*</i></small>
                            </div>
                            <div class="form-group">
                                <input type="email" name="email" class="form-control form-control-user" id="email"
                                    placeholder="Email" autocomplete="off" required>
                            </div>
                            <div class="form-group px-2">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="status" id="pengelola" value="pengelola" required>
                                    <label class="form-check-label" for="pengelola">Pengelola Masjid</label>
                                  </div>
                                  <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="status" id="donatur" value="donatur" required>
                                    <label class="form-check-label" for="donatur">Donatur</label>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input type="password" name="password" class="form-control form-control-user"
                                        id="exampleInputPassword" placeholder="Password" required>
                                </div>
                                <div class="col-sm-6">
                                    <input type="password" name="validatepassword" class="form-control form-control-user"
                                        id="exampleRepeatPassword" placeholder="Konfirmasi Password" required>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-user btn-block">Buat Akun</button>
                            <hr>
                        </form>
                        <hr>
                        <div class="text-center">
                            <p class="fs-5 pt-3">Sudah mempunyai akun? <a href="auth/index"><button type="button" class="btn btn-lg btn-link"> Masuk sekarang</button></a></p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
    </main>`;
  }
}
customElements.define('register-page', Register);


{/* <main id="mainLoginRegister">
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
    </main> */}
