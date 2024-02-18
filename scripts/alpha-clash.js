function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet', alphabet);
}

function play(){
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add ('hidden');
    // console.log(homeSection)

    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');
    // console.log(playGroundSection.classList);

    continueGame();
}