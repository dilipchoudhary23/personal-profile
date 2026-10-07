const navWrap = document.querySelector('.nav-wrap');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
  navWrap.classList.toggle('scrolled', window.scrollY > 20);
  topBtn.classList.toggle('show', window.scrollY > 500);
});

menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

topBtn.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
