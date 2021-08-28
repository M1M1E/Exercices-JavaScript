document.write("<table width ='40%' border ='1px'>");

//créer la 1ere ligne
let nb= 10;
document.write("<tr>"); //tr=> colonne
for(let i= 1; i<= 0; i++){
    document.write("<td>  </td>"); //td=> ligne
}
document.write("</tr");

//créer les autres lignes
let x = nb + 1;
for(let i = 1; i < x; i++){ 
    document.write("<tr>");
    for(let j = 1; j <= nb; j++){
        document.write("<td> "+i*j+" </td>");// rempli les cases avec les nombres
    }
    document.write("</tr>");
}
document.write("</table>");



/** Ouverture de la table html
 * document.write('table');
 * 
 * //génère 10 lignes
 *for(let index = 1; index <=11; index++){
     //ouvre une ligne du tableau
 * document.write('<tr>');
 * 
 * //génère 10 colonnes
 * for(let column = 1; column <=11; column++){
 * //créer une colonne contenant une operation
 * document.write('<td>' + index*column +'<td>');
 * }
 *
 * Fermeture de la ligne du tableau
 * document.write('<tr>')
 * }
 * 
 * document.write('</table>');
 */