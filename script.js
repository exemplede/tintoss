document.addEventListener('DOMContentLoaded', function() {
    const images = ['image/pdg.jpg', 'image/mais.jpg', 'image/sesame.jpg', 'image/sesame2.jpg', 'image/noix.jpg', 'image/soja.jpg']; // Liste des images
    const coverImage = document.querySelector('.cover-image img');
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        coverImage.style.opacity = 0;
        setTimeout(() => {
            coverImage.src = images[currentIndex];
            coverImage.style.opacity = 1;
        }, 1000); // Délai pour la transition
    }

    setInterval(changeImage, 5000); // Changer d'image toutes les 5 secondes
});
document.addEventListener('DOMContentLoaded', function() {
    const images = ['image/pdg.jpg', 'image/mais.jpg', 'image/sesame.jpg', 'image/sesame2.jpg', 'image/noix.jpg', 'image/soja.jpg'];
    const coverImage = document.querySelector('.cover-image img');
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        coverImage.style.opacity = 0;
        setTimeout(() => {
            coverImage.src = images[currentIndex];
            coverImage.style.opacity = 1;
        }, 1000); // Délai pour la transition
    }

    setInterval(changeImage, 5000); // Changer d'image toutes les 5 secondes

    // Fonction pour vérifier si un élément est visible
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Faire apparaître l'image dans la section carrée
    const hiddenImage = document.querySelector('.hidden-image');
    window.addEventListener('scroll', function() {
        if (isElementInViewport(hiddenImage)) {
            hiddenImage.style.display = 'block';
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner le footer
    var footer = document.querySelector('.dynamic-footer');

    // Fonction pour afficher le footer
    function showFooter() {
        var scrollPosition = window.scrollY + window.innerHeight;
        var footerPosition = document.body.offsetHeight - 50; // Ajustez selon vos besoins

        if (scrollPosition >= footerPosition) {
            footer.classList.add('show');
        } else {
            footer.classList.remove('show');
        }
    }

    // Appeler la fonction au défilement et au chargement
    window.addEventListener('scroll', showFooter);
    showFooter(); // Pour vérifier au chargement
});
// script.js

// script.js

// script.js

$(document).ready(function() {
    let selectedProduct = '';

    // Quand le bouton "Commander" est cliqué
    $('.commander-btn').on('click', function() {
        selectedProduct = $(this).data('product'); // Récupérer le nom du produit
        $('#productName').text(`Vous avez sélectionné : ${selectedProduct}`);
        $('#orderModal').modal('show'); // Afficher la modal
    });

    // Quand le bouton "Commander" dans la modal est cliqué
    $('#confirmOrder').on('click', function() {
        const nom = $('#nom').val();
        const prenom = $('#prenom').val();
        const ville = $('#ville').val();
        const quantity = $('#quantity').val();

        if (nom && prenom && ville && quantity) {
            const message = `Bonjour, je m'appelle ${prenom} ${nom} de ${ville}. Je suis intéressé par l'achat de ${quantity} sacs de ${selectedProduct}. Merci de me contacter pour plus de détails.`;
            const phone = '+22656603913'; // Remplacez par votre numéro de téléphone
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });
});

// script.js

$(document).ready(function() {
    let selectedAppartement = '';

    // Quand le bouton "Louer" est cliqué
    $('.louer-btn').on('click', function() {
        selectedAppartement = $(this).data('appartement'); // Récupérer le nom de l'appartement
        $('#appartementName').text(`Vous avez sélectionné : ${selectedAppartement}`);
        $('#rentModal').modal('show'); // Afficher la modal
    });

    // Quand le bouton "Louer" dans la modal est cliqué
    $('#confirmRent').on('click', function() {
        const nom = $('#nom').val();
        const prenom = $('#prenom').val();
        const ville = $('#ville').val();

        if (nom && prenom && ville) {
            const message = `Bonjour, je m'appelle ${prenom} ${nom} de ${ville}. Je suis intéressé par la location de ${selectedAppartement}. Merci de me contacter pour plus de détails.`;
            const phone = '+22656603913'; // Remplacez par votre numéro de téléphone
            const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
            window.open(url, '_blank');
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });
});
// script.js

// script.js

$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        // Validation du formulaire
        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const subject = $('#subject').val().trim();
        const message = $('#message').val().trim();

        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Veuillez remplir tous les champs.');
            return;
        }

        // Construire le message WhatsApp
        const whatsappMessage = `Nom: ${name}\nEmail: ${email}\nSujet: ${subject}\nMessage: ${message}`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=+22656603913&text=${encodeURIComponent(whatsappMessage)}`;

        // Rediriger vers WhatsApp
        window.open(whatsappURL, '_blank');
    });
});
