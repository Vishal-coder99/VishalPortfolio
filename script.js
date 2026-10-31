// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Nav active-state on scroll =====
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink(){
  let current = sections[0].id;
  const scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === current);
  });
}

window.addEventListener('scroll', setActiveLink);
setActiveLink();

// ===== About tabs =====
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
  });
});

// ===== Contact form (front-end only demo) =====
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();

  // NOTE: This is a front-end only demo.
  // To actually receive messages, connect this form to a backend/email
  // service (e.g. Formspree, EmailJS, or your own API endpoint).
  note.textContent = `Thanks, ${name || 'there'}! Your message is ready to send — connect a form service to make this live.`;
  form.reset();

  setTimeout(() => { note.textContent = ''; }, 6000);
});
