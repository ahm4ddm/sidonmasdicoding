<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Cahaya Donasi</title>
    <link href="<?=BASEURL ;?>/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">
    <link href="<?=BASEURL ;?>/css/sb-admin-2.min.css" rel="stylesheet" type="text/css">
    <link rel="shortcut icon" href="<?= BASEURL;?>/img/favicon.ico" type="image/x-icon">

</head>

<body class="bg-gradient-primary-login-register">

    <div class="container">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                
                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <?php Flasher::flashMessage(); ;?>
                            <div class="text-center">
                            <p class="h4 text-gray-900 mb-4">
                                            <p class= "h4 text-gray-900 mb-4"><a href="http://localhost:8080/">Cahaya Donasi</a> | Halaman Daftar

                                        </p>
                                           </p> 
                            </div>
                            <form class="user" action="<?=BASEURL ;?>/auth/createakun" method="post">
                                <div class="form-group">
                                    <input type="text" name="fullname" maxlength="255" minlength="4" class="form-control form-control-user" id="fullname"
                                        placeholder="Nama" autocomplete="off" required>
                                </div>
                                <div class="form-group">
                                    <input type="text" name="username" maxlength="64" minlength="4" class="form-control form-control-user" id="username"
                                        placeholder="Username" autocomplete="off" required>
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" maxlength="255" class="form-control form-control-user" id="email"
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
                                        <input type="password" maxlength="64"  name="password" class="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password" required>
                                    </div>
                                    <div class="col-sm-6">
                                        <input type="password" maxlength="64" minlength="8" name="validatepassword" class="form-control form-control-user"
                                            id="exampleRepeatPassword" placeholder="Konfirmasi Password" required>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary btn-user btn-block">Buat Akun</button>
                                <hr>
                            </form>
                            <hr>
                            <div class="text-center">
                                <p class="fs-5 pt-3">Sudah mempunyai akun? <a href="<?=BASEURL ;?>/auth/index"><button type="button" class="btn btn-lg btn-link"> Masuk sekarang</button></a></p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    
    <script src="<?=BASEURL ;?>/vendor/jquery/jquery.min.js"></script>
    <script src="<?=BASEURL ;?>/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="<?=BASEURL ;?>/vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="<?=BASEURL ;?>/js/sb-admin-2.min.js"></script>

</body>

</html>
