// Fecha de la boda (AÑO, MES-1, DÍA, HORA, MINUTO)
const weddingDate = new Date("April 18, 2026 17:00:00").getTime();

const timer = document.getElementById("timer");

const countdown = setInterval(function () {

  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `
    <div class="time-box">
      <span>${days}</span>
      <small>Días</small>
    </div>
    <div class="time-box">
      <span>${hours}</span>
      <small>Horas</small>
    </div>
    <div class="time-box">
      <span>${minutes}</span>
      <small>Min</small>
    </div>
    <div class="time-box">
      <span>${seconds}</span>
      <small>Seg</small>
    </div>
  `;

  if (distance < 0) {
    clearInterval(countdown);
    timer.innerHTML = "¡Es el gran día!";
  }

}, 1000);

// 💌 FORMULARIO A GOOGLE SHEETS
// =============================

// 👇 PEGA AQUÍ TU URL DE GOOGLE APPS SCRIPT
const scriptURL = "https://script.google.com/macros/s/AKfycby3D1oqEXatwv16jh6zsYyckJve9YfKgfAeK_XkGVT4dhHaPsVTtWLk0IG88dfjouvQxQ/exec";

document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    attendance: document.getElementById("attendance").value,
    guests: document.getElementById("guests").value
  };

  fetch(scriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(response => response.text())
  .then(result => {
    document.getElementById("responseMessage").innerText =
      "Gracias por confirmar asistencia 💍";
    document.getElementById("rsvpForm").reset();
  })
  .catch(error => {
    console.error("Error!", error.message);
  });
});

