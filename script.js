const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const genderMale = document.getElementById("genderMale");
const genderFemale = document.getElementById("genderFemale");

const processBtn = document.getElementById("processBtn");
const resultImage = document.getElementById("resultImage");

if (ageInput) < 0 {
    alert("Enter a valid age");
}
else {
    // default image
}

if (ageInput >= 0 && ageInput <= 6 ) {
    let genderMale = "images/dite_muz.png"
    let genderFemale = "images/dite_zena.png"
}

if (ageInput > 7 && ageInput < 15 ) {
    let genderMale = "images/skolak_muz.png"
    let genderFemale = "images/skolak_zena.png"
}

if (ageInput >= 16 && ageInput < 26 ) {
    let genderMale = "images/student_muz.png"
    let genderFemale = "images/student_zena.png"
}

if (ageInput >= 27 && ageInput < 64 ) {
    let genderMale = "images/dospely_muz.png"
    let genderFemale = "images/dospela_zena.png"
}

if (ageInput >= 65 ) {
    let genderMale = "images/duchodce_muz.png"
    let genderFemale = "images/duchodce_zena.png"
}
