<?php
    class Donasi extends Controller {

        public function index(){
            $data['data'] = $this->model('Donatur_model')->getMasjid();
            $data['public'] = $this->model('Donatur_model')->getImgMasjid();
            $this->view('donasi/index', $data);
        }
    }
?>