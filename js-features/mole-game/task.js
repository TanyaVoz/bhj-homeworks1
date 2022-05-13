const holeTarget = document.querySelectorAll('.hole');
const deadMole = document.getElementById('dead');
const missed = document.getElementById('lost');
let holeTargetArr = Array.from(holeTarget);

	deadMole.textContent = 0;
	missed.textContent = 0;
for(let i = 0; i < holeTargetArr.length; i++) {

	holeTargetArr[i].onclick = function (){
		if(holeTargetArr[i].className.includes('hole_has-mole')){
			deadMole.textContent++;
		} else {
			missed.textContent++;
		}

			if(deadMole.textContent == 10) {
				alert('Вы победили!');
                deadMole.textContent = 0;
				missed.textContent = 0;
                return;
			}
			 else if(missed.textContent == 5){
				alert('Вы проиграли.');	
                missed.textContent = 0;	
				deadMole.textContent = 0;
				return;
			}
		}
	}
