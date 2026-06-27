
media (max-width: 375px) {

  .hero-section h1 {
    font-size: 1.8rem;
  }

  .hero-section {
    padding: 3rem 0;
    min-height: auto;
  }

  .stat-card {
    margin-bottom: 1rem;
  }

  #cta h2 {
    font-size: 1.6rem;
  }
}


media (max-width: 768px) {

  .hero-section h1 {
    font-size: 2.2rem;
  }

  .hero-section {
    padding: 4rem 0;
    min-height: auto;
    text-align: center;
  }

  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-card-wide {
    grid-column: span 1;
  }

  #cta h2 {
    font-size: 2rem;
  }

  .navbar-brand {
    font-size: 1.2rem;
  }
}


media (min-width: 1200px) {

  .hero-section h1 {
    font-size: 4rem;
  }

  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}



document.getElementById('currentYear').textContent = new Date().getFullYear();


window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNavbar');
  
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

 
const backToTop = document.createElement('button');
backToTop.id = 'backToTop';
backToTop.innerHTML = '↑';
backToTop.title = 'Retour en haut';
document.body.appendChild(backToTop);

// Afficher/cacher au scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Remonter en douceur au clic
backToTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


const darkModeToggle = document.getElementById('darkModeToggle');

// Appliquer le thème sauvegardé au chargement
const themeSauvegarde = localStorage.getItem('theme');
if (themeSauvegarde === 'dark') {
  document.body.classList.add('dark-mode');
  if (darkModeToggle) {
    darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
  }
}

// Toggle au clic
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
      // Passer en mode sombre
      localStorage.setItem('theme', 'dark');
      darkModeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
      // Passer en mode clair
      localStorage.setItem('theme', 'light');
      darkModeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
  });
}


 

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const email = document.getElementById('email');
    const sujet = document.getElementById('sujet');
    const message = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    let valide = true;

    // Vérifier Nom
    if (nom.value.trim() === '') {
      nom.classList.add('is-invalid');
      nom.classList.remove('is-valid');
      valide = false;
    } else {
      nom.classList.add('is-valid');
      nom.classList.remove('is-invalid');
    }

    // Vérifier Prénom
    if (prenom.value.trim() === '') {
      prenom.classList.add('is-invalid');
      prenom.classList.remove('is-valid');
      valide = false;
    } else {
      prenom.classList.add('is-valid');
      prenom.classList.remove('is-invalid');
    }

    // Vérifier Email avec regex
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) {
      email.classList.add('is-invalid');
      email.classList.remove('is-valid');
      valide = false;
    } else {
      email.classList.add('is-valid');
      email.classList.remove('is-invalid');
    }

    // Vérifier Sujet
    if (sujet.value === '') {
      sujet.classList.add('is-invalid');
      sujet.classList.remove('is-valid');
      valide = false;
    } else {
      sujet.classList.add('is-valid');
      sujet.classList.remove('is-invalid');
    }

    // Vérifier Message — minimum 20 caractères
    if (message.value.trim().length < 20) {
      message.classList.add('is-invalid');
      message.classList.remove('is-valid');
      valide = false;
    } else {
      message.classList.add('is-valid');
      message.classList.remove('is-invalid');
    }

    // Si tout est valide — afficher message de succès
    if (valide) {
      contactForm.reset();
      // Enlever les bordures vertes après reset
      [nom, prenom, email, sujet, message].forEach(field => {
        field.classList.remove('is-valid');
      });
      successMessage.style.display = 'block';

      // Cacher le message après 5 secondes
      setTimeout(function() {
        successMessage.style.display = 'none';
      }, 5000);
    }
  });
}