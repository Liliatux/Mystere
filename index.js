$(document).ready(main);

function main(){
	var tentatives;
	var mystere;
	console.log(mystere);
	reset();

	function clickValider(){
		var input = $("input").val();
		if(partieGagnee()){
			alert("Gagné !");
			reset();
		} else if(partiePerdue()){
			alert("Perdu");
			reset();
		} else if(input > mystere){
			alert("Votre nombre est trop grand");
			tentatives--;
			$("#count").text(tentatives);
		} else{
			alert("Votre nombre est trop petit");
			tentatives--;
			$("#count").text(tentatives);
		}

		function partieGagnee(){
			return(input == mystere);			
		}

		function partiePerdue(){
			return(tentatives == 0);
		}
	}

	function reset(){
		tentatives = 3;
		mystere = Math.round(Math.random() * (3 - 1) + 1);
		$("#count").text(tentatives);
		console.log(mystere);
	}

	function demarrerPartie(){
		alert("Devinez le nombre mystère");
	}

	$("#go").click(demarrerPartie);
	$("#valider").click(clickValider);
} 