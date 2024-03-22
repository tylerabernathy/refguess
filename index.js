function guess() {
    var guess = input.value.toLowerCase();
    const date = new Date();
    const players = Object.keys(data)
    const player = players[date.getDate()]
    input.value = "";
    if (player.toLowerCase() == guess) {
        document.getElementById("result").innerHTML = "Correct!\nToday's player is " + player + ".";
    }
    else {
        document.getElementById("result").innerHTML = "Incorrect. Try again.";
    }
}

fetch("./data.json")
    .then(Response => Response.json())
    .then(data => {
        const date = new Date();
        const players = Object.keys(data)
        const player = players[date.getDate()]
        document.getElementById("chartDiv").innerHTML = data[player];
    });

var input = document.getElementById("guessBox");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("guessButton").click();
    }
});