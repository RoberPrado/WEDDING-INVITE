// CONTADOR
const weddingDate = new Date("October 15, 2026 18:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("timer").innerHTML = days + " días";
}, 1000);


// VALIDACIÓN SIMPLE + ENVÍO
document.getElementById("rsvpForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value;
  const attendance = document.getElementById("attendance").value;
  const guests = document.getElementById("guests").value;

  fetch("AQUI_VA_TU_URL_DE_GOOGLE_SCRIPT", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      attendance: attendance,
      guests: guests
    })
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById("responseMessage").innerText = "Gracias por confirmar 💍";
  });
});

