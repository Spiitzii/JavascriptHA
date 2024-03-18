function Alter(alter) {
    if (alter < 6) {
        return "Die Fahrt ist kostenlos.";
    } else if (alter >= 6 && alter <= 17) {
        return "Die Fahrt ist zum Kinderpreis.";
    } else if (alter >= 18 && alter <= 66) {
        return "Die Fahrt ist zum Vollpreis.";
    } else {
        return "Die Fahrt ist zum Seniorenpreis.";
    }
}

// Funktion testen, gib bei den Zahlen eine beliebige ein und bekomme das Ergebnis
console.log(bewerteAlter(4));  //  Die Fahrt ist kostenlos.
console.log(bewerteAlter(10)); //  Die Fahrt ist zum Kinderpreis.
console.log(bewerteAlter(30)); //  Die Fahrt ist zum Vollpreis.
console.log(bewerteAlter(70)); //  Die Fahrt ist zum Seniorenpreis.

