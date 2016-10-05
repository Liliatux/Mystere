$(document).ready(main);

function main(){
	var tentatives = 3;
	var nombre = Math.round(Math.random() * (3 - 1) + 1);
	console.log(nombre);

	function clickValider(){
		var input = $("input").val();
		if(tentatives == 0){
			alert("Perdu");
			location.reload();
		} else if(input == nombre){
			alert("Gagné");
			location.reload();
		} else if(input > nombre){
			alert("Votre nombre est trop grand");
			tentatives--;
			$("#count").text(tentatives);
		} else{
			alert("Votre nombre est trop petit");
			tentatives--;
			$("#count").text(tentatives);
		}
	}

	$("button").click(clickValider);

}	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
	*/
