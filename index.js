$(document).ready(main);

function main(){
	var tentatives;
	var mystere;

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
			diminution();
		} else{
			alert("Votre nombre est trop petit");
			diminution();
		}

		function partieGagnee(){
			return(input == mystere);			
		}

		function partiePerdue(){
			return(tentatives == 0);
		}

		function diminution(){
			tentatives--;
			$("#tent").html(tentatives);
		}
	}

	function reset(){
		tentatives = parseInt(prompt("Combien de tentatives voulez vous ?"), 10);
		$("#tent").html(tentatives);
		var min = parseInt(prompt("Choisissez un nombre minimum"), 10);
		$("#minimum").html(min);
		var max = parseInt(prompt("et maximum"), 10);
		$("#maximum").html(max);
		alert("Devinez le nombre mystère");
		mystere = Math.round(Math.random() * (max - min) + min);
		console.log(mystere);
		debugger;
	}

	$("#go").click(reset);
	$("#valider").click(clickValider);
} 