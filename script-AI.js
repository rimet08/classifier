function zpracujData() {
    // Načtení hodnot
    let jmeno = document.getElementById('nameInput').value;
    let vek = document.getElementById('ageInput').value;
    let pohlavi = '';
    
    // Zjištění pohlaví
    if (document.getElementById('genderMale').checked) {
        pohlavi = 'Male';
    }
    if (document.getElementById('genderFemale').checked) {
        pohlavi = 'Female';
    }
    
    // Výstupní prvky
    let text = document.getElementById('resultText');
    let obrazek = document.getElementById('resultImage');
    
    // Hlavní větvení podle věku
    if (vek < 0) {
        text.innerHTML = 'Chyba: Zadejte platný věk.';
        obrazek.style.display = 'none';
    } 
    else if (vek <= 6) {
        text.innerHTML = jmeno + ' je dítě.';
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            obrazek.src = 'obrazky/dite_muz.png';
        } else {
            obrazek.src = 'obrazky/dite_zena.png';
        }
    } 
    else if (vek <= 15) {
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            text.innerHTML = jmeno + ' je školák.';
            obrazek.src = 'obrazky/skolak_muz.png';
        } else {
            text.innerHTML = jmeno + ' je školačka.';
            obrazek.src = 'obrazky/skolak_zena.png';
        }
    } 
    else if (vek <= 26) {
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            text.innerHTML = jmeno + ' je student.';
            obrazek.src = 'obrazky/student_muz.png';
        } else {
            text.innerHTML = jmeno + ' je studentka.';
            obrazek.src = 'obrazky/student_zena.png';
        }
    } 
    else if (vek <= 64) {
        text.innerHTML = jmeno + ' je dospělá osoba.';
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            obrazek.src = 'obrazky/dospely_muz.png';
        } else {
            obrazek.src = 'obrazky/dospely_zena.png';
        }
    } 
    else {
        obrazek.style.display = 'block';
        if (pohlavi == 'Male') {
            text.innerHTML = jmeno + ' je důchodce.';
            obrazek.src = 'obrazky/duchodce_muz.png';
        } else {
            text.innerHTML = jmeno + ' je důchodkyně.';
            obrazek.src = 'obrazky/duchodce_zena.png';
        }
    }
}