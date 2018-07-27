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
          xhr.setRequestHeader('Authorization', 'Bearer BQA2ffF9uClMOpeWME3jhiRMbszknk-SAnkt-8d5QRavlt7J7dlmHo8H-ZtB65mKu1E4WKAAC8BISOejp9a1gfAeGS2LFsS3UHdiGVM3jvMLQJU0K9KCbxKYg6qQFSS0LmknQxqWo4W7PzJxxzzEzySPW-0j0e5lUXy2rE00238');
        },
        success: function (response) {
          console.log(response);
          const playlists = response.playlists.items;

          playlists.forEach(function (playlist) {
             const a = $('<a>');
             a.text(playlist.name),
             a.css("display", "block")
             $('#playlists-search-results').append(a);
          });  // end of for each loop
        } // end of success function
    });// end of ajax
  });