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
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By: " + itemManufacturer + "</h2> <img src='hg_ID.png' alt='id' id='gameImg' /> <table><tr><th>Product ID</th><td>" + itemID +"</td></tr> <tr><th>List Price</th><td>" + itemPrice +"</td></tr> <tr><th>Platform</th><td>" + itemPlatform +"</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB +"</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;


// 6. Display the value of the gameReport variable in the inner HTML of the first (and only) article element in the document. (Hint: Use the getElementsByTagName() method, referencing the first item in the array of article elements.)
var gameReport= document.getElementsByTagName("article");
  
// 7. Next, you write the information from the customer ratings. Start by calculating the average customer rating of the game. Declare a variable named ratingssum setting its initial value to 0.
var ratingsSum = 0;

// 8. Declare a variable named ratingscount equal to the length of the ratings array.
var ratingsCount = ratings;

// 9. Create a for loop to loop through the contents of the ratings array. Each time through the loop, add the value of current ratings value to the value of the ratingsSum variable. 
for ()

// 10. After the for loop, declare the ratingsAvg variable, setting its value equal to the value of the ratingsSum variable divided by the value of ratingsCount.
var ratingsAvg = ratingsSum % ratingsCount;

// 11. Declare a variable named ratingReport. Set its initial value to the text string 
/* <h1>Customer Reviews</h1> <h2> average out of 5 stars (count reviews)</h2> 
where average is the value of the ratingsAvg variable and count is the value of ratingsCount. */
var ratingReport = "<h1>Customer Reviews</h1> <h2>" + ratingsAvg + "out of 5 stars (" + ratingdsCount + "reviews)</h2>";

// 12. Next, you display the content of the first three customer reviews. Create a for loop in which the counter goes from 0 to 2 in steps of 1. Within the for loop, insert the commands described in Steps a through c:
for (var i = 0; i <= 2; i++) {

   // a. Add the following HTML code to the value of the ratingReport variable
// div class=”review”> <h1>title</h1> <table> <tr><th>By</th><td>author</td></tr> <tr><th>Review Date</th><td>date</td></tr> <tr><th>Rating</th><td>
// where title is the value of the ratingTitles array item for current review, author is the value of the current ratingAuthors array item, and date is the value of the current ratingDates item.
ratingReport += "div class=”review”> <h1>" + ratingTitles + "</h1> <table> <tr><th>By</th><td>" + ratingAuthors + "</td></tr> <tr><th>Review" + ratingsDate + "</th><td>date</td></tr> <tr><th>Rating</th><td>";

// b. Each customer rates the game on a scale of 1 to 5 stars. Sean would like to have the stars displayed graphically. Add a nested for loop where the counter goes from 1 up to the value of the current customer rating of the game in increments of one. Each time through the nested for loop, add the following HTML code to the value of the ratingReport variable:
// <img src=”hg_star.png” />
   for (var i = 0; i <=1; i++) {
ratingReport += "<img src=”hg_star.png” />";
   }

   // c. Directly after the nested for loop, but still within the outer for loop, insert commands to add the following HTML code to the value of the ratingReport variable
// </td></tr></table> summary </div>
// where summary is the value from the ratingSummaries array for the current customer review.
ratingReport += "</td></tr></table>" + ratingSummaries + "</div>";
}

// 13. Write the value of the ratingReport variable to the inner HTML of the first and only aside
// element in the document. (Hint: As you did with the article element in Step 6, use the getElementsByTagName() method and reference the first item from the array of aside elements.)
var ratingReport= document.getElementsByTagName("aside");