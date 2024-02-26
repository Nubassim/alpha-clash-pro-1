function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player pressed' , playerPressed);

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('You get a point');

        const currentScoreElemnt = document.getElementById('current-score');
        const currentScoreText = currentScoreElemnt.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);

        const newScore = currentScore + 1;
        currentScoreElemnt.innerText = newScore;

        console.log('You have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You missed, you lost a life');

        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;

        if(newLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyboardButtonPress)

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('Your Random Alphabet', alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // rest score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    // clear last selected alphabet
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}