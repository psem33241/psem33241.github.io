function setLanguage(language) {
    const languagePaths = {
        fr: "../2-fr/2-index-fr.html",
        en: "../3-eng/2-index-en.html",
    };

    if (languagePaths[language]) {
        window.location.href = languagePaths[language];
    } else {
        console.error(`Langue non prise en charge : ${language}`);
        alert("La langue sélectionnée n'est pas disponible.");
    }
}