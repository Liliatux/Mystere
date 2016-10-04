$(document).ready(main);

// Fonction principale
function main(){
	var aleatoire = [22, 7];
	console.log(aleatoire);
	$("button").click(function(){
		var mystere = $("#nombre").val();
		console.log('mystere: ' + mystere);
		if (mystere == aleatoire[Math.random()* lenght]){
			alert("Gagné");
		} else{
			alert("Perdu");
		}
	});
console.log(main());
		// Comparer ce contenu à un nombre que vous choisissez
			// Si le contenu est égal
			// Afficher une alert Gagné

			// Sinon,
			// Afficher une alert Perdu


	// /Fin == Fonction clickValider == 



	// Ecrire le code qui va détecter que le bouton 'valider' est cliqué.
	// Et qui appelle la fonction 'clickValider' défini ci-dessus


}

main();