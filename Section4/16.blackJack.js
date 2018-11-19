//unfinished

var scores, roundScore, activePlayer, gamePlaying;

init();

var pokers = ['transparent url(../images/poker/poker.jpg) no-repeat scroll -2px -2px',
    'transparent url(../images/poker/poker.jpg) no-repeat scroll -245px -2px',
    'transparent url(../images/poker/poker.jpg) no-repeat scroll -495px -2px',
    'transparent url(../images/poker/poker.jpg) no-repeat scroll -743px -2px',
    'transparent url(../images/poker/poker.jpg) no-repeat scroll -990px -2px',
    'transparent url(../images/poker/poker.jpg) no-repeat scroll -2px -398px',
    'transparent url(../images/poker/poker.jpg) no-repeat scroll -245px -398px',
    'transparent url(../images/poker/poker.jpg) no-repeat scroll -495px -398px',
    'transparent url(../images/poker/poker.jpg) no-repeat scroll -743px -398px',
    'transparent url(../images/poker/poker.jpg) no-repeat scroll -990px -398px',
    'transparent url(../images/poker/poker.jpg) no-repeat scroll -245px -785px',
    'transparent url(../images/poker/poker.jpg) no-repeat scroll -495px -785px',
    'transparent url(../images/poker/poker.jpg) no-repeat scroll -743px -785px']

document.querySelector('.btn-roll').addEventListener('click', function () {
    
    if (gamePlaying) {
        // 1. Random number
        var pokerRan = Math.floor(Math.random() * 13) + 1;
        console.log('suiji:'+ pokerRan)
        if (pokerRan == 11 || pokerRan == 12 || pokerRan == 13) {
            poker = 10;
        } else { 
            poker = pokerRan;
        }
        console.log('jiaozheng:' +poker)
        //2. Display the result
        var pokerDOM = document.querySelector('#poker-1');
        pokerDOM.style.display = 'block';
        pokerDOM.style.background = pokers[pokerRan-1];
        


        //3. Update the round score IF the player hold the score
        document.querySelector('#current-' + activePlayer).textContent = poker;
        if (roundScore < 21) {
            //Add score
            roundScore += poker;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[0] > scores[1] && Scores[0] <= 21) {
            document.querySelector('#name-' + 0).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + 0 + '-panel').classList.add('winner');
            document.querySelector('.player-' + 0 + '-panel').classList.remove('active');
            gamePlaying = false;
        } else if (scores[1] > scores[0] && Scores[1] <= 21){ 
            document.querySelector('#name-' + 1).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + 1 + '-panel').classList.add('winner');
            document.querySelector('.player-' + 1 + '-panel').classList.remove('active');
            gamePlaying = false;
        }
        else
        {
            //Next player
            nextPlayer();
        }
    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.poker').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.poker').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}