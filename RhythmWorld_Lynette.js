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
          xhr.setRequestHeader('Authorization', 'Bearer BQAn_IIP9n6hQ538YJq_ZGwHobMHz5_R-u8wTxvDSch0arPXArSkRAxyVfw3RmPEVJtXYAeK-woKbOcVx3wjxdDATyNN4MLbZjb716msoSj8gvfspqqBM-gOKNUwcYWda4GDK_UtLZZ2JZm9WHbEL1ngiT8r5ps7MjgucndeOOk');
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