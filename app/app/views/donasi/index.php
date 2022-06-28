<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cahaya Donasi</title>
  <link rel="stylesheet" href="<?= BASEURL ?>/vendor/bootstrap/css/bootstrap.min.css" type="text/css">
  <link href="<?=BASEURL ;?>/css/sb-admin-2.min.css" rel="stylesheet" type="text/css">
</head>

<body>
  <header>
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
                  <a class="nav-link fs-5" href="/donasi" target="_blank" rel="noopener noreferrer">Donasi</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-5" href="/about">Tentang Kami</a>
                </li>
              </ul>
              <?php
              if(isset($_SESSION['login'])){
                $dashboard = true;
                echo '
                <ul class="navbar-nav ms-auto gap-1">
                  <a href="/login" rel="noopener noreferrer">
                      <li class="nav-item"><button class="btn btn-success me-md-2 fs-5" type="button">Dashboard</button></li>
                  </a>
                </ul>
                ';
              }?>
              <ul class="navbar-nav ms-auto gap-2" <?php if($dashboard == true){?> style="display: none;" <?php } ?> >
                  <a href="/login" rel="noopener noreferrer">
                      <li class="nav-item"><button class="btn btn-success me-md-2 fs-5" type="button">Masuk</button></li>
                  </a>
                  <a href="/register" rel="noopener noreferrer">
                      <li class="nav-item"><button class="btn btn-light fs-5" type="button">Daftar</button></li>  
                  </a>
              </ul>
            </div>
          </div>
      </nav>
  </header>
  <main class="bg-gradient-primary-main">
    <div class="container">
      <fieldset class="border border-2 rounded p-2">
        <legend class="float-none w-auto p-2 text-center">
          <div class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Cari" aria-label="Search" id="inputpublic">
            <button class="btn btn-outline-success" type="submit" id="srchandler"><img class="align-middle" src="/search.svg"></button>
          </div>
        </legend>
        <div class="container">
          <p class="fs-1 fw-bold">Terbaru</p>
          <div class="row row-cols-1 row-cols-md-4 g-4 mb-3">
          <?php if(!empty($data)) $isEmpty = true; ?>  
          <?php $count = 0; ?>
            <?php foreach ($data['data'] as $lists) : ?>
              <?php $isEmpty = false; ?>
              <?php foreach ($lists as $result) : ?>
                <div class="col">
                  <div class="card">
                    <img class="img-thumbnail" style="width: 300px; height: 300px;" src="<?= BASEURL; ?>/img/masjid/<?= $data['public'][$count]['gambar'] ?>" alt="Gambar Masjid <?= ucwords($result['fullname']) ?>">
                    <div class="card-body">
                      <h5 class="card-title"><?= ucwords($result['fullname']) ?></h5>
                      <p class="card-text"> Target <br> <b> Rp <?= number_format($result['jml_donasi']) ?> </b> <br>
                        Terkumpul <br> <b> Rp <?= number_format($result['total_donasi']) ?> </b> <br> <br>
                        <b><?= $result['total_donatur'] ?></b> donatur
                      </p>
                    </div>
                    <div class="card-footer text-center">
                      <?php if($dashboard != true){
                        echo '
                      <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Donasi Sekarang
                      </button>';
                       } else {?> <?php 
                       echo '
                       <button type="button" class="btn btn-success">
                        <a href="/login/login" style="color: white; text-decoration: none;">Donasi Sekarang</a>
                      </button>';
                       } ?>
                    </div>
                  </div>

                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                          <div class="container-fluid">
                            <div class="row">
                              <div class="col-md ms-auto">
                                <p class="fs-5 text-center">Anda harus login atau daftar terlebih dahulu untuk melakukan donasi</p>
                                <hr>
                                <div class="d-flex">
                                  <div class="p-2 flex-fill">
                                    <a href="/login" target="_blank" rel="noopener noreferrer">
                                      <button class="btn btn-success me-md-2 fs-5" type="button">Masuk</button>
                                    </a>
                                  </div>
                                  <div class="p-2 flex-fill">
                                    <a href="/register" target="_blank" rel="noopener noreferrer">
                                      <button class="btn btn-success me-md-2 fs-5" type="button">Daftar</button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <?php endforeach; ?>
              <?php $count++ ?>
            <?php endforeach; ?>
            <div class="container" <?php if($isEmpty != true){?> style="display: none;" <?php } ?>>
              <p class="fs-4 fw-reguler">Belum ada donasi</p>
            </div>
      </fieldset>
    </div>
  </main>
</body>
<script src="<?= BASEURL; ?>/vendor/jquery/jquery.min.js"></script>
<script src="<?= BASEURL; ?>/vendor/bootstrap/js/bootstrap.min.js"></script>
<script>
  $(document).ready(function(){
    $("#srchandler").on("click", function() {
      // var value = $(this).val().toLowerCase();
      var value =  $("#inputpublic").val().toLowerCase();
      $(".col .card").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
  });
</script>

</html>