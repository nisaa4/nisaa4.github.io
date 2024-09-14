// untuk navbar scroll
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll(".navbar a , .footer-middle a");

window.addEventListener("scroll", function () {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Adjusted offset for better effect
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navlinks.forEach((link) => {
    link.classList.remove("active"); // menghapus kelas active dari link lainnya
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Fungsi ketika di klik maka akan ke aboutme tanpa url #aboutme : view portfolio
document.addEventListener("DOMContentLoaded", function () {
  const viewaboutme = document.getElementById("viewToAboutMe");

  viewaboutme.addEventListener("click", function (event) {
    event.preventDefault(); // Mencegah perubahan default dari link
    document.querySelector("#aboutme").scrollIntoView({ behavior: "smooth" }); // Gulir halus ke elemen dengan ID 'aboutme'
  });
});

// Fungsi untuk smooth scroll saat menu navigasi diklik - Event listener
navlinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1); // Ambil id target tanpa tanda '#'
    const targetSection = document.getElementById(targetId);

    // Scroll ke posisi target section dengan smooth behavior
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// transisi logo
const sr = ScrollReveal({
  distance: "40px",
  duration: 2500,
  reset: false,
});

// transisi dari kiri ke kanan logo
sr.reveal(".logo", { delay: 200, origin: "left" });
// // dari atas ke bawah untuk navbar
sr.reveal(".navbar", { delay: 400, origin: "top" });

//tansisi home-text
sr.reveal(".home-text span", { delay: 600, origin: "top" });
sr.reveal(".home-text h1", { delay: 680, origin: "left" });
sr.reveal(".home-text p", { delay: 750, origin: "right" });

sr.reveal(".home-img", { delay: 1000, origin: "right" });

// Inisialisasi ScrollReveal bagian skill semua
ScrollReveal().reveal(".skill-category", {
  delay: 200,
  distance: "50px",
  easing: "ease-in-out",
  origin: "bottom",
  interval: 100,
});

// Inisialisasi ScrollReveal bagian portpolio
ScrollReveal().reveal(".portfolio-items", {
  delay: 200,
  distance: "50px",
  easing: "ease-in-out",
  origin: "right",
  interval: 100,
});

// Inisialisasi ScrollReveal bagian about me, animasi awal
ScrollReveal().reveal(".about-item", {
  delay: 200,
  distance: "50px",
  easing: "ease-in-out",
  origin: "left",
  interval: 100,
});

// Inisialisasi ScrollReveal bagian contact me
ScrollReveal().reveal(".contact-container", {
  delay: 200,
  distance: "50px",
  easing: "ease-in-out",
  origin: "bottom",
  interval: 100,
});

document.addEventListener("DOMContentLoaded", function () {
  const portfolioLinks = document.querySelectorAll(".portfolio-link");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const filter = link.getAttribute("href").slice(1); // Ambil ID tanpa tanda #

      // Jika yang diklik adalah tautan "All"
      if (filter === "portfolio") {
        // Tampilkan semua item portofolio
        portfolioItems.forEach(function (item) {
          item.style.display = "flex";
        });
      } else {
        // Semua item portofolio disembunyikan
        portfolioItems.forEach(function (item) {
          item.style.display = "none";
        });

        // Tampilkan item portofolio yang sesuai dengan kategori yang dipilih
        const selectedItems = document.getElementById(filter);
        if (selectedItems) {
          selectedItems.style.display = "flex"; // Menggunakan flex karena portfolio-item adalah flex container
        }
      }
    });
  });
});
