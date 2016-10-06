$(document).ready(main);

function main(){
	var tentatives = 3;
	var mystere = Math.round(Math.random() * (max - min) + min);
	var min = 1;
	var max = 4;
	var choixTentatives = $("#tent").text(tentatives);
	var choixMin = $("#minimum").text(min);
	var choixMax = $("#maximum").text(max);

	console.log("tentatives" + tentatives);
	console.log("mystere" + mystere);

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
			choixTentatives;
		} else{
			alert("Votre nombre est trop petit");
			tentatives--;
			choixTentatives;
		}

		function partieGagnee(){
			return(input == mystere);			
		}

		function partiePerdue(){
			return(tentatives == 0);
		}
	}

	function reset(){
		parseInt(prompt("Combien de tentatives voulez vous ?"));
		choixTentatives;
		parseInt(prompt("Choisissez un nombre minimum"));
		choixMin;
		parseInt(prompt("et maximum"));
		choixMax;
		alert("Devinez le nombre mystère");
		reset();
	}

	$("#go").click(reset);
	$("#valider").click(clickValider);
} 