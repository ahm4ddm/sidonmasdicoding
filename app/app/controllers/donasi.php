<?php
    class Donasi extends Controller {

        public function index(){
            $data['data'] = $this->model('Donatur_model')->getMasjidPublic();
            $data['public'] = $this->model('Donatur_model')->getImgMasjid();
            $this->view('donasi/index', $data);
        }
    }
?>