$(".example").on("click", function() {
    event.preventDefault();
    // get text from button that you just clicked and save it to a variable.
    var searchArtist=$(this).text();
    var queryURL = 'https://' + searchArtist + '?src=&api_Key=&limit=20';
    var ArtistPlaylist=$(this).text();
    var queryURL = 'https://' + ArtistPlaylist + '?src=&api_Key=&limit=20';
    var ArtistConcert=$(this).text();
    var queryURL = 'https://' + ArtistConcert + '?src=&api_Key=&limit=20';
    
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        console.log(response);
        for (i=0; i<response.data.length; i++) {
          $("body").append(response.data[i].images.original.url);
        }
      });
});