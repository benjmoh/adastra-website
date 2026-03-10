// Shooting star effect and section fade-in behaviour
// --------------------------------------------------
// - The shooting star animation is controlled by createShootingStar()
//   and startShootingStars() below.
// - To tweak the effect, adjust the randomisation ranges or timing
//   inside createShootingStar() and startShootingStars().

function createShootingStar() {
  const container = document.querySelector(".shooting-stars");
  if (!container) return;

  const star = document.createElement("div");
  star.className = "shooting-star";

  const topPercent = Math.random() * 60 + 5;
  const leftPercent = Math.random() * 80 - 20;
  const duration = Math.random() * 1.4 + 1.4;
  const delay = Math.random() * 0.6;

  star.style.top = `${topPercent}%`;
  star.style.left = `${leftPercent}%`;
  star.style.transform = "rotate(12deg)";
  star.style.transition = `transform ${duration}s ease-out, opacity ${
    duration * 0.8
  }s ease-out`;
  star.style.transitionDelay = `${delay}s`;

  container.appendChild(star);

  requestAnimationFrame(() => {
    star.style.opacity = "1";
    star.style.transform = "translateX(220px) rotate(12deg)";
  });

  setTimeout(() => {
    star.style.opacity = "0";
    setTimeout(() => {
      star.remove();
    }, 600);
  }, (duration + delay) * 1000);
}

function startShootingStars() {
  // Create a few initial stars so the effect is visible quickly.
  for (let i = 0; i < 3; i++) {
    setTimeout(createShootingStar, i * 700);
  }

  // Then schedule additional stars at random intervals.
  function scheduleNext() {
    const interval = Math.random() * 7000 + 6000; // 6–13 seconds
    setTimeout(() => {
      createShootingStar();
      scheduleNext();
    }, interval);
  }

  scheduleNext();
}

function setupFadeInSections() {
  const sections = document.querySelectorAll(".fade-section");
  if (!("IntersectionObserver" in window) || sections.length === 0) {
    sections.forEach((s) => s.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  sections.forEach((section) => observer.observe(section));
}

window.addEventListener("DOMContentLoaded", () => {
  startShootingStars();
  setupFadeInSections();
});

