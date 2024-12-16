// Stocker la date du jour sans l'heure.
let Aujourdhui = new Date().toISOString().split('T')[0];

// Récupérer la valeur entrée dans DateActuelle.
document.getElementById('DateActuelle').value = Aujourdhui;

// Sauvegarder la date dans localStorage.
document.getElementById('SaveDate').addEventListener('click', function() {
    const SelectedDate = document.getElementById('DateSortie').value;
    if (SelectedDate) {
        localStorage.setItem('SavedDate', SelectedDate);
    }
});

//Charger la date lors du chargement de la page.
window.onload = function(){
    const SavedDate = localStorage.getItem('SavedDate');
    if(SavedDate){
        document.getElementById('DateSortie').value = SavedDate;
    }
}