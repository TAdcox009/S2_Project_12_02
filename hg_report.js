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

    //Adds the following HTML code to the value of the ratingReport variable
    // div class=”review”> <h1>title</h1> <table> <tr><th>By</th><td>author</td></tr> <tr><th>Review Date</th><td>date</td></tr> <tr><th>Rating</th><td>
    // where title is the value of the ratingTitles array item for current review, author is the value of the current ratingAuthors array item, and date is the value of the current ratingDates item.
    ratingReport += "<div class='review'> <h1>" + ratingTitles[i] + "</h1> <table> <tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td> ";

    // b. Each customer rates the game on a scale of 1 to 5 stars. Sean would like to have the stars displayed graphically. Add a nested for loop where the counter goes from 1 up to the value of the current customer rating of the game in increments of one. Each time through the nested for loop, add the following HTML code to the value of the ratingReport variable:
    // <img src=”hg_star.png” />
    for (var j = 1; j <= ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png' />";
    }

    // c. Directly after the nested for loop, but still within the outer for loop, insert commands to add the following HTML code to the value of the ratingReport variable
    // </td></tr></table> summary </div>
    // where summary is the value from the ratingSummaries array for the current customer review.
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

// 13. Write the value of the ratingReport variable to the inner HTML of the first and only aside
// element in the document. (Hint: As you did with the article element in Step 6, use the getElementsByTagName() method and reference the first item from the array of aside elements.)
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;