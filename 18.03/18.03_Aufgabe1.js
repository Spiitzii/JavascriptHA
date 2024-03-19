function bewertePunktzahl(punktzahl) {
    if (punktzahl > 90) {
        console.log("sehr gut");
    } else if (punktzahl >= 80 && punktzahl <= 90) {
        console.log("gut");
    } else if (punktzahl >= 70 && punktzahl < 80) {
        console.log("befriedigend");
    } else if (punktzahl >= 60 && punktzahl < 70) {
        console.log("ausreichend");
    } else {
        console.log("nicht bestanden");
    }
}


bewertePunktzahl(91); // sehr gut
bewertePunktzahl(81); // gut
bewertePunktzahl(71); // befriedigend
bewertePunktzahl(61); // ausreichend
bewertePunktzahl(50); // nicht bestanden

