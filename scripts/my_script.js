// Initial Handshake confirmation
console.log("DEBUG my_script.js: OK!"); 

// *************************************************************************
// Initializing Global DOM hooks
const rollBTN = document.querySelector('.play-btn');


// *************************************************************************
// FOR loop to generate dice rolls on the click of the button
rollBTN.addEventListener ('click', () => {
    const dice = document.querySelectorAll('.ms_die-roll');
    dice[0].innerHTML = Math.ceil(Math.random() * 6);
    dice[1].innerHTML = Math.ceil(Math.random() * 6);
    console.log(dice);

    const player = document.querySelector('.player-score');
    const computer = document.querySelector('.comp-score');

    const scores = document.querySelector('.results-score');
    const scoreTurn = document.createElement('p');
    scoreTurn.classList.add('fs-5')
    scoreTurn.append(`${dice[0].innerHTML} VS ${dice[1].innerHTML}`);
    scores.prepend(scoreTurn);

    if(parseInt(dice[0].innerHTML) > parseInt(dice[1].innerHTML)) {
        player.innerHTML = parseInt(player.innerHTML) + 1;
        console.log('Point to player', player.innerHTML);
    } else if (parseInt(dice[0].innerHTML) < parseInt(dice[1].innerHTML)) {
        computer.innerHTML = parseInt(computer.innerHTML) + 1;
        console.log('Point to computer', computer.innerHTML);
    }
})