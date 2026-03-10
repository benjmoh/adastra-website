// Shooting star effect and section fade-in behaviour
// --------------------------------------------------
// Shooting stars:
// - Each star has a bright head and a soft, fading tail.
// - Movement, angle, length, opacity, and spawn timing are all slightly randomised
//   to feel natural and cinematic.

function createShootingStar() {
  const container = document.querySelector(".shooting-stars");
  if (!container) return;

  const star = document.createElement("div");
  star.className = "shooting-star";

  const track = document.createElement("div");
  track.className = "shooting-star__track";

  const head = document.createElement("div");
  head.className = "shooting-star__head";

  const tail = document.createElement("div");
  tail.className = "shooting-star__tail";

  track.appendChild(head);
  track.appendChild(tail);
  star.appendChild(track);

  // Spawn only within the visible viewport so streaks are always on-screen
  const topPercent = 10 + Math.random() * 70; // 10–80% of viewport height
  const leftPercent = Math.random() * 90; // 0–90% of viewport width
  const angle = -10 + Math.random() * 20; // -10deg to +10deg

  // Faster, longer streaks for a more cinematic feel
  const distance = 360 + Math.random() * 160; // 360–520px travel distance
  const drift = -10 + Math.random() * 20; // slight vertical drift
  const duration = 0.6 + Math.random() * 0.4; // 0.6–1.0s (faster)
  const opacity = 0.4 + Math.random() * 0.3; // 0.4–0.7

  const tailLength = 80 + Math.random() * 90; // 80–170px

  star.style.top = `${topPercent}%`;
  star.style.left = `${leftPercent}%`;

  track.style.setProperty("--star-distance", `${distance}px`);
  track.style.setProperty("--star-drift", `${drift}px`);
  track.style.setProperty("--star-opacity", opacity.toString());
  track.style.transform = `rotate(${angle}deg)`;
  tail.style.width = `${tailLength}px`;

  track.style.animation = `shooting-star-flight ${duration}s ease-out forwards`;

  container.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, duration * 1000 + 200);
}

function startShootingStars() {
  // A very small handful at the beginning so the user occasionally
  // sees one early, then spaced-out, atmospheric occurrences.
  for (let i = 0; i < 2; i++) {
    setTimeout(createShootingStar, 800 + i * 900);
  }

  function scheduleNext() {
    const interval = 8000 + Math.random() * 10000; // every 8–18 seconds
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

