
// on declanche le compteur the counter. On l'initialise à 0
var count=0;
$('button').click(function(){
  // chaque fois qu'on click sur le bouton qui a la classe .button
    count++; // le compteur ajout encore une valeur, encore un 1
    $('span').text(count); // dans mon text il va changer la valeur de mon span avec le nombre de cliques, memoré dans la compteur
});
