function menampilkan_nama() {
//let nama = document.getElementById("form1").name;
  let nama = document.getElementById("nama").value;
  document.getElementById("demo").innerHTML = `Welcome ${nama}`;
}