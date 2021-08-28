let notes = [10, 12, 20, 1, 13, 4, 16, 8, 19, 7, 9];
let total = 0;
let moyenne = 0;


for(let i =0; i <notes.length; i++){ //index, (=>boucle continu[calcul les nombres et s'arrete à la fin]), index+1
   // console.log(notes[i]);
   // total +=notes[i]; VERSION RACCOURCIE
   total = total + notes[i];//additione toutes les valeurs les unes apres les autres 
}

console.log(total);


//calculer la moyenne des notes
moyenne = total / notes.length;
console.log(moyenne);

//Afficher uniquement les notes superieures a 10

for(let i = 1; i <notes.length; i++){
    //verifie si une note est superieure a 10
    if(notes[i] > 10){
        console.log(notes[i]);
    }
}