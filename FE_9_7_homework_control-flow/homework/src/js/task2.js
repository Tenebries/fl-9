let isPlay = confirm(`Do you want to play a game?`);

if (isPlay === false) {
    alert(`You did not become a millionaire, but can.`);
} else {
    let isAgain = true;

    while (isAgain) {
        const NUMBER_ONE = 1;
        let isContinue = true;
        let min = 0;
        let max = 5;
        let prize = 0;
        let prizes = [];
        prizes[0] = 10;
        prizes[NUMBER_ONE] = 5;
        prizes[2] = 2;

        while (isContinue) {
            let randomNumber = Math.floor(Math.random() * (+max - +min)) + +min;

            alert(randomNumber);

            let attempts = 3;
            for (let i = 0; i < 3; i++) {
                let userNumber = parseInt(prompt('Enter a number from 0 to ' + max + '\n' +
                    'Attempts left: ' + attempts + '\n' +
                    'Total prize: ' + prize + '$\n' +
                    'Possible prize on current attempt: ' + prizes[i] + '$'));

                attempts--;
                if (i === 0 && userNumber === randomNumber) {
                    isContinue = confirm('Congratulation! Your prize is: ' + prizes[0] + '$. Do you want to continue?');
                    prize += prizes[0];

                    if (isContinue === false) {
                        attempts = 0;
                        alert('Thank you for a game. Your prize is: ' + prize + '$');
                        isAgain = confirm('You want play again?');
                    }
                    break;
                } else if (i === NUMBER_ONE && userNumber === randomNumber) {
                    isContinue = confirm('Congratulation! Your prize is: '
                        + prizes[NUMBER_ONE] + '$. Do you want to continue?');
                    prize += prizes[NUMBER_ONE];
                    if (isContinue === false) {
                        attempts = 0;
                        alert('Thank you for a game. Your prize is: ' + prize + '$');
                        isAgain = confirm('You want play again?');
                    }
                    break;
                } else if (i === 2 && userNumber === randomNumber) {
                    isContinue = confirm('Congratulation! Your prize is: ' + prizes[2] + '$. Do you want to continue?');
                    prize += prizes[2];
                    if (isContinue === false) {
                        attempts = 0;
                        alert('Thank you for a game. Your prize is: ' + prize + '$');
                        isAgain = confirm('You want play again?');
                    }
                    break;
                } else if (i === 2) {
                    alert(`Thank you for a game. Your prize is: ${prize}$`);
                    isContinue = false;
                    isAgain = confirm(`You want play again?`);
                }
            }

            max = max * 2;
            prizes[0] = prizes[0] * 3;
            prizes[NUMBER_ONE] = prizes[NUMBER_ONE] * 3;
            prizes[2] = prizes[2] * 3;
        }
    }
}