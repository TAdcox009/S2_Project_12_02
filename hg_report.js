"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Todd Adcox Jr
   Date:   3-1-19
   
   Filename: hg_report.js
	
*/

var gameReport = "<h1>" + itemTitle + "</h1> <h2>By: " + itemManufacturer + "</h2> <img src='hg_" + +".png' alt='" + +"' id=”gameImg” /> <table><tr><th>Product ID</th><td>" + +"</td></tr> <tr><th>List Price</th><td>" + +"</td></tr> <tr><th>Platform</th><td>" + +"</td></tr> <tr><th>ESRB Rating</th><td>" + +"</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

// 5. Go to the hg_report.js file in your editor. First, you write information about the game that will be displayed in the web page. Declare a variable named gameReport. Within the gameReport variable, store the following HTML code

// summary
// where title, manufacturer, id, price, platform, esrb, condition, release and summary use the values from corresponding variables in the hg_product.js file.