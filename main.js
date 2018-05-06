/**************  football draw ************/

/****************** select elements ****************/

var dugme = document.getElementsByTagName('button')[0];
var p = document.getElementsByClassName('igraci')[0];
var player = document.getElementsByClassName('player')[0];
var h3 = document.getElementsByTagName('h3')[0];
var teamOne = document.getElementById('timPrvi');
teamOne.style.color = '#fff';
var teamTwo = document.getElementById('timDrugi');
var pic = document.getElementById('picture');
var pic1 = document.getElementById('pictureJedan');
var tim = [];
var tim1 = [];
var counter = 10;
var starter = 0;
var players = [];
var addPic = document.getElementsByClassName('slike-levo')[0];
var addPic1 = document.getElementsByClassName('slike-desno')[0];

/*************** adding players **********************/

enterPlayer();

function enterPlayer(){
	for(var i = 0; i < 10; i++){
		var unos = prompt('Enter player (10 names)');
		starter++;
		players[i] = unos;
	}
	h3.innerHTML = players;
	
}



/**************  adding players to teams ******************/


dugme.addEventListener('click', addPlayers);

function addPlayers(){

	for(var i = 0; i < 1; i++){
		
		var random = [Math.floor(Math.random() * counter)];
		tim.push(players[random]);
		players.splice(random,1);
		counter--;
		teamOne.innerHTML =  tim;
		var text = '';
	for(var x = 0; x < tim.length; x++){
			text += '<img src="img/messi.jpg">';
	}
	addPic.innerHTML = text;
	}
		var random = [Math.floor(Math.random() * counter)];
		tim1.push(players[random]);
		players.splice(random,1);
		counter--;
		teamTwo.innerHTML = tim1;
		var text1 = '';
	for(var j = 0; j < tim1.length; j++){
			text1 += '<img src="img/Ronaldo.jpg">';
			
		}
	addPic1.innerHTML = text1;
	if(counter === 0){
			counter = 10;
			
		}
	if(tim1.length === 5){
				dugme.removeEventListener('click', addPlayers);
				setTimeout(checkDrawRound,2000);
				} 
	};



function checkTeamOne(){
	for(var x = 0; x < slike.lenght; x++){
		for(var j = 0; j < tim.lenght; j++){
			if(slike[x] == tim[j]){
			}
		}
	}
		}
checkTeamOne();

function checkTeamTwo(){
	for(var x = 0; x < slike.lenght; x++){
		if(tim1 == slike[x]){
			var text = '';
			text += '<img src="img/'+ slike[x] +'.jpg">';
			console.log(text);
			
		}
		fudbal.innerHTML = text;
	}	
}
	
/**************** check for another round *************************/

function checkDrawRound(){
	alert('Do you won"t to create another draw?');
			if(confirm){
					enterPlayer();
				}else{
					return;
				}	
}	





