document.addEventListener("DOMContentLoaded", function() {
    // Initial button to start the game
    document.getElementById("yesButton").addEventListener("click", function() {
        document.getElementById("chatbox").innerHTML = "<p>Great! Press the Start Game button to begin.</p>";
        document.getElementById("buttons").style.display = "none";
        document.getElementById("gameSection").style.display = "block";
    });

    // "No" button to exit the game
    document.getElementById("noButton").addEventListener("click", function() {
        document.getElementById("chatbox").innerHTML = "<p>Okay, As you wish! Have a great day!</p>";
        document.getElementById("buttons").style.display = "none";
    });

    // Start game button
    document.getElementById("startGameButton").addEventListener("click", function() {
        document.getElementById("chatbox").innerHTML = "<p>Think about a girl name from India.</p>";
        document.getElementById("gameSection").style.display = "none";
        document.getElementById("nextStep").style.display = "block";
    });

    // First OK button
    document.getElementById("nextButton").addEventListener("click", firstStep);

    // First step function
    function firstStep() {
        document.getElementById("chatbox").innerHTML = "<p>Think about a name of a country from the last letter of the girl's name.</p>";
        // Update button to second step
        document.getElementById("nextButton").removeEventListener("click", firstStep); // Remove current event listener
        document.getElementById("nextButton").addEventListener("click", secondStep);   // Add next step
    }

    // Second step function
    function secondStep() {
        document.getElementById("chatbox").innerHTML = "<p>Think about a name of a fruit from the last letter of the country's name.</p>";
        // Update button to third step
        document.getElementById("nextButton").removeEventListener("click", secondStep); // Remove current event listener
        document.getElementById("nextButton").addEventListener("click", thirdStep);     // Add next step
    }

    // Third step function
    function thirdStep() {
        document.getElementById("chatbox").innerHTML = "<p>Think about a name of an animal from the last letter of the fruit's name you thought before.</p>";
        // Update button to final step
        document.getElementById("nextButton").removeEventListener("click", thirdStep); // Remove current event listener
        document.getElementById("nextButton").addEventListener("click", finalStep);    // Add final step
    }

    // Final step function
    function finalStep() {
        document.getElementById("chatbox").innerHTML = "<p>Now I am going to tell the name of the animal you thought. Are you ready?</p>";
        document.getElementById("nextStep").style.display = "none";
        document.getElementById("finalStep").style.display = "block"; // Show DONE button
    }

    // DONE button functionality
    document.getElementById("doneButton").addEventListener("click", function() {
        document.getElementById("chatbox").innerHTML = "<p>The name of the animal is ...</p>";
        document.getElementById("finalStep").style.display = "none";
        document.getElementById("tellButtonSection").style.display = "block";
    });

    // Tell button functionality
    document.getElementById("tellButton").addEventListener("click", function() {
        document.getElementById("chatbox").innerHTML = "<p>Elephant</p>";
        document.getElementById("tellButtonSection").style.display = "none";
        setTimeout(function() {
            document.getElementById("chatbox").innerHTML += "<p>Am I correct?</p>";
            document.getElementById("buttons").style.display = "block";
            document.getElementById("yesButton").innerText = "Yes";
            document.getElementById("noButton").innerText = "No";
            document.getElementById("yesButton").onclick = function() {
                document.getElementById("chatbox").innerHTML = "<p>Yohooooo! Now give me some rating out of 5.</p>";
                document.getElementById("buttons").style.display = "none";
                document.getElementById("ratingSection").style.display = "block";
            };
            document.getElementById("noButton").onclick = function() {
                document.getElementById("chatbox").innerHTML = "<p>Oh ho! Sorry, I couldn't guess the name. I will do more practice.</p>";
                document.getElementById("buttons").style.display = "none";
            };
        }, 1000);
    });

    // Rating functionality
    document.getElementById("submitRatingButton").addEventListener("click", function() {
        let rating = document.getElementById("ratingInput").value;
        if (rating == 0) {
            document.getElementById("chatbox").innerHTML = "<p>Hey, I deserve more! By the way, thank you for participating.</p>";
        } else if (rating >= 1 && rating <= 3) {
            document.getElementById("chatbox").innerHTML = "<p>You are Kangoosh! By the way, thank you for participating.</p>";
        } else if (rating >= 4 && rating <= 5) {
            document.getElementById("chatbox").innerHTML = "<p>Yohooooo! Thank you for participating.</p>";
        }
        document.getElementById("ratingSection").style.display = "none";
    });
});
