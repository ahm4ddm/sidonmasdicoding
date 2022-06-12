import {html, LitElement} from 'lit';
export class Login extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
    <main class="bg-primary-login-register">
    <div class="container">
    
        <div class="row justify-content-center">
    
            <div class="col-xl-10 col-lg-12 col-md-9">
    
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
    
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Halaman Masuk</h1>
                                    </div>
                                    <form class="user" action="/login" method="post">
                                        <div class="form-group">
                                            <input type="text" name="username" class="form-control form-control-user"
                                                id="username" aria-describedby="username"
                                                placeholder="Username" autocomplete="off" required>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" name="password" class="form-control form-control-user"
                                                id="password" placeholder="Password" required>
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
                                        <button type="submit" class="btn btn-primary btn-user btn-block">Login</button>
                                        <hr>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                    <p class="fs-5 pt-3">Belum mempunyai akun? <a href="/register"><button type="button" class="btn btn-lg btn-link"> Daftar disini</button></a></p>
                                    </div>
                                </div>
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
customElements.define('login-page', Login);
