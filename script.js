function zpracujData() {
    // Načtení hodnot z formuláře
    let jmeno = document.getElementById("nameInput").value;
    let vek = document.getElementById("ageInput").value;
    
    // Zjištění pohlaví
    let pohlavi = '';
    if (document.getElementById("genderMale").checked) {
        pohlavi = 'Male';
    }
    if (document.getElementById("genderFemale").checked) {
        pohlavi = 'Female';
    }
    
    // Výstupní elementy
    let text = document.getElementById("resultText");
    let obrazek = document.getElementById("resultImage");
    
    // Klasifikace podle věku
    if (vek < 0) {
        text.innerHTML = 'Chyba: Zadejte platný věk.';
        obrazek.style.display = 'none';
    } 
    else if (vek <= 6) {
        text.innerHTML = jmeno + ' je dítě.';
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            obrazek.src = 'images/dite_muz.png';
        } else {
            obrazek.src = 'images/dite_zena.png';
        }
    } 
    else if (vek <= 15) {
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            text.innerHTML = jmeno + ' je školák.';
            obrazek.src = 'images/skolak_muz.png';
        } else {
            text.innerHTML = jmeno + ' je školačka.';
            obrazek.src = 'images/skolak_zena.png';
        }
    } 
    else if (vek <= 26) {
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            text.innerHTML = jmeno + ' je student.';
            obrazek.src = 'images/student_muz.png';
        } else {
            text.innerHTML = jmeno + ' je studentka.';
            obrazek.src = 'images/student_zena.png';
        }
    } 
    else if (vek <= 64) {
        text.innerHTML = jmeno + ' je dospělá osoba.';
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            obrazek.src = 'images/dospely_muz.png';
        } else {
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
