function guess() {
    var guess = input.value.toLowerCase();
    input.value = "";
    if (player.toLowerCase() == guess) {
        document.getElementById("result").innerHTML = "Correct!\nThe player is " + player + ". Refresh to play again.";
    }
    else {
        document.getElementById("result").innerHTML = "Incorrect. Try again.";
    }
}

var player = ""
fetch("./data.json")
    .then(Response => Response.json())
    .then(data => {
        const players = Object.keys(data)
        player = players[Math.floor(Math.random() * players.length)]
        document.getElementById("chartDiv").innerHTML = data[player];
    });

var input = document.getElementById("guessBox");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("guessButton").click();
    }
});