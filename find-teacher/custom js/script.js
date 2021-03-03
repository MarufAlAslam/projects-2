hljs.initHighlightingOnLoad();
new VGNav().toggle();

$(window).scroll(function () {
  if ($(window).scrollTop() > 50) {
    $(".filter")
      .css("position", "fixed")
      .css("width", "100%")
      .css("top", 0)
      .css("z-index", "1");
  } else {
    $(".filter").css("position", "relative");
  }
});

$(".teacherCard1").mouseenter(function () {
  $(".sideCard1").show(300);
  $(".sideCard2").hide(200);
  $(".sideCard3").hide(200);
  $(".sideCard4").hide(200);
});
$(".teacherCard2").mouseenter(function () {
  $(".sideCard1").hide(200);
  $(".sideCard3").hide(200);
  $(".sideCard4").hide(200);
  $(".sideCard2").show(300);
});
$(".teacherCard3").mouseenter(function () {
  $(".sideCard1").hide(200);
  $(".sideCard2").hide(200);
  $(".sideCard4").hide(200);
  $(".sideCard3").show(300);
});
$(".teacherCard4").mouseenter(function () {
  $(".sideCard4").show(300);
  $(".sideCard1").hide(200);
  $(".sideCard2").hide(200);
  $(".sideCard3").hide(200);
});

$(document).ready(function () {
  $(".popup").hide();
});
$("#popup-btn").click(function () {
  $(".popup").toggle(200);
});
$("#close").click(function () {
  $(".popup").hide(200);
});

$(".tabLinks").click(function (event) {
  event.preventDefault();
});
$("#profileBtn").click(function (event) {
  event.preventDefault();
  $(".user-dropdown").toggle(200);
});

$(document).ready(function () {
  $(".settings").hide();
});
$(".dashboardBtn").click(function () {
  $(".dashboardBtn").addClass("active");
  $(".settingsBtn").removeClass("active");
  $(".settings").hide();
  $(".dashboard").show();
});

$(".settingsBtn").click(function () {
  $(".settingsBtn").addClass("active");
  $(".dashboardBtn").removeClass("active");
  $(".settings").show();
  $(".dashboard").hide();
});

$(".generalbtn").click(function (event) {
  event.preventDefault();
  $(".generalbtn").addClass("active");
  $(".profileEditBtn").removeClass("active");
  $(".passwordBtn").removeClass("active");

  $(".generalField").show();
  $(".passwordField").hide();
  $(".profileField").hide();
});

$(".profileEditBtn").click(function (event) {
  event.preventDefault();
  $(".generalbtn").removeClass("active");
  $(".profileEditBtn").addClass("active");
  $(".passwordBtn").removeClass("active");

  $(".generalField").hide();
  $(".passwordField").hide();
  $(".profileField").show();
});

$(".passwordBtn").click(function (event) {
  event.preventDefault();
  $(".generalbtn").removeClass("active");
  $(".profileEditBtn").removeClass("active");
  $(".passwordBtn").addClass("active");

  $(".generalField").hide();
  $(".passwordField").show();
  $(".profileField").hide();
});

$("#lang").select2();
$("#fromCountry").select2();
$("#speaks").select2();

$(document).ready(function(){
  $(".dropdown1 .select2-selection").css("border","1px solid #ACAEB2")
  $('#select2-lang-container').css("color","#ACAEB2")
  $(".dropdown2 .availbtn").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $(".dropdown3 .select2-selection").css("border","1px solid #ACAEB2")
  $("#select2-fromCountry-container").css("color","#ACAEB2")
  $(".dropdown4 .select2-selection").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $('#select2-speaks-container').css("color","#ACAEB2")
  $(".dropdown5 .btn").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
})

$(".availbtn").click(function () {
  $(".availability").toggle(100);
  $(".dropdown1 .select2-selection").css("border","1px solid #ACAEB2")
  $('#select2-lang-container').css("color","#ACAEB2")
  $(".dropdown2 .availbtn").css("border","1px solid #0699CD").css("color","#0699CD")
  $(".dropdown3 .select2-selection").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $("#select2-fromCountry-container").css("color","#ACAEB2")
  $(".dropdown4 .select2-selection").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $('#select2-speaks-container').css("color","#ACAEB2")
  $(".dropdown5 .btn").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
});
$(".dropdown1").click(function () {
  $(".availability").hide();
  $(".dropdown1 .select2-selection").css("border","1px solid #0699CD")
  $('#select2-lang-container').css("color","#0699CD")
  $(".dropdown2 .btn").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $(".dropdown3 .select2-selection").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $("#select2-fromCountry-container").css("color","#ACAEB2")
  $(".dropdown4 .select2-selection").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $('#select2-speaks-container').css("color","#ACAEB2")
  $(".dropdown5 .btn").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
 
});
$(".dropdown3").click(function () {
  $(".availability").hide();
  $(".availability").hide();
  $(".dropdown1 .select2-selection").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $('#select2-lang-container').css("color","#ACAEB2")
  $(".dropdown2 .btn").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $(".dropdown3 .select2-selection").css("border","1px solid #0699CD")
  $("#select2-fromCountry-container").css("color","#0699CD")
  $(".dropdown4 .select2-selection").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $('#select2-speaks-container').css("color","#ACAEB2")
  $(".dropdown5 .btn").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
});
$(".dropdown4").click(function () {
  $(".availability").hide();
  $(".dropdown1 .select2-selection").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $('#select2-lang-container').css("color","#ACAEB2")
  $(".dropdown2 .btn").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $(".dropdown4 .select2-selection").css("border","1px solid #0699CD")
  $('#select2-speaks-container').css("color","#0699CD")
  $(".dropdown3 .select2-selection").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
  $("#select2-fromCountry-container").css("color","#ACAEB2")
  $(".dropdown5 .btn").css("border","1px solid #ACAEB2").css("color","#ACAEB2")
});
$(".dropdown5 .btn").click(function () {
  $(".availability").hide();
  $(".dropdown1 .select2-selection").css("border","1px solid #ACAEB2")
  $('#select2-lang-container').css("color","#ACAEB2")
  $(".dropdown2 .btn").css("border","1px solid #ACAEB2")
  $(".dropdown3 .select2-selection").css("border","1px solid #ACAEB2")
  $("#select2-fromCountry-container").css("color","#ACAEB2")
  $(".dropdown4 .select2-selection").css("border","1px solid #ACAEB2")
  $('#select2-speaks-container').css("color","#ACAEB2")
  $(".dropdown5 .btn").css("border","1px solid #0699CD").css("color","#0699CD")
});
$(".navBarSection ").click(function () {
  $(".availability").hide();
});
$(".footer ").click(function () {
  $(".availability").hide();
});


$("#mobFilterBtn").click(function () {
  $(".filter").toggle();
});
$("#mobFilterBtn1").click(function () {
  $(".filter1").toggle();
});

$(".teachers").click(function () {
  $(".availability").hide();
});

var countFilter = 0;
var isSelected1 = false;
var isSelected2 = false;
var isSelected3 = false;
var isSelected4 = false;
$("#early").click(function () {
  if(isSelected1 == false){
    $("#early").css("color", "#0699CD").css("background-color", "#E6F5FA");
  if (countFilter == 0) {
    document.getElementById("availBtn").innerHTML = "Early Morning";
    countFilter++;
  } else if (countFilter >= 2) {
    var addNum = countFilter - 1;
    document.getElementById("availBtn").innerHTML =
      document.getElementById("availBtn").innerHTML + "+" + addNum;
    countFilter++;
  } else {
    if (document.getElementById("availBtn").innerHTML != "Early Morning") {
      document.getElementById("availBtn").innerHTML =
        document.getElementById("availBtn").innerHTML + " - Early Morning";
    }
    countFilter++;
  }
  isSelected1 = true
  }
});

$("#morning").click(function () {
  if(isSelected2 == false){
    $("#morning").css("color", "#0699CD").css("background-color", "#E6F5FA");
  if (countFilter == 0) {
    document.getElementById("availBtn").innerHTML = "Morning";
    countFilter++;
  } else if (countFilter >= 2) {
    var addNum = countFilter - 1;
    document.getElementById("availBtn").innerHTML =
      document.getElementById("availBtn").innerHTML + "+" + addNum;
    countFilter++;
  } else {
    if (document.getElementById("availBtn").innerHTML != "Morning") {
      document.getElementById("availBtn").innerHTML =
        document.getElementById("availBtn").innerHTML + " - Morning";
    }
    countFilter++;
  }
  isSelected2 = true
  }
});

$("#afternoon").click(function () {
  if(isSelected3 == false){
    $("#afternoon").css("color", "#0699CD").css("background-color", "#E6F5FA");
  if (countFilter == 0) {
    document.getElementById("availBtn").innerHTML = "Afternoon";
    countFilter++;
  } else if (countFilter >= 2) {
    var addNum = countFilter - 1;
    document.getElementById("availBtn").innerHTML =
      document.getElementById("availBtn").innerHTML + "+" + addNum;
    countFilter++;
  } else {
    if (document.getElementById("availBtn").innerHTML != "Afternoon") {
      document.getElementById("availBtn").innerHTML =
        document.getElementById("availBtn").innerHTML + " - Afternoon";
    }
    countFilter++;
  }
  isSelected3 = true
  }
});

$("#evening").click(function () {
  if(isSelected4 == false){
    $("#evening").css("color", "#0699CD").css("background-color", "#E6F5FA");
  if (countFilter == 0) {
    document.getElementById("availBtn").innerHTML = "Evening";
    countFilter++;
  } else if (countFilter >= 2) {
    var addNum = countFilter - 1;
    document.getElementById("availBtn").innerHTML =
      document.getElementById("availBtn").innerHTML + "+" + addNum;
      document.getElementById("availBtn").innerHTML = document.getElementById("availBtn").innerHTML.replace(addNum-1,addNum)
    countFilter++;
  } else {
    if (document.getElementById("availBtn").innerHTML != "Evening") {
      document.getElementById("availBtn").innerHTML =
        document.getElementById("availBtn").innerHTML + " - Evening";
    }
    countFilter++;
  }
  isSelected4 = true
  }
  else if(isSelected4==true){
    $("#evening").css("color", "black").css("background-color", "white");
    var original = document.getElementById("availBtn").innerHTML
    var newText = original.replace('Evening',' ')
    var newText = original.replace('- Evening',' ')
    if(countFilter==3){
    var newText = original.replace(addNum,' ')

    }
    document.getElementById("availBtn").innerHTML = newText
    countFilter--
    isSelected4=false
  }
});
