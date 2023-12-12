/*
Author: Damien Aldridge
File Name: script.js
Date: 12/12/2023
*/

//Global variables
var hbu = document.getElementById("hbu");
var quiz = document.getElementById("gameform");

//Hamburger menu function
function hamburger() {
  var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("menu-icon");
    if (navlinks.style.display === "block") {
      navlinks.style.display = "none";
    } else {
      navlinks.style.display = "block";
    }
}

//Function to display form
function gamequiz() {
  hbu.style.display = "none";
  quiz.style.display = "block";
}
