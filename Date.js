function afficherJourEtDate() {
    const aujourdHui = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormatee = aujourdHui.toLocaleDateString('fr-FR', options);
    document.getElementById('jourDateDuJour').textContent = dateFormatee;
}