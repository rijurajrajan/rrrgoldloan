// Sidebar Toggle
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.querySelector('.sidebar');
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

// Close sidebar when link clicked
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => sidebar.classList.remove('active'));
});

// Auto-Rotating Testimonials
let tIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
if (testimonials.length > 0) {
  setInterval(() => {
    testimonials[tIndex].classList.remove('active');
    tIndex = (tIndex + 1) % testimonials.length;
    testimonials[tIndex].classList.add('active');
  }, 4000);
}

// AOS Animation Initialize
AOS.init({
  duration: 800,
  once: true
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  });
});

// Scroll-to-Top Button
const topBtn = document.createElement('button');
topBtn.innerHTML = '⬆';
topBtn.classList.add('scroll-top');
document.body.appendChild(topBtn);
topBtn.style.cssText = `
  position:fixed;bottom:30px;right:30px;background:#ffd700;color:#111;
  border:none;border-radius:50%;padding:12px 16px;cursor:pointer;
  font-size:1.2rem;display:none;z-index:999;
`;
window.addEventListener('scroll', () => {
  topBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
});
topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
