function acheter(produit) {
    window.open(`formulaire_achat.html?produit=${encodeURIComponent(produit)}`, '_self');
}

function afficherDescription() {
    alert("Ismail Boutique est une boutique dédiée aux t-shirts uniques et personnalisables. Découvrez notre gamme variée !");
}

function naviguerVers(section) {
    const cible = document.querySelector(section);
    if (cible) {
        cible.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert("Section non trouvée !");
    }
}
function afficherMessageConfirmation() {
    const message = document.createElement('div');
    message.textContent = "L'achat a bien été effectué ! Merci pour votre commande.";
    message.style.backgroundColor = "#28a745"; 
    message.style.color = "white"; 
    message.style.padding = "10px";
    message.style.borderRadius = "5px";
    message.style.textAlign = "center";
    message.style.marginTop = "20px";
    const messageConfirmationDiv = document.getElementById('message-confirmation');
    messageConfirmationDiv.innerHTML = ''; 
    messageConfirmationDiv.appendChild(message);
}
function afficherMessageErreur(messageErreur) {
    const message = document.createElement('div');
    message.textContent = messageErreur;
    message.style.backgroundColor = "#dc3545"; 
    message.style.color = "white"; 
    message.style.padding = "10px";
    message.style.borderRadius = "5px";
    message.style.textAlign = "center";
    message.style.marginTop = "20px";

    const messageConfirmationDiv = document.getElementById('message-confirmation');
    messageConfirmationDiv.innerHTML = ''; 
    messageConfirmationDiv.appendChild(message);
}


function validerFormulaire(event) {
    event.preventDefault(); 
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const carteBancaire = document.getElementById('carte-bancaire').value;

    const nomEstValide = /^[A-Za-z\s]+$/.test(nom); 

    const emailEstValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 

    const carteBancaireEstValide = /^[0-9]+$/.test(carteBancaire); 

    if (!nom || !email || !carteBancaire) {
        afficherMessageErreur("Veuillez remplir tous les champs.");
    } else if (!nomEstValide) {
        afficherMessageErreur("Le nom ne doit pas contenir de chiffres ou de caractères spéciaux.");
    } else if (!emailEstValide) {
        afficherMessageErreur("L'email n'est pas valide. Veuillez entrer un email correct.");
    } else if (!carteBancaireEstValide) {
        afficherMessageErreur("Le numéro de carte bancaire doit contenir uniquement des chiffres.");
    } else {
        afficherMessageConfirmation();  
    }
}





