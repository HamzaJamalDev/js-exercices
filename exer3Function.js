	var j=0;
		function compteur(chaine,lettre){
			for (var i = 0;i<chaine.length;i++) {
            if(chaine.at(i)===lettre){
            	j++;
            }
			}
		console.log("le resultat attendu est : "+ j);
		}
		
		compteur('Sofia','f');