var topics = ["Koala Bear", "Dinosaur", "Giraffe"];

function displayAnimalGif(){
    var animals = $(this).attr("data-name");
    //Storing our giphy API URL for a random animal giph
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=1pDt2txaHIeBAvZSB9aasrgBlKM3Of6A&tag=&rating=G";
    // Perfoming an AJAX GET request to our queryURL for the specific animal GIF we want
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response){
        console.log(response);
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var newDiv = $("<div>");
            var gifBox = $("#gif-box");
            var text
        }
    });
}
   
