//afficher les nombres pairs qui sont inferieur à 20 en commencant par 2 avec boucle WHILE
let i = 2;
let resultat = 2;

while(resultat<20){
    console.log(resultat);
    resultat = resultat + 2;
    i++;
}

/**CORRECTION
* let index = 2; 
while(index<20);
console.log(index);
index+=2;  // index = index + 2
*/

//afficher les 10 premiers entiers et leur carré avec boucle au choix
let j = 1;
let result = 1;

while(result<11){
    console.log(result + ' a pour carré : ' + result*result);
    result = result + 1 ;
    j++; 
}


//Afficher 5 fois le nb aléatoire
for(let index = 0; index < 5; index++){
    console.log(Math.floor(Math.random() * 100));
}
/**
 * let index = 0;
 * while(index > 5){
 * console.log(Math.floor(Math.random() * 100));)
 * index++;
 * }
 */


//Afficher les entiers de 2 à 20 hormis le nb 13

let index = 2;

while(index < 21){
    if(index!==13)
    console.log(index);
    index ++;
}