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
const heroLeft = document.querySelector('.hero-left');
const heroDescription = document.querySelector('.hero-description');
const clickHint = document.querySelector('.click-hint');
const heroSplitContainer = document.querySelector('.hero-split-container');

let isRevealed = false;
let isAnimating = false;

flipCard.addEventListener('click', () => {
  if (isAnimating) return; // Prevent clicks during animation
  isAnimating = true;

  if (!isRevealed) {
    // REVEAL SEQUENCE
    // 1. Move to side
    heroSplitContainer.classList.add('revealed');

    // 2. Flip card after movement starts
    setTimeout(() => {
      flipCardInner.classList.add('flipped');
    }, 800);

    // 3. Reveal details after flip
    setTimeout(() => {
      heroLeft.classList.add('reveal-active');
      heroDescription.classList.add('reveal-active');
      clickHint.classList.add('hidden');
      isRevealed = true;
      isAnimating = false;
    }, 1400);

  } else {
    // HIDE SEQUENCE (RESET)
    // 1. Hide details
    heroLeft.classList.remove('reveal-active');
    heroDescription.classList.remove('reveal-active');

    // 2. Flip card back
    setTimeout(() => {
      flipCardInner.classList.remove('flipped');
    }, 500);

    // 3. Move back to center
    setTimeout(() => {
      heroSplitContainer.classList.remove('revealed');
      clickHint.classList.remove('hidden');
      isRevealed = false;
      isAnimating = false;
    }, 1100);
  }
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
