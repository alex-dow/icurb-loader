var strings = {
    en: require('./strings/en.icu'),
    fr: require('./strings/fr.icu')
};

function setLabels(selectedLanguage) {
    document.getElementById('ok').innerHTML = strings[selectedLanguage]['root']['buttons']['OK'];
    document.getElementById('cancel').innerHTML = strings[selectedLanguage]['root']['buttons']['cancel'];
    document.getElementById('save').innerHTML = strings[selectedLanguage]['root']['buttons']['save'];
}


var selectedLanguage = 'en';

var langToggle = document.getElementById('toggle');

langToggle.addEventListener('click', function(event) {
    if (selectedLanguage === 'en') {
        selectedLanguage = 'fr';
    } else {
        selectedLanguage = 'en';
    }

    setLabels(selectedLanguage);
});

setLabels('en');
