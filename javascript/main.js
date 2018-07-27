function YouTubeSearch() {
    var search = $('#search-input').val()
    var queryURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDWSrN0-VbmiU61JjCrUcF2tFgwM_8NVdM&q=" + search + "&part=snippet&maxResults=12";
    
    // Creating an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        $("#search-results-block").empty()
        // for loop starts here function to run through each item returned from YouTube results
        response.items.forEach(function (item) {
            console.log(response);
            // created a variable for iframe details and appending to html
            var iframe = $('<iframe width="260" height="160" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>');
            iframe.attr("src", "https://www.youtube.com/embed/" + item.id.videoId);
            // var container = $('<div class="embed-container">');
            // container.append(iframe);
            $("#search-results-block").append(iframe);
            console.log(iframe)
        }); // for each
    }); // end of ajax

}

