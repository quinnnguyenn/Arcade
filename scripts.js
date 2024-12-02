document.addEventListener('DOMContentLoaded', () => {
    function startEvenOddGame() {
        let wins = 0;
        let losses = 0;
        let name;

        function playerName() {
            while (!name) {
                name = prompt("Hi! What's your name?");
                if (!name) {
                    alert('Please enter a name, ex: "Quinn"');
                }
            }
        }

        function playerGuess() {
            let guess;
            while (!guess || (guess.toLowerCase() !== "even" && guess.toLowerCase() !== "odd")) {
                guess = prompt(`Welcome ${name}, even or odd?`, "even");
                if (!guess || (guess.toLowerCase() !== "even" && guess.toLowerCase() !== "odd")) {
                    alert('Please enter "even" or "odd".');
                }
            }
            return guess.toLowerCase();
        }

        function playGame() {
            if (!name) {
                playerName();
            }

            let guess = playerGuess();

            let randomNumber1 = Math.floor(Math.random() * 4) + 1;
            let randomNumber2 = Math.floor(Math.random() * 4) + 1;

            let sum = randomNumber1 + randomNumber2;

            let result = (sum % 2 === 0) ? "even" : "odd";

            let outcome = (guess === result) ? "win" : "lose";

            if (outcome === "win") {
                wins++;
            } else {
                losses++;
            }

            alert(`${name}, you picked ${guess}. The sum is ${result}, you ${outcome}!`);
            alert(`Score: Wins: ${wins} - Losses: ${losses}`);

            if (confirm(`Do you want to play again ${name}?`)) {
                playGame();
            }
        }

        playGame();
    }

    function startMagicEightBallGame() {
        function getUserName() {
            let name;
            while (!name) {
                name = prompt("What is your name?");
                if (name === null) {
                    alert("See you later!");
                    return null;
                } else if (!name.trim()) {
                    alert("Please type your name.");
                    name = null;
                }
            }
            return name;
        }

        let userName = getUserName();

        if (userName !== null) {
            const responses = ["Yes!", "Nope", "Unclear", "Absolutely", "Ask again later", "It's possible", "Impossible"];

            function getRandomResponse() {
                return responses[Math.floor(Math.random() * responses.length)];
            }

            while (true) {
                let userQuestion = prompt(`Hi, ${userName}! What's your question?`);

                if (userQuestion === null) {
                    alert("See you later!");
                    break;
                } else {
                    alert(`${getRandomResponse()}`);
                }
            }
        }
    }

    function openGame(gameId) {
        // Hide all game containers
        const games = document.querySelectorAll('.game-container');
        games.forEach(game => game.style.display = 'none');

        // Show the selected game container
        document.getElementById(gameId).style.display = 'block';

        // Start the selected game
        if (gameId === 'game1') {
            startEvenOddGame();
        } else if (gameId === 'game2') {
            startMagicEightBallGame();
        }
    }

    window.openGame = openGame;
});