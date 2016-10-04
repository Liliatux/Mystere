$(document).ready(main);

// Fonction principale
function main(){
	$("button").click(function(){
		var mystere = $("#nombre").val();
		var aleatoire = Math.round(Math.random() * (3 - 1));
		console.log(aleatoire);
		if(mystere == aleatoire){
			alert("Gagné");
		} else if(mystere < aleatoire){
			alert("Votre nombre est trop petit");
		} else{
			alert("Votre nombre est trop grand");
		}
		function vie(){
			var vie = 3
			for(vie = 0; vie < 3; vie--) {
				alert("2 vies restantes");
			}
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