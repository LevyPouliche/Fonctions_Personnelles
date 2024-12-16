// Vérifie si l'API Notification est disponible
if ('Notification' in window) {
    // Demander la permission de notification
    Notification.requestPermission().then(permission => {
      console.log(`Permission pour les notifications : ${permission}`);
    });
  
    // Sélectionner le formulaire
    const form = document.getElementById('notificationForm');
  
    // Gérer la soumission du formulaire
    form.addEventListener('submit', event => {
      event.preventDefault(); // Empêche l'envoi réel du formulaire
  
      // Récupérer le message saisi
      const messageInput = document.getElementById('message');
      const message = messageInput.value;
  
      // Afficher une notification si la permission est accordée
      if (Notification.permission === 'granted') {
        new Notification('Formulaire envoyé !', {
          body: `Votre message : ${message}`,
          icon: 'https://example.com/icon.png', // Remplacez par une URL valide pour une icône
        });
      } else {
        alert('Les notifications ne sont pas activées.');
      }
  
      // Réinitialiser le formulaire
      form.reset();
    });
  } else {
    console.error("L'API Notification n'est pas prise en charge par ce navigateur.");
  }
  
  