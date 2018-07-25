// // After the API loads, call a function to enable the search box.
// function handleAPILoaded() {
//     $('#search-button').attr('disabled', false);
//   }
  
//   // Search for a specified string.
//   function search() {
//     var q = $('#query').val();
//     var request = gapi.client.youtube.search.list({
//       q: q,
//       part: 'snippet'
//     });
  
//     request.execute(function(response) {
//       var str = JSON.stringify(response.result);
//       $('#search-container').html('<pre>' + str + '</pre>');
//     });
//   } 

//   var youtubeApiKey = "AIzaSyDWSrN0-VbmiU61JjCrUcF2tFgwM_8NVdM"
//     var queryURL = "https://www.googleapis.com/youtube/v3/search"

//     var options = {
//         part: "snippet",
//         key: youtubeApiKey,
//         type: "video",
//         q: encodeURIComponent($("#RDP_search").val()).replace(/%20/g, "+"),
//         maxResults: 5,
//         order: "viewCount",
//         relevanceLanguage: "en",
//         regionCode: "US",
//         publishedAfter: "2016-01-01T00:00:00Z"
//     }

// $(document).ready(function () {
//     $('#search-term').submit(function (event) {
//         event.preventDefault();
//         var searchTerm = $('#query').val();
//         getRequest(searchTerm);
//     });
// });

// function getRequest(searchTerm) {
//     url = 'https://www.googleapis.com/youtube/v3/search';
//     var params = {
//         part: 'snippet',
//         key: 'AIzaSyDWSrN0-VbmiU61JjCrUcF2tFgwM_8NVdM',
//         q: searchTerm
//     };
  
//     $.AJAX(url, params, function (searchTerm) {
//         showResults(searchTerm);
//     });
// }

// function showResults(results) {
//     var html = "";
//     var entries = results.items;
    
//     $.each(entries, function (index, value) {
//         var title = value.snippet.title;
//         var thumbnail = value.snippet.thumbnails.default.url;
//         html += '<p>' + title + '</p>';
//         html += '<img src="' + thumbnail + '">';
//     }); 
    
//     $('#search-results').html(html);
// }

// $(document).ready(function() {
//     $("#pageTokenNext").on( "click", function( event ) {
//         $("#pageToken").val($("#pageTokenNext").val());
//         youtubeApiCall();
//     });
//     $("#pageTokenPrev").on( "click", function( event ) {
//         $("#pageToken").val($("#pageTokenPrev").val());
//         youtubeApiCall();
//     });
//     $("#hyv-searchBtn").on( "click", function( event ) {
//         youtubeApiCall();
//         return false;
//     });
//     jQuery( "#hyv-search" ).autocomplete({
//         source: function( request, response ) {
//             //console.log(request.term);
//             var sqValue = [];
//             jQuery.ajax({
//                 type: "POST",
//                 url: "http://suggestqueries.google.com/complete/search?hl=en&ds=yt&client=youtube&hjson=t&cp=1",
//                 dataType: 'jsonp',
//                 data: jQuery.extend({
//                 q: request.term
//                 }, { }),
//                 success: function(data){
//                     console.log(data[1]);
//                     obj = data[1];
//                     jQuery.each( obj, function( key, value ) {
//                         sqValue.push(value[0]);
//                     });
//                     response( sqValue);
//                 }
//             });
//         },
//         select: function( event, ui ) {
//         setTimeout( function () { 
//         youtubeApiCall();
//         }, 300);
//         }
//     }); 
// });
// Below JavaScript function will pull the YouTube videos from YouTube Search V3 API

// function youtubeApiCall(){
// $.ajax({
//     cache: false,
//     data: $.extend({
//         key: 'AIzaSyDWSrN0-VbmiU61JjCrUcF2tFgwM_8NVdM',
//         q: $('#hyv-search').val(),
//         part: 'snippet'
//     }, {maxResults:20,pageToken:$("#pageToken").val()}),
//     dataType: 'json',
//     type: 'GET',
//     timeout: 5000,
//     url: 'https://www.googleapis.com/youtube/v3/search'
// })
// .done(function(data) {
//    $('.btn-group').show();
//     if (typeof data.prevPageToken === "undefined") {
//         $("#pageTokenPrev").hide();}else{$("#pageTokenPrev").show();
//     }
//     if (typeof data.nextPageToken === "undefined") {
//         $("#pageTokenNext").hide();}else{$("#pageTokenNext").show();
//     }
//     var items = data.items, videoList = "";
//     $("#pageTokenNext").val(data.nextPageToken);
//     $("#pageTokenPrev").val(data.prevPageToken);
//     $.each(items, function(index,e) {
//         videoList = videoList + '<li class="hyv-video-list-item"><div class="hyv-content-wrapper"><a href="" class="hyv-content-link" title="'+e.snippet.title+'"><span class="title">'+e.snippet.title+'</span><span class="stat attribution">by <span>'+e.snippet.channelTitle+'</span></span></a></div><div class="hyv-thumb-wrapper"><a href="" class="hyv-thumb-link"><span class="hyv-simple-thumb-wrap"><img alt="'+e.snippet.title+'" src="'+e.snippet.thumbnails.default.url+'" width="120" height="90"></span></a></div></li>';
//     });
//     $("#hyv-watch-related").html(videoList);
//     // JSON Responce to display for user
//     new PrettyJSON.view.Node({
//         el:$(".hyv-watch-sidebar-body"), 
//         data:data
//     });
// });
// }

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
  }
  
  // Search for a specified string.
  function search() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet'
    });
  
    request.execute(function(response) {
      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');
    });
  }