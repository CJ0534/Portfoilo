import './style.css'
import cjHero from '/cj-hero.png'
import myPhoto from '/my-photo.jpg'

document.querySelector('#app').innerHTML = `
  <!-- Floating Navigation -->
  <nav class="floating-nav">
    <div class="nav-container">
      <a href="#about" class="nav-item active">About</a>
      <a href="#projects" class="nav-item">Projects</a>
      <a href="#skills" class="nav-item">Skills</a>
      <a href="#github" class="nav-item">GitHub</a>
      <a href="#contact" class="nav-item">Contact</a>
    </div>
  </nav>

  <!-- About Section -->
  <section id="about" class="section">
    <div class="hero-split-container">
      <!-- Left Side - Info Area -->
      <div class="hero-left">
        <h1 class="hero-title" data-text="JANKUTA SAI CHAITHANYA">JANKUTA SAI CHAITHANYA</h1>
        <p class="hero-subtitle">Computer Science Engineer | Web Developer | Machine Learning Enthusiast</p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-label">ROLE</span>
            <span class="stat-value">Full Stack Developer</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">LOCATION</span>
            <span class="stat-value">India</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">STATUS</span>
            <span class="stat-value">Available for Work</span>
          </div>
        </div>
      </div>

      <!-- Right Side - Card Area -->
      <div class="hero-right">
        <div class="card-wrapper">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${cjHero}" class="hero-image" alt="CJ ?" />
              </div>
              <div class="flip-card-back">
                <img src="${myPhoto}" class="hero-image" alt="Me" />
              </div>
            </div>
          </div>
          <p class="click-hint">Click the card to reveal</p>
        </div>
        <p class="hero-description">I'm a Computer Science student passionate about building AI-powered, user-friendly web solutions. I thrive at the intersection of design, data, and real-world impact. I enjoy collaborating with diverse teams and constantly seek opportunities to learn new technologies and frameworks.</p>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="section">
    <div class="section-container">
      <h2 class="section-title">PROJECTS</h2>
      <p class="section-placeholder">Projects content coming soon...</p>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="section">
    <div class="section-container">
      <h2 class="section-title">SKILLS</h2>
      <p class="section-placeholder">Skills content coming soon...</p>
    </div>
  </section>

  <!-- GitHub Section -->
  <section id="github" class="section">
    <div class="section-container">
      <h2 class="section-title">GITHUB</h2>
      <p class="section-placeholder">GitHub content coming soon...</p>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section">
    <div class="section-container">
      <h2 class="section-title">CONTACT</h2>
      <p class="section-placeholder">Contact content coming soon...</p>
    </div>
  </section>
`

// Flip card functionality
const flipCard = document.querySelector('.flip-card');
const flipCardInner = document.querySelector('.flip-card-inner');

flipCard.addEventListener('click', () => {
  flipCardInner.classList.toggle('flipped');
});

// Smooth scroll navigation
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = item.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Update active nav item on scroll
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});
