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

// let phrase = prompt("Votre phrase :")
// let estimation = parseInt(prompt("Nombre de caractères dans votre phrase à votre avis ?"))

// if (phrase.length == estimation) {
//     alert(`Correct ! Votre phrase fait bien ${phrase.length} caractères`)
// }

// else {
//     alert(`Faux, votre phrase faisait ${phrase.length} caractères et vous étiez à ${Math.abs(estimation - phrase.length)} caractères de la bonne réponse`)
// }

// EXO 5

// let prenom = prompt("Prénom ?")

// if (prenom === "") {
//     reponse = prompt("Attention, vous devez remplir le champs ci-dessous, quel est votre prénom ?")
//     alert(`Bonjour, ${reponse}`)
// }

// else {
//     alert(`Bonjour, ${prenom}`)
// }

// EXO 6

// let formule;
// let confirmation;

// if (confirm("Abonnez-vous")) {
//     formule = prompt("Formule Luxe ou Normal ?")
// }
// else {
//     alert("Dommage")
// }

// if (formule == "Luxe") {
//     alert("Félicitations, vous avez choisi la formule Luxe !")
// }
// else if (formule == "Normal") {
//     alert("Félicitations, vous avez choisi la formule Normal !")
// }
// else {
//     confirmation = confirm("T'es sûr bg ?")
// }

// if (confirmation) {
//     alert("Dommage fratello ziar bien")
// }
// else {
//     formule = prompt("Luxe ou Normal ?")
// }

// EXO 7

// let questionUne = prompt("Capitale de la Belgique ?")
// let questionDeux = prompt("Capitale du Canada ?")
// let reponseUne = "Bruxelles"
// let reponseDeux = "Ottawa"

// if (questionUne == reponseUne && questionDeux == reponseDeux) {
//     alert("Félicitations, les deux réponses sont justes !")
// }
// else if (questionUne != reponseUne && questionDeux == reponseDeux) {
//     alert("Presque, la réponse à la première question est fausse !")
// }
// else if (questionUne == reponseUne && questionDeux != reponseDeux) {
//     alert("Presque, la réponse à la deuxième question est fausse !")
// }
// else {
//     alert("Tu as échoué aux 2 questions ...")
// }

// EXO 8

// let age = parseInt(prompt("Quel est votre âge ?"))

// if (age < 0) {
//     alert("En théorie vous n'existez pas ...")
// }
// else if (age > 100) {
//     alert("Trop vieux ! N'allez pas voir ce film pour rester en vie")
// }
// else if (age > 18) {
//     alert("Vous êtes majeur, vous pouvez réserver")
// }
// else if (age < 18) {
//     alert("Vous n'êtes malheureusement pas majeur, accès interdit")
// }
// else if (age = 18) {
//     alert("Vous êtes majeur tout pile ! Tout juste")
// }

// EXO 9