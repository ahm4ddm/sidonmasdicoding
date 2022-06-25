# Prerequisite
1. Webpack
2. Lampp

# Setup
1. Clone repo
2. Pindahkan direktori *app* ke */opt/lampp/htdocs*
3. Setting listen port 
    ```
    $ nano /opt/lampp/etc/httpd.conf
    ```
    lalu ubah port *Listen* menjadi *7777*

4. Lakukan instalasi depedensi
    ```
    $ npm install
    ``` 
5. Jalankan Lampp
    ```
    $ sudo /opt/lampp/lampp start
    Starting XAMPP for Linux 8.0.19-0...
    XAMPP: Starting Apache...ok.
    XAMPP: Starting MySQL...ok.
    XAMPP: Starting ProFTPD...ok.
    ```
6. Jalankan webpack
    ```
    $ npm run dev
    ```