$(document).ready(main);

function main(){
	var tentatives;
	var mystere;

	function clickValider(){
		var input = $("input").val();
		if(input == mystere){
			annonce("Gagné !");			
		} else if(tentatives == 1){
			annonce("Perdu");
		} else if(input > mystere){
			alert("Votre nombre est trop grand");
			diminution();
		} else{
			alert("Votre nombre est trop petit");
			diminution();
		}

		function annonce(message){
			alert(message);
			reset();
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
	}

	$("#go").click(reset);
	$("#valider").click(clickValider);
} 