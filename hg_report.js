"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Todd Adcox Jr
   Date:   3-1-19
   
   Filename: hg_report.js
	
*/

// A variable named gameReport that stores the following HTML code.
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By: " + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg' /> <table><tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

// The value of the gameReport variable is being stored in the article element in the HTML
document.getElementsByTagName('article')[0].innerHTML = gameReport;

// A variable named ratingsSum is set equal to zero.
// A variable named ratingscount is set equal to the length of the ratings array.
var ratingsSum = 0;
var ratingsCount = ratings.length;

// A for loop to loop through the contents of the ratings array. Each loop adds the value of current ratings value to the value of the ratingsSum variable. 
for (var i = 0; i <= ratingsCount; i++) {
    ratingsSum += ratings[i];
}

// A variable named ratingsAvg is equal to the value of the ratingsSum variable divided by the value of ratingsCount.
var ratingsAvg = ratingsSum / ratingsCount;

// A variable named ratingReports initial value is set to the text string 
var ratingReport = "<h1>Customer Reviews</h1> <h2>" + ratingsAvg + "out of 5 stars (" + ratingsCount + "reviews)</h2>";

for (var i = 0; i <= 2; i++) {

    //Adds the following HTML code to the value of the ratingReport variable.
    ratingReport += "<div class='review'> <h1>" + ratingTitles[i] + "</h1> <table> <tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td> ";

    // A nested for loop for when the value of the rating goes up it adds another star img.
    for (var j = 1; j <= ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png' />";
    }

    // Commands to add  HTML code to the value of the ratingReport variable where summary is the value from the ratingSummaries array.
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

// The value of the ratingReport variable is being stored in the aside element in the HTML.
document.getElementsByTagName('aside')[0].innerHTML = ratingReport;