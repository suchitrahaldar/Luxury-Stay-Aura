document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  const form = document.querySelector('.reserve-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form));
      alert(`Checking availability:\n${data.checkin} → ${data.checkout}\n${data.guests} guest(s)\n${data.room}`);
      // TODO: integrate backend/API
    });
  }
});