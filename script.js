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
// HERO BACKGROUND SLIDER
const heroSection = document.querySelector('.hero');
const heroImages = [
  'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZHxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1662434923031-b9bf1b6c10e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZCUyMGpld2VsbHN8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1710753495848-bf084f9cee54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z29sZCUyMGpld2VsbHN8ZW58MHx8MHx8fDA%3D',
  'https://media.istockphoto.com/id/486592060/photo/indian-jewellery.webp?a=1&b=1&s=612x612&w=0&k=20&c=rC_AgoOUaLzqclvtyNiQsLTs8UtxUOL38myHTD9xrGU='
];

let currentHeroIndex = 0;

// Set initial image
heroSection.style.setProperty('--bg-image', `url(${heroImages[0]})`);
heroSection.style.backgroundImage = `url(${heroImages[0]})`;

// Auto slide every 5 seconds
setInterval(() => {
  currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
  heroSection.style.backgroundImage = `url(${heroImages[currentHeroIndex]})`;
}, 5000);
// 🌄 Background Image Slider for "Our Key Services"
const featuresSection = document.querySelector('.features');
const serviceBgImages = [
  'https://media.istockphoto.com/id/1276740597/photo/indian-traditional-gold-necklace.jpg?s=612x612&w=0&k=20&c=OYp1k0OVJObYq9hqVK_r6NwYa_W54km4nya1R-ovIUY=',
  'https://media.istockphoto.com/id/486574032/photo/nuptial-chain.jpg?s=612x612&w=0&k=20&c=zy5-WeEK5wDiyZURVULNvBVREmAYDl82UKSWTyIjI-4=',
  'https://images.unsplash.com/photo-1708251079562-313ec8005354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdvbGQlMjBqZXdlbGxzfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1612813411142-8eb444ff0dff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGpld2VsbHN8ZW58MHx8MHx8fDA%3D'
];

let currentServiceBg = 0;

if (featuresSection) {
  featuresSection.style.backgroundImage = `url(${serviceBgImages[0]})`;

  setInterval(() => {
    currentServiceBg = (currentServiceBg + 1) % serviceBgImages.length;
    featuresSection.style.backgroundImage = `url(${serviceBgImages[currentServiceBg]})`;
  }, 500); // change every 5 seconds
}
