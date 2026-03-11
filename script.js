// Shooting star effect and section fade-in behaviour
// --------------------------------------------------
// Shooting stars:
// - Each star has a bright head and a soft, fading tail.
// - Movement, angle, length, opacity, and spawn timing are all slightly randomised
//   to feel natural and cinematic.
// - Spawn frequency is higher when the hero is in view, and lower when
//   the user scrolls into the main content so it is less distracting.

let heroInView = true;

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
  const viewportWidth = window.innerWidth || 800;
  const isMobile = viewportWidth <= 768;

  // Spawn within the visible viewport, slightly biased to the upper-mid area
  const topPercent = (isMobile ? 15 : 10) + Math.random() * (isMobile ? 50 : 70);

  // Randomise direction so not all stars travel to the right
  const direction = Math.random() < 0.5 ? 1 : -1; // 1: left -> right, -1: right -> left

  // Starting horizontal position in px, then converted to %
  let startLeftPx;
  if (direction === 1) {
    // Left-to-right: start slightly off-left to mid screen
    startLeftPx = -viewportWidth * 0.2 + Math.random() * viewportWidth * 0.4; // -20%..20%
  } else {
    // Right-to-left: start mid-right to slightly off-right
    startLeftPx = viewportWidth * 0.6 + Math.random() * viewportWidth * 0.4; // 60%..100%
  }
  const leftPercent = (startLeftPx / viewportWidth) * 100;

  const angle = -10 + Math.random() * 20; // -10deg to +10deg

  // Faster, longer streaks for a more cinematic feel, scaled to viewport width
  const baseDistance = viewportWidth * (isMobile ? 0.7 : 0.5);
  const distance = baseDistance * (0.9 + Math.random() * 0.4); // 0.9–1.3x base
  const drift = -10 + Math.random() * 20; // slight vertical drift
  const duration = 0.6 + Math.random() * 0.4; // 0.6–1.0s
  const opacity = 0.4 + Math.random() * 0.3; // 0.4–0.7
  // Tail length proportional to viewport width so it feels consistent on desktop and mobile
  const baseTail = viewportWidth * (isMobile ? 0.25 : 0.18); // 25% width on mobile, 18% on desktop
  const tailLength = baseTail * (0.9 + Math.random() * 0.3); // 0.9–1.2x base

  star.style.top = `${topPercent}%`;
  star.style.left = `${leftPercent}%`;

  track.style.setProperty("--star-distance", `${direction * distance}px`);
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
  function scheduleNext() {
    // More frequent when the hero is in view (user is taking in the first impression),
    // less frequent deeper in the content so it doesn't distract from reading.
    const min = heroInView ? 5000 : 8000;  // 5–10s in hero, 8–25s in content
    const max = heroInView ? 10000 : 25000;
    const interval = min + Math.random() * (max - min);
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

   // Fade in hero logo + title on initial load
   const heroIntro = document.querySelector(".hero-intro");
   if (heroIntro) {
     // Slight delay so it feels intentional and cinematic
     setTimeout(() => {
       heroIntro.classList.add("visible");
     }, 200);
   }

   // Track whether the hero is currently in view to adjust shooting star frequency
   const heroSection = document.querySelector(".hero");
   if (heroSection && "IntersectionObserver" in window) {
     const heroObserver = new IntersectionObserver(
       (entries) => {
         entries.forEach((entry) => {
           heroInView = entry.isIntersecting;
         });
       },
       {
         threshold: 0.35, // consider hero "in view" when ~1/3rd is visible
       }
     );

     heroObserver.observe(heroSection);
   } else {
     // Fallback: assume hero is in view at load; user scrolling will be less dynamic
     heroInView = true;
   }
});

