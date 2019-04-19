"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Alex Somoza
   Date: 4-18-19  
   
   Filename: mpl_links.js

*/
//This event listener will run an anonymous function that will change the href of the document, taking you to a new website.
window.addEventListener("load", function () {
    var allSelect = document.forms.govLinks;
    for (var i = 0; i < allSelect.length; i++) {
        allSelect.onchange = function (e) {
            document.location.href = e.target.value;
        };
    };
});