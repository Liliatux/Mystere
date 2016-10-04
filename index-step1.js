$(document).ready(main);

// Fonction principale
function main(){
	var aleatoire = Math.floor(Math.random()*3);
	$("button").click(function(){
		var mystere = $("#nombre").val();
		if (mystere == aleatoire){
			alert("Gagné");
		} else{
			alert("Perdu");
		}
	});
		// Comparer ce contenu à un nombre que vous choisissez
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon,
			// Afficher une alert Perdu


	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


}