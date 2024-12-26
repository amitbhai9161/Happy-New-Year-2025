
var isNS = (navigator.appName == "Netscape") ? 1 : 0;
if(navigator.appName == "Netscape") document.captureEvents(Event.MOUSEDOWN||Event.MOUSEUP);
function mischandler(){
return false;
}
function mousehandler(e){
var myevent = (isNS) ? e : event;
var eventbutton = (isNS) ? myevent.which : myevent.button;
if((eventbutton==2)||(eventbutton==3)) return false;
}
document.oncontextmenu = mischandler;
document.onmousedown = mousehandler;
document.onmouseup = mousehandler;


var jqs = function(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split("=");
      if (sParameterName[0] === sParam) {
        return sParameterName[1];
      }
    }
};
window.jqs = jqs;
var name = decodeURI(jqs("bl"));
if (typeof jqs("bl") === "undefined") {
name = "";
}
var checkName = function() {
if (name.length !== 0) {
  name = name.replace(/-/g, " ");
  console.log("name is there", name);
  document.querySelector("#manikant").innerHTML = name;
  document.querySelector("#mani").innerHTML = name+" की तरफ से आपको और आपके परिवार को नववर्ष 2025 की हार्दिक शुभकामनायें !!";
  document.querySelector("#hindisahayata-show-name").innerHTML = name;
  document.querySelector("#hindisahayata-fromMessage").innerHTML= ""
} else {

}
};

checkName();

var createGreeting=function(){

// ga('send', {
//   hitType: 'event',
//   eventCategory: 'interaction',
//   eventAction: 'click',
//   eventLabel: 'goButtonClicked'
// });

gtag('event', 'click', {
      'event_category': 'interaction',
      'event_label': 'goButtonClicked',
});

sname=document.querySelector("#nameTextBox").value;
sname=sname.replace(/@/g,"-")
sname=sname.replace(/%40/g,"-")
sname=sname.replace(/\./g,"-")
if(sname.trim()!=""){
  document.querySelector("#formBox").style.display = "none";
  document.querySelector(".footerbtn").style.display = "block";
  document.querySelector("#manikant").innerHTML = sname;
  document.querySelector("#mani").innerHTML = sname+" की तरफ से आपको और आपके परिवार को नववर्ष 2025 की हार्दिक शुभकामनायें !!";
  document.querySelector("#hindisahayata-show-name").innerHTML = sname;
  document.querySelector("#hindisahayata-fromMessage").innerHTML= ""
  window.scrollTo(0,0);
}else {
  alert ("कृपया पहले अपना नाम टाइप करें");
  document.getElementById("nameTextBox").focus();
}
}

var shareActionWA = function() {
gtag('event', 'click', {
      'event_category': 'interaction',
      'event_label': 'shareOnWhatsAppClicked',
});

var shareString = "";
var whatsappHref;
shareString += ""+sname+"";


shareString +=" ने आपको एक 🤩 मजेदार संदेश भेजा है, इस खास संदेश ✉ को देखने के लिए नीचे दिये गए ब्लू लाइन को टच करके देखो%0A👇👇"
shareString +=(window.location.href.split("?")[0] + "?bl=" + sname).replace("#", "").replace(/ /g, "-");


whatsappHref = "whatsapp://send?text=" + shareString;
window.location.href = whatsappHref;

};
var countDownDate=new Date("01 January, 2025 00:00:00").getTime(),x=setInterval(function(){var e=(new Date).getTime(),o=countDownDate-e,t=Math.floor(o/864e5),n=Math.floor(o%864e5/36e5),a=Math.floor(o%36e5/6e4),l=Math.floor(o%6e4/1e3);document.getElementById("hindisahayata").innerHTML=t+"<font color='black'> दिन,</font> "+n+"<font color='black'> घंटे,</font> "+a+"<font color='black'>  मिनट,<br></font> "+l+"<font color='black'> सेकंड <spna style='color:red'>पहले</span> </font>",o<0&&(clearInterval(x),document.getElementById("hindisahayata").innerHTML="")},1e3);
document.write(res);



var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 1 seconds
}


function carousel(){var e,l=document.getElementsByClassName("mySlides");for(e=0;e<l.length;e++)l[e].style.display="";++myIndex>l.length&&(myIndex=1),l[myIndex-1].style.display="block",setTimeout(carousel,2e3)}carousel();


  function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }

