document.addEventListener(
  "DOMContentLoaded",
  function () {
    var nut = document.getElementsByClassName("thongbao");
    var nd = document.getElementsByClassName("thongbao1");
    for (var i = 0; i < nut.length; i++) {
      nut[i].onclick = function () {
        console.log(this.classList[2]);
        if (this.classList[2] == "doimau") {
          //click vao cai da hien thi roi

          this.classList.remove("doimau"); //bo cai mau trang o chinh no

          //3 dong duoi cho div cua doi tuong duoc click hien thi ra

          var ndhienthi = this.getAttribute("data-hienthi");
          var phantuhienthi = document.getElementById(ndhienthi);

          phantuhienthi.classList.remove("hiendanhsach"); //bo cai noi dung hien thi o chinh no
        } //click cac cai con lai
        else {
          //cho tat ca bo mau trang di
          for (var j = 0; j < nut.length; j++) {
            nut[j].classList.remove("doimau");
          }
          //doi tuong duoc click (this) thanh mau trang
          this.classList.toggle("doimau");
          //lay ve cai data-hienthi
          var ndhienthi = this.getAttribute("data-hienthi");
          var phantuhienthi = document.getElementById(ndhienthi);
          //cho tat ca cac div .dehienthi khac an di
          for (var i = 0; i < nd.length; i++) {
            nd[i].classList.remove("hiendanhsach");
          }
          //cho div cua doi tuong duoc click hien thi ra
          phantuhienthi.classList.toggle("hiendanhsach");
        }
      };
    }
    //xu li scroll
    var menudo = document.querySelector(".divnavbar");
    var trangthaido = "duoi100";
    var doimaunav = document.getElementsByClassName("bg-color");

    window.addEventListener("scroll", function () {
      //bat su kien cuon chuot
      if (window.pageYOffset > 100) {
        //lay vi tri chuot cuon toi
        if (trangthaido == "duoi100") {
          trangthaido = "tren100";
          menudo.classList.add("menuscroll");
          doimaunav[0].classList.add("doimaunav");
        }
      } else if (window.pageYOffset <= 100) {
        if (trangthaido == "tren100") {
          trangthaido = "duoi100";
          menudo.classList.remove("menuscroll");
          doimaunav[0].classList.remove("doimaunav");
        }
      }
    });
    //js phan dang ki
    var buttondangki = document.getElementsByClassName("buttondangki");
    var divden = document.getElementsByClassName("divden");
    var hienthidivden = document.getElementsByClassName("hienthidivden");
    var trangthai = "chuahienra";
    buttondangki[0].onclick = function () {
      if (trangthai == "chuahienra") {
        trangthai = "dahienra";
        divden[0].classList.add("hienthidivden");
        divden[0].classList.remove("xoadi");
      }
    };

    //close divden
    var dangki = document.getElementsByClassName("close");
    var andi = document.getElementsByClassName("xoadi");
    dangki[0].onclick = function () {
      if (trangthai == "dahienra") {
        trangthai = "chuahienra";
        divden[0].classList.add("xoadi");
        divden[0].classList.remove("hienthidivden");
      }
    };

    //js phan dang nhap
    var buttondangnhap = document.getElementsByClassName("buttondangnhap");
    console.log(buttondangnhap[0]);
    var divden1 = document.getElementsByClassName("divden1");
    console.log(divden1[0]);
    var hienthidivden1 = document.getElementsByClassName("hienthidivden1");
    var trangthai1 = "chuahienthi";
    buttondangnhap[0].onclick = function () {
      if (trangthai1 == "chuahienthi") {
        trangthai1 = "dahienthi";
        divden1[0].classList.add("hienthidivden1");
        divden1[0].classList.remove("xoadi1");
      }
    };

    //close divden
    var dangnhap = document.getElementsByClassName("close1");
    console.log(dangnhap[0]);
    var andi1 = document.getElementsByClassName("xoadi1");
    dangnhap[0].onclick = function () {
      if (trangthai1 == "dahienthi") {
        trangthai1 = "chuahienthi";
        divden1[0].classList.add("xoadi1");
        divden1[0].classList.remove("hienthidivden1");
      }
    };
  },
  false
);
