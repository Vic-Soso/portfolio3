

/* NAV SCROLL EFFECT */
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 50);
});

/* FILTER */
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-buttons button");

  buttons.forEach(btn => btn.classList.remove("active-filter"));
  event?.target?.classList.add("active-filter");

  projects.forEach(project => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

/* MODAL */
function openModal(imageSrc) {
  const modal = document.getElementById("projectModal");
  const img = document.getElementById("modalImage");
  modal.style.display = "flex";
  img.src = imageSrc;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.style.display = "none";
  document.body.style.overflow = "";
}

/* Close modal on backdrop click */
document.getElementById("projectModal")?.addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});

/* Close modal on Escape key */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

/* HAMBURGER MENU */
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".menu-overlay");
  if (navLinks) navLinks.classList.toggle("active");
  if (hamburger) hamburger.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks")?.classList.remove("active");
    document.querySelector(".hamburger")?.classList.remove("active");
    document.querySelector(".menu-overlay")?.classList.remove("active");
  });
});

/* CURSOR — only on non-touch devices */
if (window.matchMedia("(pointer: fine)").matches) {
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");

  if (cursor && follower) {
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
        if (typeof gsap !== "undefined") gsap.to(follower, { scale: 1.8, backgroundColor: "rgba(255,79,216,0.2)", duration: 0.3 });
      });
      el.addEventListener("mouseleave", () => {
        if (typeof gsap !== "undefined") gsap.to(follower, { scale: 1, backgroundColor: "transparent", duration: 0.3 });
      });
    });
  }
}

/* NAV HOVER */
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mouseenter", () => {
    if (typeof gsap !== "undefined") gsap.to(link, { y: -3, duration: 0.25, ease: "power2.out" });
  });
  link.addEventListener("mouseleave", () => {
    if (typeof gsap !== "undefined") gsap.to(link, { y: 0, duration: 0.25 });
  });
});

/* CARD ENTRANCE ANIMATION */
if (typeof gsap !== "undefined") {
  gsap.from(".project-card", {
    opacity: 0, y: 40, duration: 0.6,
    stagger: 0.08, ease: "power2.out", delay: 0.2
  });
}
