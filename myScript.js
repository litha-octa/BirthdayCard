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
  document.getElementById("welcome").innerHTML = " Happy Birthday";
  document.getElementById("demo").innerHTML = `${nama}`;
  document.getElementById(
    "messages"
  ).innerHTML = `Pada hari ${myDays[thisDay]},  tanggal ${day} ${months[month]}.
                    Selamat ulang tahun anak bengal,
                    nambah umur makin nurut dibilangin sama mama,
                    kalo dicariin mama jangan ngumpet di WC.
                    Belajar yang rajin, jangan maen FF mulu.
                    Semoga bisa lanjut sekolah di SMP 220.
                    Semoga ulang tahun gini akhlaknya jadi nambah,
                    soalnya lu adek ga punya akhlak.
                    Yang sopan sama kakak, kalo disuruh jangan nolak.
                    semoga panjang umur, sehat selalu. 
                    Otw makan-makan nich....<br><br><br> -Dari : Kakak yg jahat `;
}
