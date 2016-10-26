// sanity check
console.log("app.js linked.");


// window.onload = function(){
//   // Change this value to however many seconds you want to delay the text by.
//   var theDelay = 13;
//   var timer = setTimeout("showText()",theDelay*1000)
// }
// function showText(){
//   document.getElementById("delayedTextH1").style.visibility = "visible";
// }

function showText(id,delay){
var elem=document.getElementById(id);
setTimeout(function(){elem.style.visibility='visible';},delay*1000)
}
window.onload=function(){
showText('delayedTextH1',7);
showText('delayedTextP',9);
showText('delayedTextResume',11);
showText('delayedTextLin',12);
showText('delayedTextContact',13);
}
