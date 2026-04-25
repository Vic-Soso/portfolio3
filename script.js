/* =========================
   SHARED SCRIPT (index, about, contact)
========================= */

/* NAV SCROLL EFFECT */
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 50);
});

/* HERO ANIMATION (only runs if elements exist) */
if (typeof gsap !== "undefined") {
  if (document.querySelector(".hero-title")) {
    gsap.from(".hero-title", { y: 80, opacity: 0, duration: 1, ease: "power3.out" });
  }
  if (document.querySelector(".hero-text")) {
    gsap.from(".hero-text", { y: 50, opacity: 0, duration: 1, delay: 0.3 });
  }
  if (document.querySelector(".hero-btn")) {
    gsap.from(".hero-btn", { opacity: 0, y: 30, duration: 0.8, delay: 0.6, ease: "power3.out" });
  }
  if (document.querySelector(".glow")) {
    gsap.to(".glow", { x: 50, y: 30, duration: 6, repeat: -1, yoyo: true, ease: "sine.inOut" });
  }
}

/* NAV HOVER ANIMATION */
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mouseenter", () => {
    if (typeof gsap !== "undefined") gsap.to(link, { y: -3, duration: 0.25, ease: "power2.out" });
  });
  link.addEventListener("mouseleave", () => {
    if (typeof gsap !== "undefined") gsap.to(link, { y: 0, duration: 0.25 });
  });
});

/* CURSOR SYSTEM — only on non-touch devices */
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

if (cursor && follower && window.matchMedia("(pointer: fine)").matches) {
  let mouseX = 0, mouseY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  if (typeof gsap !== "undefined") {
    gsap.ticker.add(() => {
      gsap.to(follower, { x: mouseX, y: mouseY, duration: 0.15, ease: "power3.out" });
    });
  }

  document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("mouseenter", () => {
      if (typeof gsap !== "undefined") gsap.to(follower, { scale: 1.8, backgroundColor: "rgba(255,79,216,0.15)", duration: 0.3 });
    });
    el.addEventListener("mouseleave", () => {
      if (typeof gsap !== "undefined") gsap.to(follower, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
    });
  });
}

/* CONTACT MODAL */
function showModal(title, message) {
  const modal = document.getElementById("luxury-modal");
  if (!modal) return;
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-message").textContent = message;
  modal.classList.add("show");
}

function closeModal() {
  const modal = document.getElementById("luxury-modal");
  if (modal) modal.classList.remove("show");
}

/* HAMBURGER MENU */
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".menu-overlay");
  if (navLinks) navLinks.classList.toggle("active");
  if (hamburger) hamburger.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

/* Close menu on nav link click */
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks")?.classList.remove("active");
    document.querySelector(".hamburger")?.classList.remove("active");
    document.querySelector(".menu-overlay")?.classList.remove("active");
  });
});

/* SCROLL REVEAL */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".hidden").forEach(el => revealObserver.observe(el));
