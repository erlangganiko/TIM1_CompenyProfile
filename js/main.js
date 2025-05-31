//Email??
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("2GAhWzEnLOer6GJhm"); // Ganti dengan public key dari EmailJS

  const form = document.getElementById("contactForm");
  const status = document.getElementById("statusMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      status.textContent = "Mohon isi semua field.";
      status.style.color = "red";
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send("landingpage", "template_zy5trxl", templateParams)
      .then(() => {
        status.textContent = "Pesan berhasil dikirim via Email!";
        status.style.color = "green";
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        status.textContent = "Gagal mengirim email.";
        status.style.color = "red";
      });
  });
});

// Kirim WhatsApp
document.addEventListener("DOMContentLoaded", function () {
  const whatsappBtn = document.getElementById("whatsappLink");

  const nomorWhatsApp = "6281220869603"; // Ganti dengan nomor WA kamu (format internasional, tanpa +)
  const pesanDefault = "Halo, saya tertarik dengan layanan Moemtaz.";

  whatsappBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const link = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesanDefault)}`;
    window.open(link, "_blank"); // Buka di tab baru
  });
});


//Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("solid");
    navbar.classList.remove("transparent");
  } else {
    navbar.classList.add("transparent");
    navbar.classList.remove("solid");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("solid");
  } else {
    navbar.classList.add("transparent");
  }
});

//Navbar-nav
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.remove("transparent");
    navbar.classList.add("solid");
  } else {
    navbar.classList.add("transparent");
    navbar.classList.remove("solid");
  }
});
//toggle class active
const navbarnav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

// Klik diluar sidebar unutk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
    navbarnav.classList.remove("active");
  }
});

// ========== Scroll to Top Button ==========
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (scrollTopBtn) {
    scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ========== AOS Init ==========
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    once: true,
  });
});

// ========== Breakpoint Resize Detection ==========
window.addEventListener("resize", () => {
  const w = window.innerWidth;
  if (w < 768) {
    console.log("Small screen (<768px)");
  } else if (w < 1024) {
    console.log("Medium screen");
  } else {
    console.log("Large screen");
  }
});

window.addEventListener("load", () => {
  const lastVisit = localStorage.getItem("moemtaz_last_reload");
  const now = new Date().getTime();
  const oneDay = 24 * 60 * 60 * 1000;

  // Jangan reload dua kali dalam sesi yang sama
  if (sessionStorage.getItem("moemtaz_already_reloaded")) return;

  if (!lastVisit || now - lastVisit > oneDay) {
    localStorage.setItem("moemtaz_last_reload", now);
    sessionStorage.setItem("moemtaz_already_reloaded", "true");

    // Tampilkan animasi sebelum reload
    const overlay = document.getElementById("reloadOverlay");
    if (overlay) {
      overlay.classList.add("show");
    }

    setTimeout(() => {
      location.reload();
    }, 600);
  }
});


function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

window.addEventListener("load", () => {
  const visited = getCookie("moemtaz_reload");

  window.addEventListener("load", () => {
  const visited = getCookie("moemtaz_reload");

  if (!visited) {
    // Set cookie dulu
    setCookie("moemtaz_reload", "1", 1); // expires in 1 day

    // TUNDA beberapa milidetik agar cookie tersimpan
    setTimeout(() => {
      const overlay = document.getElementById("reloadOverlay");
      if (overlay) overlay.classList.add("show");

      setTimeout(() => {
        location.reload();
      }, 800); // delay animasi sebelum reload
    }, 100); // beri delay agar cookie benar-benar tersimpan
  }
});

});

  document.addEventListener("DOMContentLoaded", function () {
    new Typed(".typed-text", {
      strings: [
        "Solusi Digital Modern.",
        "Partner Bisnis Inovatif.",
        "Moemtaz untuk Masa Depan."
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  });

