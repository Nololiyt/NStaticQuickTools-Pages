import"./baiduStatics.23a8132b.js";import{g as gBase64}from"./vendor.5a9bfe5e.js";function getInput(t){return document.getElementById(t)}function toByteArray(){for(var t=getInput("input1").value,e=gBase64.toUint8Array(t),n="[",u=0;u<e.length;u++)n+=e[u],n+=", ";n=n.substring(0,n.length-2),n+="]",getInput("input2").value=n}function toBase64(){var byteArray=new Uint8Array(eval(getInput("input2").value));getInput("input1").value=gBase64.fromUint8Array(byteArray)}document.getElementById("input1Button").onclick=toByteArray,document.getElementById("input2Button").onclick=toBase64;
