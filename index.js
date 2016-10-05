$(document).ready(main);

function main(){
	var tentatives = //stocker le nombre de tentatives restantes
	var nombre = Math.round(Math.random() * (3 - 1));

	function clickValider(){
		var input = $("input").val();
		if(input == nombre){
			alert("Gagné");
			//démarrer une nouvelle partie
		} else if(input > nombre){
			alert("Votre nombre est trop grand");
			//diminuer le nombre de tentatives
		} else{
			alert("Votre nombre est trop petit");
			//diminuer le nombre de tentatives
		}

		// Actualiser la zone html affichant le nombre de tentatives

		/* 
				Si le nb de tentatives est égal à 0,
			 	la partie est perdue :
			 	- afficher que c'est perdu
			 	- démarrer une nouvelle partie
			 		+ remettre le nombre de tentatives à sa valeur initiale
			 		+ générer un nouveau nombre mystère
			 */
	}

	$("button").click(clickValider);

}	/*
		Concernant la 'refactorisation' : 
		- créer une fonction 'demarrerPartie'
		- créer une fonction 'partieGagnee'
		- créer une fonction 'partiePerdue'
	*/
}