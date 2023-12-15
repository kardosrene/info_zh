function paralelogrammaTeruletMagassaggalEsOldallal(magassag, oldal) {
    // Számítás: Terület = magasság * oldal
    let terulet = magassag * oldal;
    return terulet;
}

// Példa használat:
let magassag = 5;
let oldal = 8;
let teruletMagassaggalEsOldallal = paralelogrammaTeruletMagassaggalEsOldallal(magassag, oldal);
console.log("A paralelogramma területe magassággal és oldallal:", teruletMagassaggalEsOldallal);

function paralelogrammaTeruletSzoggelEsKetOldallal(szog, oldal1, oldal2) {
    // Számítás: Terület = oldal1 * oldal2 * sin(szög)
    let terulet = oldal1 * oldal2 * Math.sin((szog * Math.PI) / 180); // Átváltás radiánba (Math.sin függvény radiánban számol)
    return terulet;
}

// Példa használat:
let szog = 45; // Szög fokban
let oldal1 = 6;
let oldal2 = 9;
let teruletSzoggelEsKetOldallal = paralelogrammaTeruletSzoggelEsKetOldallal(szog, oldal1, oldal2);
console.log("A paralelogramma területe szöggel és két oldallal:", teruletSzoggelEsKetOldallal);