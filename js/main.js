// Scroll animations
const sections = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){ entry.target.classList.add('visible'); }
  });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Portfolio filter
const filterButtons = document.querySelectorAll('.portfolio-controls button');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    portfolioItems.forEach(item => {
      item.style.display = (filter === 'all' || item.dataset.category === filter) ? 'block' : 'none';
    });
  });
});

// Hero parallax
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  hero.style.backgroundPositionY = window.scrollY * 0.5 + 'px';
});
