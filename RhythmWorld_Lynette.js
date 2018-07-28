$("button").on("click", function() {
    event.preventDefault();
    const ArtistPlaylist = $('#Playlist').val().trim();
    const queryPlaylistURL = 'https://api.spotify.com/v1/search?q=' + ArtistPlaylist + '&type=playlist';

    if (ArtistPlaylist) {
      console.log(queryPlaylistURL);
      }


    $.ajax({
        url: queryPlaylistURL,
        type: "GET",
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer BQChw-UNSRY69iB95IQZrj3FR1Erp5QfgJGOsvb8LfAUPe2W7pN-oDThPNGCHWBHyMv_F0hr5s_qu66ewBZwnJGUXT9Cjym1O60lUFJH2zOVOxfMcLWdo8rRWCoxax-8cYSmz3uq9lvtI83WLH6-vTY5pYXsYq5TxsXauHGe46c');
        },
        success: function (response) {
          console.log(response);
          const playlists = response.playlists.items;
          $('#playlists-search-results').empty();
          playlists.forEach(function (playlist) {
             const a = $('<a>');
             a.text(playlist.name),
             a.css("display", "block")
             $('#playlists-search-results').append(a);
          });  // end of for each loop
        } // end of success function
    });// end of ajax
  });