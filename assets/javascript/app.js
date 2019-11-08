var topics = ["Koala Bear", "Dinosaur", "Giraffe"];

function displayAnimalGif(){
    var animal = $(this).attr("data-name");
    console.log(animal);
    //Storing our giphy API URL for a random animal giph
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=1pDt2txaHIeBAvZSB9aasrgBlKM3Of6A&q=&limit=10&offset=0&rating=G&lang=en";
    
    console.log ('queryURL', queryURL);
    
    // Perfoming an AJAX GET request to our queryURL for the specific animal GIF we want
    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);
        var results = response.data;
        //Loop GIPHY results
        for (var i = 0; i < results.length; i++) {
            //Creat newDiv to store the GIF
            var newDiv = $("<div>");
            //Create image tag for GIF
            var gifImage = $("<img>");
          
            gifDiv.append(gifImage);
            $("#gifsGoHere").prepend(newDiv);
        }
    });
}


   
