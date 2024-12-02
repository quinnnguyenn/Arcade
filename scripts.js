document.addEventListener('DOMContentLoaded', () => {
    // Function Declaration for Game 1
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

            if (confirm(`${name}, would you like to keep playing this game?`)) {
                playGame();
            } else if (confirm(`${name}, would you like to pick another game to play?`)) {
                // Allow the player to choose a new game
                document.querySelectorAll('.game-container').forEach(game => game.style.display = 'none');
            } else {
                alert(`See you later, ${name}!`);
            }
        }

        playGame();
    }

    // Function Expression for Game 2
    const startMagicEightBallGame = function() {
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

            function playGame() {
                while (true) {
                    let userQuestion = prompt(`Hi, ${userName}! What's your question?`);

                    if (userQuestion === null) {
                        alert("See you later!");
                        break;
                    } else {
                        alert(`${getRandomResponse()}`);
                    }

                    if (!confirm(`${userName}, would you like to keep playing this game?`)) {
                        if (confirm(`${userName}, would you like to pick another game to play?`)) {
                            // Allow the player to choose a new game
                            document.querySelectorAll('.game-container').forEach(game => game.style.display = 'none');
                        } else {
                            alert(`See you later, ${userName}!`);
                            break;
                        }
                    }
                }
            }

            playGame();
        }
    };

    // Arrow Function for Game 3 (Placeholder)
    const startGame3 = () => {
        let name = prompt("Hi! What's your name?");
        alert(`${name}, Game 3 content goes here...`);
        if (confirm(`${name}, would you like to keep playing this game?`)) {
            startGame3();
        } else if (confirm(`${name}, would you like to pick another game to play?`)) {
            // Allow the player to choose a new game
            document.querySelectorAll('.game-container').forEach(game => game.style.display = 'none');
        } else {
            alert(`See you later, ${name}!`);
        }
    };

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
        } else if (gameId === 'game3') {
            startGame3();
        }
    }

    window.openGame = openGame;
});