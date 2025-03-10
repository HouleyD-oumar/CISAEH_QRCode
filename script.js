const people=[
/*     {
        firstName: "Oumar",
        lastName: "Guissé",
        email: "oumar.bigtenor@gmail.com",
        department: "Informatique L3",
        phone: "620 24 83 23"
    },
    {
        firstName: "Mamadou Hanafiou",
        lastName: "BARRY",
        email: "hanafioubarry046@gmail.com",
        department: "Gestion L3",
        phone: "628 41 3796"
    },
    {
        firstName: "Thierno Aliou",
        lastName: "Diallo",
        email: "diallouthiernoaliou1235@gmail.com",
        department: "Gestion L3",
        phone: "628 94 69 21"
    },
    {
        firstName: "Ritte",
        lastName: "Millimouno",
        email: "millimounoritte7@gmail.com",
        department: "Administration Publique L3",
        phone: "629 77 03 13"
    },
    {
        firstName: "Mariama Ciré",
        lastName: "BAH",
        email: "dadafinecharmante@gmail.com",
        department: "Langue Anglaise L2",
        phone: "611 59 68 08"
    },
    {
        firstName: "Boubacar Sidy",
        lastName: "Diallo",
        email: "",
        department: "Sociologie L2",
        phone: "612 28 30 23"
    },
    {
        firstName: "Kemoko",
        lastName: "Cissoko",
        email: "kemokocissoko5@gmail.com",
        department: "Sociologie L2",
        phone: "621 88 63 86"
    },
    {
        firstName: "Mamadou Saliou",
        lastName: "Keïta",
        email: "mamadousaliouk04@gmail.com",
        department: "Sociologie L2",
        phone: "625 83 78 23"
    },
    {
        firstName: "Koï-koï",
        lastName: "Drovogui",
        email: "koikoigrovogui04@gmail.com",
        department: "Gestion L3",
        phone: "612 24 38 41"
    },
    {
        firstName: "Saran",
        lastName: "Kamano",
        email: "",
        department: "Informatique L2",
        phone: "622 44 93 32"
    },
    {
        firstName: "Mohamed",
        lastName: "Bérété",
        email: "hanafioubarry046@gmail.com",
        department: "Énergies Photovoltaïques L2",
        phone: "629 87 63 54"
    },
    {
        firstName: "Abdoulaye",
        lastName: "Camara",
        email: "",
        department: "Sociologie L2",
        phone: "625 89 18 83"
    },
    {
        firstName: "Mohamed Lamine",
        lastName: "Camara",
        email: "Mohamed.lam627@gmail.com",
        department: "Administration Publique L3",
        phone: "627 82 12 57"
    },
    {
        firstName: "Ibrahima Sory I",
        lastName: "Sylla",
        email: "Ibrahimasoryisylla30@gmail.com",
        department: "Economie L3",
        phone: "611 78 30 43"
    },
    {
        firstName: "Fatoumata Djouldé",
        lastName: "BAH",
        email: "fdiouldebah@gmail.com",
        department: "Mathématiques L3",
        phone: "624 31 94 13"
    },
    {
        firstName: "Fatoumata Seydi",
        lastName: "Diallo",
        email: "seydifdiallo@gmail.com",
        department: "Mathématiques L3",
        phone: "627 19 09 10"
    },
    {
        firstName: "Abdoulaye",
        lastName: "Diallo",
        email: "",
        department: "Sociologie L2",
        phone: "620 50 65 73"
    },
    {
        firstName: "Abdoulaye",
        lastName: "Diallo",
        email: "",
        department: "Biologie L3",
        phone: ""
    } */
   
        {
            firstName: "Abdoulaye",
            lastName: "Bangoura",
            email: "nabetenin@gmail.com",
            department: "Mathématiques L3",
            phone: "624 22 22 33"
        },
        {
            firstName: "Mamadou Oury",
            lastName: "Barry",
            email: "bmamadououry278@gmail.com",
            department: "Mathématiques L3",
            phone: "621 94 90 48"
        },
        {
            firstName: "Mamadou Kolon",
            lastName: "Keita",
            email: "kolonkeita@gmail.com",
            department: "Sociologie Licence 1",
            phone: "629 13 95 42"
        },
        {
            firstName: "Ibrahima",
            lastName: "Barry",
            email: "ibrahimsempy@gmail.com",
            department: "Informatique L3",
            phone: "626 81 83 84"
        }
        ,
        {
            firstName: "Ibrahima Sory",
            lastName: "Cissé",
            email: "ibrahimsempy@gmail.com",
            department: "Lettre Moderne L2",
            phone: "626 81 83 84"
        }
        ,
        {
            firstName: "Fatoumata Binta Djoli ",
            lastName: "Diallo",
            email: "timadiallo618@gmail.com",
            department: "Langue Anglaise L2",
            phone: "621 41 47 82"
        }
]


// ij

document.addEventListener('DOMContentLoaded', function() {
    // Éléments DOM
    const container = document.getElementById('qr-codes-container');
    const form = document.getElementById('qr-form');
    const loadingIndicator = document.getElementById('loading');
    const successMessage = document.getElementById('success-message');
    
    // Fonction pour générer un QR code
    function generateQRCode(person) {
        // Contenu du QR code
        const info = `Nom: ${person.firstName} ${person.lastName}\nDépartement: ${person.department}\nEmail: ${person.email || 'Non renseigné'}\nTéléphone: ${person.phone || 'Non renseigné'}`;
    
        // Créer un conteneur pour le QR code
        const qrDiv = document.createElement('div');
        qrDiv.className = 'qr-code';
    
        // Générer le QR code
        const qrCode = new QRCode(qrDiv, {
            text: info,
            width: 256,
            height: 256,
            colorDark: "#0072c6", // Couleur principale
            colorLight: "#ffffff"
        });
    
        // Attendre que le QR code soit complètement rendu avant d'ajouter le logo
        setTimeout(() => {
            const canvas = qrDiv.querySelector('canvas');
            if (!canvas) {
                console.error('Canvas non trouvé dans le QR code');
                finishQRCode();
                return;
            }
            
            const ctx = canvas.getContext('2d');
            const logo = new Image();
            
            // Utiliser un chemin absolu pour le logo
            const logoPath = './images/logo.png';
            console.log('Tentative de chargement du logo depuis:', logoPath);
            
            // Gérer les erreurs de chargement du logo
            logo.onerror = function() {
                console.error('Impossible de charger le logo:', logoPath);
                console.warn('Le QR code sera généré sans logo.');
                finishQRCode(canvas);
            };
            
            // Définir la source après avoir configuré les gestionnaires d'événements
            logo.onload = function() {
                console.log('Logo chargé avec succès');
                console.log('Dimensions du logo:', logo.width, 'x', logo.height);
                
                const logoSize = 64;
                const x = (canvas.width / 2) - (logoSize / 2);
                const y = (canvas.height / 2) - (logoSize / 2);
                
                // Dessiner un fond blanc circulaire pour le logo
                ctx.save();
                ctx.beginPath();
                ctx.arc(x + (logoSize/2), y + (logoSize/2), logoSize/2, 0, Math.PI * 2, true);
                ctx.fillStyle = '#FFFFFF';
                ctx.fill();
                
                // Dessiner le logo
                ctx.drawImage(logo, x, y, logoSize, logoSize);
                ctx.restore();
                
                console.log('Logo dessiné sur le canvas aux coordonnées:', x, y, 'avec taille:', logoSize);
                finishQRCode(canvas);
            };
            
            // Définir la source après avoir configuré les gestionnaires d'événements
            logo.src = logoPath;
        }, 100); // Délai pour s'assurer que le QR code est rendu
        
        function finishQRCode(canvas) {
            // Ajouter les informations de la personne
            const infoDiv = document.createElement('div');
            infoDiv.className = 'qr-info';
            infoDiv.innerHTML = `<strong>${person.firstName} ${person.lastName}</strong><br>${person.department}`;
            qrDiv.appendChild(infoDiv);
            
            // Rendre le QR téléchargeable
            const link = document.createElement('a');
            if (canvas) {
                link.href = canvas.toDataURL();
                link.download = `${person.firstName}_${person.lastName}_QRCode.png`;
                link.textContent = `Télécharger`;
            } else {
                link.textContent = `Téléchargement non disponible`;
            }
            qrDiv.appendChild(link);
            
            // Ajouter le QR code au conteneur (au début pour qu'il apparaisse en haut)
            container.insertBefore(qrDiv, container.firstChild);
            
            // Masquer l'indicateur de chargement
            loadingIndicator.classList.remove('active');
            
            // Afficher le message de succès
            successMessage.textContent = `QR Code généré avec succès pour ${person.firstName} ${person.lastName}!`;
            successMessage.classList.add('active');
            
            // Masquer le message après un délai
            setTimeout(() => {
                successMessage.classList.remove('active');
            }, 3000);
            
            // Faire défiler jusqu'au nouveau QR code
            qrDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Générer les QR codes pour les personnes existantes
    people.forEach(generateQRCode);
    
    // Gérer la soumission du formulaire
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher le rechargement de la page
        
        // Récupérer les valeurs du formulaire
        const firstName = document.getElementById('prenom').value.trim();
        const lastName = document.getElementById('nom').value.trim();
        const department = document.getElementById('departement').value.trim();
        const licence = document.getElementById('Licence').value;
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('telephone').value.trim();
        
        // Validation basique
        if (!firstName || !lastName || !department) {
            alert('Veuillez remplir au moins le prénom, le nom et le département.');
            return;
        }
        
        // Afficher l'indicateur de chargement
        loadingIndicator.classList.add('active');
        
        // Formater le département avec la licence
        const formattedDepartment = licence ? `${department} L${licence}` : department;
        
        // Créer un nouvel objet personne
        const newPerson = {
            firstName: firstName,
            lastName: lastName,
            department: formattedDepartment,
            email: email,
            phone: phone
        };
        
        // Simuler un délai pour montrer l'indicateur de chargement (peut être supprimé en production)
        setTimeout(() => {
            // Générer le QR code pour la nouvelle personne
            generateQRCode(newPerson);
            
            // Réinitialiser le formulaire
            form.reset();
        }, 500);
    });

}); // End of DOMContentLoaded event listener
