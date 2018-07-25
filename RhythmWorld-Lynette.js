$("button").on("click", function () {
  event.preventDefault();
  const searchArtist = $('#Artist').val().trim();
  const queryNewsURL = 'https://newsapi.org/v2/everything?q=' + searchArtist + '&sources=entertainment-weekly&apiKey=a76ac01acb8543b79f57ccc770ac0200&limit=10';
 
 if (searchArtist) {
    //https://newsapi.org/v2/everything?q=lady%20gaga&sources=entertainment-weekly&apiKey=a76ac01acb8543b79f57ccc770ac0200&limit=10
    console.log(queryNewsURL);
  }
  // if (ArtistPlaylist) {
  // const ArtistPlaylist = $('#Playlist').val().trim();
  //   const queryPlaylistURL = 'https://' + ArtistPlaylist + '&apiKey=';
  //console.log(queryPlaylistURL);
  // }
  // if (ArtistConcert) {
  //const ArtistConcert = $('#Concert').val().trim();
  //   const queryConcertURL = 'http://app.ticketmaster.com/discovery/v1/events.json?keyword=' + ArtistConcert + '&apikey=vGtLD9WiAv7O9KtXD4raafDHNXRGqZdm&callback=Function';
  //   console.log(queryConcertURL);
  // }
  
  $.ajax({
    url: queryNewsURL, 
    // queryPlaylistURL, queryConcertURL,
    type: "GET",
    success: function (response) {
      console.log(response);
      const articles = response.articles;
      //const concerts = response.concerts;
      //const playlists = response.playlists;
      articles.forEach(function (article) {
        const a = $('<a>');
        a.text(article.title),
        a.attr("href", article.url)
        a.css("display", "block")
        $('#news-search-results').append(a);
      });
      // concerts.forEach(function (concert) {
      //   const li = $('<li>');
      //   li.text(concert.date)
      //   $('#concerts-search-results').append(li);
      // });
      // playlists.forEach(function (playlist) {
      //   const li = $('<li>');
      //   li.text(playlist.searchArtist)
      //   $('#playlists-search-results').append(li)
      // });
    }
  });
});