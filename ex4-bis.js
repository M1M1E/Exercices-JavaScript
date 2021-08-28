//Choix de l'utilisateur du nombre de tables
let table = Number(prompt('Combien de tables voulez-vous?',10)) ;



//Ouverture de la table html
 document.write('<table border="1">');
  
    //génère le nombre de lignes choisies par l'utilisateur
 for(let index = 1; index <= table; index++){
    //ouvre une ligne du tableau
  document.write('<tr>');
  
    //génère 10 colonnes
  for(let column = 1; column <11; column++){
    //créer une colonne contenant une operation
  document.write('<td>' + index*column +'</td>');
  }
 
     //Fermeture de la ligne du tableau
  document.write('</tr>')
  }
  
  document.write('</table>');