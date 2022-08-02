function verification(entree) {
    var seulement_ceci ="0123456789[]()-+*%/.";
    for (var i = 0; i < entree.length; i++)
     if (seulement_ceci.indexOf(entree.charAt(i))<0 ) return false;
    return true;
   }
  
   function resultat() {
     var x = 0;
        if(verification(window.document.calculatrice.affiche.value))
        window.document.calculatrice.affiche.value = calcul(window.document.calculatrice.affiche.value);
   }
  
   function ajouter(caracteres) {
     window.document.calculatrice.affiche.value = window.document.calculatrice.affiche.value + caracteres;
   }

   function calcul(valeur) {
        x = eval(valeur);
        return x;
  }
  
  module.exports = calcul