var scores  , active_player , roundScore  ; 


scores = [0,0] ; 

roundScore = 0 ; 

active_player = 0 ; 

document.getElementById('score-0').textContent = '0'; 
document.getElementById('score-1').textContent = '0'; 
document.getElementById('current-1').textContent = '0'; 
document.getElementById('current-0').textContent = '0'; 


function btn(){

  var dice   = Math.floor(Math.random()*6) +1 ; 
  
  //2 display the number on dice 
 // document.querySelector('.dice').style.display = 'block'; 

  //document.querySelector('#current-0').textContent = dice;
  diceDOM =  document.querySelector('.dice'); 
  //diceDOM.style.display = 'block'; 
  diceDOM.src = 'dice-' + dice  + '.png'; 

  if (dice !== 1 ) {
    // Add score
  
    roundScore += dice; 
    document.querySelector('#current-' + active_player).textContent = roundScore; 
  
  
  }else  {
    // Next player 
    nextPlayer(); 

  }

}

document.querySelector('.btn-roll').addEventListener('click',btn); 


document.querySelector('.btn-hold').addEventListener('click', function(){

  // Add  current score to global score 

  scores[active_player]  += roundScore; 

  // update the UI 

  document.querySelector('#score-'+ active_player).textContent = scores[active_player]; 


  nextPlayer(); 

if(scores[active_player] >= 20){
  document.querySelector('#name-' + active_player ).textContent = 'Winner-fucker!'; 
}else {
  nextPlayer(); 
}

  // 

}); 



function nextPlayer(){

  active_player === 0 ? active_player = 1 : active_player = 0 ; 
  roundScore = 0 ; 

  document.getElementById('current-0').textContent = '0' ; 
  document.getElementById('current-1').textContent = '0' ; 


  document.querySelector('.player-0-panel').classList.toggle('active'); 
  document.querySelector('.player-1-panel').classList.toggle('active'); 

  
 // document.querySelector('.dice').style.display = 'none';

}