// returns 10
$("#search-btn").on("click", function () {

  var searchTerm = $("#search-term").val();
  var numRecords = $("#number-records").val();
  var startYear = $("#start-year").val();
  var endYear = $("#end-year").val();

  startYear += "0101";
  endYear += "1231"

  // Here we construct our URL
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_date="+ startYear + "&end_date="+ endYear + "&apikey=1528a80c30944006b99254d0a4dbde38";

  // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
  // and display it in the div with an id of movie-view

  // YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE

  // =================================================================

  // CODE GOES HERE
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (obj) {
    console.log(obj)
    for(var i = 0; i <= numRecords; i++){
      if(!(obj.response.docs[i].headline.print_headline)){
        $("#topArticles").append("Title Unknown<br>");
      }
      else {
        $("#topArticles").append(obj.response.docs[i].headline.print_headline + "<br>");
      }
      if(!(obj.response.docs[i].byline.original)){
        $("#topArticles").append("Author Unknown<br><br>");
      }
      else {
        $("#topArticles").append(obj.response.docs[i].byline.original + "<br><br>");
      }
    }
  })
})



