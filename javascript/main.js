$(document).ready(function () {
    // initial array of famouse singers
    var videos = ["tylore swift", "areana grand", "micheal jackson", "jennifer lopez", "Enrique Iglesias", "Justin Bieber", "Adele", "Selena Gomez", "Lady Gaga"]



    // Creating an AJAX call for the specific movie button being clicked

    //function for displaying the video data

    function renderButtons() {


        // Delleting the videos prior to adding new videos
        // $("#videos-view").empty();
        //looping through the array of videos
        for (var i = 0; i < videos.length; i++) {


            //dynamically genrate buttons for each videos in the array
            var a = $("<button>");
            //Adding a class
            a.addClass('videos');

            //add adata-attribute
            a.attr('data-name', videos[i]);
            a.text(videos[i]);

            //adding the button the html
            // $("#videos-view").append(a);
        }
    }
    // this function handle events where one button is clicked
    $("#search").on("click", function (event) {
        event.preventDefault();

        //the following line will get the text from the search area
        var video = $("#search-btn").val().trim();

        var queryURL = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBjPMb3XeRs8i1xNhlJ77hMIPVDIqH-Hww&q=" + video + "&part=snippet";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (var i = 0; i < response.items.length; i++) {
                var video = $("<iframe>");
                video.src = "https://www.youtube.com/embed/" + response.items[i].id.videoId;
                body.append(response);
            }
        }); // end of ajax

        //the videos from the search area will added to our array
        videos.push();

        //calling the renderbutton function 
        renderButtons();
    });
    // Calling the renderButtons function at least once to display the initial list of movies
    //renderButtons();

});

