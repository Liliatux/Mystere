$(document).ready(main);

function main(){
	var tentatives = 3;
	var nombre = Math.round(Math.random() * (3 - 1) + 1);
	console.log(nombre);

	function reset(){
		tentatives = 3;
		nombre = Math.round(Math.random() * (3 - 1) + 1);
		$("#count").text(tentatives);
		nombre;
	}
	console.log("truc")

	function clickValider(){
		var input = $("input").val();
		if(partieGagnee()){
			alert("Gagné !");
			reset();
		} else if(partiePerdue()){
			alert("Perdu");
			reset();
		} else if(input > nombre){
			alert("Votre nombre est trop grand");
			tentatives--;
			$("#count").text(tentatives);
		} else{
			alert("Votre nombre est trop petit");
			tentatives--;
			$("#count").text(tentatives);
		}

		function partieGagnee(){
			return(input == nombre);			
		}

		function partiePerdue(){
			return(tentatives == 0);
		}
	}

	function demarrerPartie(){
		alert("Devinez le nombre mystère");
	}

	$("#go").click(demarrerPartie);
	$("#valider").click(clickValider);
}
