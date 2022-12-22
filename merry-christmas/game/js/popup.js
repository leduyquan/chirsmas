status = "Mr.Linhkool";
var a = new Array(),
  n = "";
a[1] = "Đ";
a[2] = "ú";
a[3] = "n";
a[4] = "g";
a[5] = " ";
a[6] = "v";
a[7] = "ậ";
a[8] = "y";
a[9] = "!";
a[10] = " ";
a[11] = "a";
a[12] = "n";
a[13] = "h";
a[14] = " ";
a[15] = "đ";
a[16] = "ẹ";
a[17] = "p";
a[18] = " ";
a[19] = "t";
a[20] = "r";
a[21] = "a";
a[22] = "i";
a[23] = " ";
a[24] = "v";
a[25] = "ô";
a[26] = " ";
a[27] = "đ";
a[28] = "ị";
a[29] = "c";
a[30] = "h";
a[31] = " ";
a[32] = "k";
a[33] = "h";
a[34] = "ắ";
a[35] = "p";
a[36] = " ";
a[37] = "v";
a[38] = "ũ";
a[39] = " ";
a[40] = "t";
a[41] = "r";
a[42] = "ụ";
a[43] = " ";
a[44] = "♥";
a[45] = "♥";
a[46] = "♥";
a[47] = "♥";
function one() {
  t = document.f.txt.value;
  j = t.length;
  if (j > 0) {
    for (var i = 1; i <= j; i++) {
      n = n + a[i];
      if (i == 48) {
        document.f.txt.value = "";
        n = "";
      }
    }
  }
  document.f.txt.value = n;
  n = "";
  setTimeout("one()", 1);
}
function s() {}
function on() {
  one();
}

$(document).ready(function () {
  $("#k").hide();
  $("h1").click(function () {
    $(".active").removeClass("active");
    $("#k").slideUp("fast");
    if ($(this).next("#k").is(":hidden") == true) {
      $(this).addClass("active");
      $(this).next("#k").slideDown("fast");
    }
  });
});
function Yeu() {
  $("#divResult").fadeOut(0);
  $("#divResult").html(
    "</br><h2>Ủ ÔI! AI CŨNG NÓI VẬY ĐÓ <img width='35' height='35' src='img/adore.png'</img></h2>"
  );
  $("#divResult").fadeIn(2000, function () {
    $("#divResult2").fadeOut(0);
    $("#divResult2").html(
      "<p>Nhưng mà kệ em nhé <img width='35' height='35' src='img/byebye.png'/></p></br>"
    );
    $("#divResult2").fadeIn(2000, function () {
      $("#divResult3").fadeOut(0);
      $("#divResult3").html(
        "<p>Tuy anh biết anh đẹp trai và anh tôn trọng điều đó, nhưng anh không phải loại con trai dễ dãi <img width='35' height='35' src='img/sure.png'/></p></br>"
      );
      $("#divResult3").fadeIn(2000);
    });
  });
}
