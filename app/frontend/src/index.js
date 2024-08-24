const players = [];

const form = document.getElementById("subscribePlayers");
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const player = {
        name: document.getElementById('playerName').value,
        scores: 0,
        guess: 0
    };

    players.push(player);

    console.log(players);
});