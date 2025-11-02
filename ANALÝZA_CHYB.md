# ANALÝZA CHYB A VYSVĚTLENÍ KÓDU - KLASIFIKÁTOR

## 📋 PŘEHLED PROJEKTU
Projekt klasifikátoru slouží k určení životní kategorie osoby na základě věku a pohlaví.
Skládá se z HTML formuláře, CSS stylů a JavaScript logiky.

---

## 🚨 ANALÝZA PŮVODNÍCH CHYB

### 1. CHYBA: Špatný název funkce
**Původní kód:**
```javascript
function processBtn() {
```

**Problém:**
- Název funkce neodpovídá jejímu účelu
- `processBtn` zní jako název tlačítka, ne funkce

**Oprava:**
```javascript
function zpracujData() {
```

**Vysvětlení:**
- Název funkce by měl popisovat, co funkce dělá
- `zpracujData()` jasně říká, že funkce zpracovává data

---

### 2. CHYBA: Porovnávání HTML elementů místo hodnot
**Původní kód:**
```javascript
if (ageInput <= 0) {
```

**Problém:**
- `ageInput` je HTML element, ne číslo
- Nelze porovnávat HTML element s číslem

**Oprava:**
```javascript
let vek = document.getElementById("ageInput").value;
if (vek < 0) {
```

**Vysvětlení:**
- `.value` získá hodnotu z input pole jako text
- Text se automaticky převede na číslo při porovnání

---

### 3. CHYBA: Redklarace proměnných v každém bloku
**Původní kód:**
```javascript
const nameInput = document.getElementById("nameInput");
// ... později v každém if bloku:
let nameInput = nameInput.value; // CHYBA!
```

**Problém:**
- Pokoušíte se znovu deklarovat stejnou proměnnou
- `nameInput.value` se snaží použít sebe sama

**Oprava:**
```javascript
let jmeno = document.getElementById("nameInput").value;
```

**Vysvětlení:**
- Použijeme jiný název proměnné pro hodnotu
- Získáme hodnotu jednou na začátku funkce

---

### 4. CHYBA: Nastavování cest bez jejich použití
**Původní kód:**
```javascript
let genderMale = "images/dite_muz.png"
let genderFemale = "images/dite_zena.png"
// Cesty se nikde nepoužijí!
```

**Problém:**
- Cesty k obrázkům se uložily do proměnných, ale nenastavily se elementu

**Oprava:**
```javascript
if (pohlavi == 'Male') {
    obrazek.src = 'images/dite_muz.png';
} else {
    obrazek.src = 'images/dite_zena.png';
}
```

**Vysvětlení:**
- Musíme přímo nastavit `src` atribut obrazku
- Podle vybraného pohlaví zvolíme správnou cestu

---

### 5. CHYBA: Chybějící kontrola vybraného pohlaví
**Původní kód:**
```javascript
const genderMale = document.getElementById("genderMale");
const genderFemale = document.getElementById("genderFemale");
// Nekontroluje se, který je vybraný!
```

**Problém:**
- Radio buttony se načtou, ale nekontroluje se jejich stav

**Oprava:**
```javascript
let pohlavi = '';
if (document.getElementById("genderMale").checked) {
    pohlavi = 'Male';
}
if (document.getElementById("genderFemale").checked) {
    pohlavi = 'Female';
}
```

**Vysvětlení:**
- `.checked` vlastnost zjistí, zda je radio button vybraný
- Uložíme si hodnotu vybraného pohlaví do proměnné

---

### 6. CHYBA: Mezery ve věkových kategoriích
**Původní kód:**
```javascript
if (ageInput >= 0 && ageInput <= 6 ) { }
if (ageInput > 7 && ageInput < 15 ) { } // Chybí věk 7!
if (ageInput >= 16 && ageInput < 26 ) { } // Chybí věk 15 a 26!
```

**Problém:**
- Věk 7 spadl mezi kategorie (není ani dítě ani školák)
- Věk 15 a 26 také spadly mezi kategorie

**Oprava:**
```javascript
else if (vek <= 6) { }
else if (vek >= 7 && vek <= 15) { }
else if (vek >= 16 && vek <= 26) { }
```

**Vysvětlení:**
- Použitím `else if` zajistíme návaznost kategorií
- Žádný věk nespadne mezi kategorie

---

### 7. CHYBA: Chybějící nastavení textového výsledku
**Původní kód:**
```javascript
// Výsledný text se nikde nenastavoval!
```

**Oprava:**
```javascript
text.innerHTML = jmeno + ' je dítě.';
```

**Vysvětlení:**
- Musíme nastavit text do HTML elementu pomocí `innerHTML`
- Text se skládá ze jména a životní kategorie

---

### 8. CHYBA: Špatné umístění onclick eventu
**Původní HTML:**
```html
<button type="button" id="processBtn">Process Data</button>
<img id="resultImage" onclick="processBtn()" alt="Result">
```

**Problém:**
- `onclick` byl na obrázku místo na tlačítku
- Funkce se jmenovala jinak než onclick event

**Oprava:**
```html
<button type="button" id="processBtn" onclick="zpracujData()">Process Data</button>
<img id="resultImage" alt="Result">
```

---

## 🔧 JAK FUNGUJE OPRAVENÝ KÓD

### KROK 1: Načtení hodnot z formuláře
```javascript
let jmeno = document.getElementById("nameInput").value;
let vek = document.getElementById("ageInput").value;
```
- Získáme jméno a věk z input polí
- `.value` vrátí text, který uživatel zadal

### KROK 2: Zjištění vybraného pohlaví
```javascript
let pohlavi = '';
if (document.getElementById("genderMale").checked) {
    pohlavi = 'Male';
}
```
- Zkontrolujeme, který radio button je vybraný
- `.checked` vrátí `true` nebo `false`

### KROK 3: Získání výstupních elementů
```javascript
let text = document.getElementById("resultText");
let obrazek = document.getElementById("resultImage");
```
- Načteme elementy, kam budeme zobrazovat výsledek

### KROK 4: Hlavní větvení podle věku
```javascript
if (vek < 0) {
    // Chybový stav
} else if (vek <= 6) {
    // Dítě (0-6 let)
} else if (vek >= 7 && vek <= 15) {
    // Školák (7-15 let)
}
```
- Podle věku určíme životní kategorii
- Každá kategorie má svůj if/else blok

### KROK 5: Vnořené větvení podle pohlaví
```javascript
if (pohlavi == 'Male') {
    text.innerHTML = jmeno + ' je student.';
    obrazek.src = 'images/student_muz.png';
} else {
    text.innerHTML = jmeno + ' je studentka.';
    obrazek.src = 'images/student_zena.png';
}
```
- V každé věkové kategorii kontrolujeme pohlaví
- Podle pohlaví nastavíme správný text a obrázek

### KROK 6: Zobrazení výsledku
```javascript
obrazek.style.display = 'block';
```
- Zobrazíme obrázek (na začátku byl skrytý)
- Text se automaticky zobrazí v HTML elementu

---

## 🎯 KLÍČOVÉ POZNATKY

### Co se naučit z těchto chyb:

1. **Názvy funkcí** - měly by popisovat, co funkce dělá
2. **HTML elementy vs. hodnoty** - nezapomeňte na `.value` a `.checked`
3. **Deklarace proměnných** - každou proměnnou deklarujte pouze jednou
4. **Nastavování vlastností** - nestačí uložit hodnotu, musíte ji i použít
5. **Logické větvení** - zajistěte, aby všechny případy byly pokryté
6. **Event handling** - `onclick` musí být na správném elementu
7. **Testování** - vždy otestujte všechny možné vstupy

### Nejčastější chyby začátečníků:
- Zapomenutí na `.value` u input polí
- Porovnávání objektů místo hodnot  
- Špatné pojmenování funkcí a proměnných
- Nedokončené logické operace
- Chybějící propojení HTML a JavaScript

---

## 📚 DALŠÍ KROKY

Pro zlepšení kódu můžete:

1. **Přidat validaci** - kontrola prázdných polí
2. **Zlepšit UX** - lepší chybové hlášky
3. **Optimalizovat** - kratší kód pomocí funkcí
4. **Rozšířit** - více kategorií nebo vlastností
5. **Stylovat** - lepší vzhled výsledků

Tento projekt je skvělým základem pro pochopení HTML formulářů, JavaScriptu a logického větvení!