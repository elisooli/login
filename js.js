'use strict'
var bntSingnin = document.querySelector("#signin");
var bntSingnup = document.querySelector("#signup");

var body = document.querySelector("body");

bntSingnin.addEventListener("click", function (){
    body.className = "sign-in-js";
})

bntSingnup.addEventListener("click", function (){
    body.className = "sign-up-js";
})





