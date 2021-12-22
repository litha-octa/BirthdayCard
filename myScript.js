function menampilkan_nama() {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let thisDay = date.getDay();
  var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let myDays = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];

  let hbd = document.getElementById("welcome").value;
  let nama = document.getElementById("nama").value;
  document.getElementById("welcome").innerHTML = ` Happy Birthday<br>${nama}` ;
  document.getElementById(
    "messages"
  ).innerHTML = ` ${myDays[thisDay]},  tanggal ${day} ${months[month]}.
                    Selamat ulang tahun,
                    semoga panjang umur, sehat selalu. 
                    Otw makan-makan nich....<br><br><br>;
}
