var topics = ["Koala Bear", "Dinosaur", "Giraffe", "Cat", "Dog", "Chicken"];

$(document.body).on('click', '.topics', displayAnimalGif)

function displayAnimalGif(){
    var animal = $(this).attr("value");
    console.log(animal);
    //Storing our giphy API URL for a random animal giph
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=1pDt2txaHIeBAvZSB9aasrgBlKM3Of6A&limit=10&offset=0&rating=G&lang=en";
    
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
            //Create image tag to hold GIF?
            var gifImage = $("<img>").attr("src", results[i].images.original_still.url);
          
            //Append gifImage to the newDiv
            newDiv.append(gifImage);
           
            $("#gifsGoHere").prepend(newDiv);
        }
    });
}

function movingGif (){
    var movingStuff = $(this).attr("src");
    movingStuff = movingStuff.replace("original_s.gif", "original.gif");
    $(this).attr("src", movingStuff);
}

function renderButtons (){
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {

      var a = $("<button>");
      // Adding a class of gif-btn to our button
      a.addClass("topics");
      // Adding a data-attribute
      a.attr("value", topics[i]);
      // Providing the text for button
      a.text(topics[i]);
      // Adding the button to the buttons-view div
      $("#buttons-view").append(a);
    }
}

$(document).ready(function () {
    renderButtons();
    //Call on my gifs to move (movingGif)
    
});