//timer
    function startCountdown(duration, display) {
      let timer = duration, hours, minutes, seconds;
      setInterval(() => {
        hours = Math.floor(timer / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        display.textContent = `${hours.toString().padStart(2, '0')}:${
          minutes.toString().padStart(2, '0')}:${
          seconds.toString().padStart(2, '0')}`;

        if (--timer < 0) timer = 0;
      }, 1000);
    }

    window.onload = () => {
      const countdownDisplay = document.getElementById('timer');
      startCountdown(86400, countdownDisplay); // 24 jam dalam detik
    }
 
    document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Moemtaz siap!");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const sendEmailBtn = document.getElementById("sendEmail");
  const sendWABtn = document.getElementById("sendWA");

  // Kirim Email
  sendEmailBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const mailtoLink = `mailto:info@moemtaz.id?subject=Pesan dari ${name}&body=Nama: ${name}%0AEmail: ${email}%0APesan: ${message}`;
    window.location.href = mailtoLink;
  });

  // Kirim WhatsApp
  sendWABtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    const fullMessage = `Halo Moemtaz,%0ASaya ${name} (${email}) ingin menyampaikan:%0A${message}`;
    const phone = "6281234567890"; // Ganti dengan nomor WhatsApp Moemtaz
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(fullMessage)}`;

    window.open(waLink, "_blank");
  });
});
