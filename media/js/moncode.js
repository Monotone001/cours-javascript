alert('Début');
alert('Fin');
var age = prompt("Quel âge avez-vous? (en années)");
alert(age);
function conversion(unite1, taux, unite2)
{
    var valeur = prompt("Entrer la valeur à convertir, en " + unite1);
    var resultat = valeur * taux;
    alert(valeur + ' ' + unite1 + '\n' + resultat + ' ' + unite2);
}
var nombre = prompt('Entrez un nombre', 'Votre nombre ici');
alert('Vous avez tapé ' + nombre);