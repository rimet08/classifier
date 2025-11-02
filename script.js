// CHYBA 1: Špatný název funkce - měla by mít popisný název
function zpracujData() {
    // CHYBA 2: Původně se porovnávaly HTML elementy místo jejich hodnot
    // OPRAVA: Použití .value pro získání hodnot z formuláře
    let jmeno = document.getElementById("nameInput").value;
    let vek = document.getElementById("ageInput").value;
    
    // CHYBA 3: Původně se načítaly elementy, ale nekontrolovalo se, který je vybraný
    // OPRAVA: Zjištění vybraného pohlaví pomocí .checked
    let pohlavi = '';
    if (document.getElementById("genderMale").checked) {
        pohlavi = 'Male';
    }
    if (document.getElementById("genderFemale").checked) {
        pohlavi = 'Female';
    }
    
    // CHYBA 4: Chyběly odkazy na výstupní elementy
    // OPRAVA: Načtení elementů pro zobrazení výsledku
    let text = document.getElementById("resultText");
    let obrazek = document.getElementById("resultImage");
    
    // CHYBA 5: Porovnávání HTML elementu místo číselné hodnoty
    // OPRAVA: Převod na číslo a správné porovnání
    if (vek < 0) {
        // CHYBA 6: Alert místo zobrazení v HTML
        // OPRAVA: Zobrazení chyby v textovém elementu
        text.innerHTML = 'Chyba: Zadejte platný věk.';
        obrazek.style.display = 'none';
    } 
    else if (vek <= 6) {
        text.innerHTML = jmeno + ' je dítě.';
        obrazek.style.display = 'block';
        // CHYBA 7: Cesty k obrázkům se ukládaly do proměnných, ale nepoužívaly
        // OPRAVA: Přímé nastavení src atributu podle pohlaví
        if (pohlavi == 'Male') {
            obrazek.src = 'images/dite_muz.png';
        } else {
            obrazek.src = 'images/dite_zena.png';
        }
    } 
    // CHYBA 8: Chybějící věkové kategorie (věk 7 a 26 spadly mezi kategorie)
    // OPRAVA: Správné rozsahy věku >= 7 a <= 15, >= 16 a <= 26
    else if (vek >= 7 && vek <= 15) {
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            text.innerHTML = jmeno + ' je školák.';
            obrazek.src = 'images/skolak_muz.png';
        } else {
            text.innerHTML = jmeno + ' je školačka.';
            obrazek.src = 'images/skolak_zena.png';
        }
    } 
    else if (vek >= 16 && vek <= 26) {
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            text.innerHTML = jmeno + ' je student.';
            obrazek.src = 'images/student_muz.png';
        } else {
            text.innerHTML = jmeno + ' je studentka.';
            obrazek.src = 'images/student_zena.png';
        }
    } 
    // CHYBA 9: Špatný rozsah věku < 64 místo <= 64
    // OPRAVA: Správný rozsah až do 64 let včetně
    else if (vek >= 27 && vek <= 64) {
        text.innerHTML = jmeno + ' je dospělá osoba.';
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            obrazek.src = 'images/dospely_muz.png';
        } else {
            // CHYBA 10: Překlep v názvu souboru "dospela_zena" místo "dospely_zena"
            // OPRAVA: Správný název souboru
            obrazek.src = 'images/dospely_zena.png';
        }
    } 
    else {
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            text.innerHTML = jmeno + ' je důchodce.';
            obrazek.src = 'images/duchodce_muz.png';
        } else {
            text.innerHTML = jmeno + ' je důchodkyně.';
            obrazek.src = 'images/duchodce_zena.png';
        }
    }
}
