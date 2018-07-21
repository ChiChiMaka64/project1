$(".top-favorites").on("click", "button", function() {
    // get text from button that you just clicked and save it to a variable.
    var searchWord=$(this).text();
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q='+ searchWord +'&api_key=9Pqpg72Hn0V2mHELBrXruk5iAK4OLles&limit=20';
    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        console.log(response);
        for (i=0; i<response.data.length; i++) {
          $("body").append("<img src='" + response.data[i].images.original.url + "' />");
        }
      });
});