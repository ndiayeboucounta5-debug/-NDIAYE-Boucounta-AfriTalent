
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


 

