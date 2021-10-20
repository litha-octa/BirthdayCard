function menampilkan_nama() {
    let hbd = document.getElementById("welcome").value;
    let nama = document.getElementById("nama").value;
        document.getElementById('welcome').innerHTML = " Happy Birthday";
        document.getElementById("demo").innerHTML = `${nama}`;
}