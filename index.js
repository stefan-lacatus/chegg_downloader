//Main logic: gets all the good stuff from the page, and advances to the next
function ripPage() {
    //Get next Chapter/Problem text
    var nextProblem = $('#solution-player-sdk .arrow.arrow-right');

    //Get all html for the problem
    var problem = $('#solution-player-sdk .problem-content');
    var steps = $('#solution-player-sdk .solution.TBS_SOLUTION');

    $(newDoc.body).append('<br><u><h1 style="font-weight: bold">' + $('#solution-player-sdk h3.title').text() + '</h1></u><br>');
    $(newDoc.body).append('<br><u><h2> Problem </h2></u><br>' + problem.html());
    $(newDoc.body).append('<br><u><h2> Solution </h2></u><br>' + steps.html());

    if (nextProblem.length > 0) {
        //Its probably gonna have more than 1 problem in the book
        nextProblem.click();
        return 1;
    } else {
        return 0;
    }
}

/*
 *Run these lines first
 */

//New doc to put this info in
var impl = document.implementation;
var newDoc = impl.createHTMLDocument("Chegg output");

var result = 1;

function repeatRipPage() {
    if(ripPage() == 1) {
        setTimeout(repeatRipPage, 2000);
    }
}

repeatRipPage()

//Write new document to screen
newDoc.body.style.margin = "10px 10px 10px 10px";
