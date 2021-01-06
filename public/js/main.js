// EXO 1

// let varUn = parseInt(prompt("Nombre 1 :"))
// let varDeux = parseInt(prompt("Nombre 2 :"))

// if (varUn == varDeux) {
//     alert(`Les nombres ${varUn} et ${varDeux} sont-ils égaux ? OUI`)
// }

// else {
//     alert(`Les nombres ${varUn} et ${varDeux} sont-ils égaux ? NON`)
// }

// EXO 2

// let varUn = parseInt(prompt("Nombre 1 :"))
// let varDeux = parseInt(prompt("Nombre 2 :"))

// if (varUn < varDeux) {
//     alert(`Le nombre ${varUn} est-il plus petit que ${varDeux} ? OUI`)
// }

// else if (varUn >= varDeux) {
//     alert(`Le nombre ${varUn} est-il plus petit que ${varDeux} ? NON`)
// }

// EXO 3

// let nb1 = parseInt(prompt("Number one ?"))
// let nb2 = parseInt(prompt("Number two ?"))
// let nb3 = parseInt(prompt("Number three ?"))

// if (nb1 + nb2 > nb3) {
//     alert(`La somme de ${nb1} + ${nb2} est-elle plus grande que ${nb3} ? : ${nb1 + nb2 > nb3}`)
// }

// else if (nb1 + nb2 < nb3) {
//     alert(`La somme de ${nb1} + ${nb2} est-elle plus grande que ${nb3} ? : ${nb1 + nb2 > nb3}`)
// }

// EXO 4

let phrase = prompt("Votre phrase :")
let estimation = parseInt(prompt("Nombre de caractères dans votre phrase à votre avis ?"))

if (phrase.length == estimation) {
    alert(`Correct ! Votre phrase fait bien ${phrase.length} caractères`)
}

else {
    alert(`Faux, votre phrase faisait ${phrase.length} caractères et vous étiez à ${Math.abs(estimation - phrase.length)} caractères de la bonne réponse`)
}

// EXO 5
