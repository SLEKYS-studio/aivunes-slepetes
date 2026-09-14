document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Booking form (front-end only demo — no backend is connected in this test project)
const bookingForm = document.getElementById('bookingForm');
const formStatus = document.getElementById('formStatus');

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!bookingForm.checkValidity()) {
    bookingForm.reportValidity();
    return;
  }

  const data = Object.fromEntries(new FormData(bookingForm).entries());

  formStatus.textContent =
    `Ačiū, ${data.name}! Jūsų užklausa suformuota. Šis puslapis yra testinis projektas ` +
    `be prijungto serverio, todėl duomenys niekur nesiunčiami ir nesaugomi — realiam ` +
    `naudojimui reikės prijungti formos apdorojimą (el. paštu arba per serverį).`;

  bookingForm.reset();
});
