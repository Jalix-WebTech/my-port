
      // =========================
      // SMOOTH SECTION SCROLLING
      // =========================
      function scrollSection(id) {
        const target = document.getElementById(id);

        if (!target) {
          console.warn(`Section with ID "${id}" not found.`);
          return;
        }

        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // =========================
      // SPLASH SCREEN
      // =========================
      window.addEventListener("load", () => {
        const splash = document.getElementById("splash");

        setTimeout(() => {
          splash.classList.add("out");

          setTimeout(() => {
            splash.remove();
          }, 900);
        }, 2200);
      });

      // =========================
      // TYPING EFFECT
      // =========================
      const roles = [
        "Full-Stack Engineer",
        "React Architect",
        "Node.js Developer",
        "UI/UX Engineer",
        "TypeScript Craftsman",
      ];

      let roleIndex = 0;
      let charIndex = 0;
      let deleting = false;

      const typedText = document.getElementById("typed-text");

      function typingLoop() {
        const currentRole = roles[roleIndex];

        if (!deleting) {
          typedText.textContent = currentRole.slice(0, charIndex + 1);
          charIndex++;

          if (charIndex === currentRole.length) {
            deleting = true;

            setTimeout(typingLoop, 1800);
            return;
          }
        } else {
          typedText.textContent = currentRole.slice(0, charIndex - 1);
          charIndex--;

          if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
          }
        }

        setTimeout(typingLoop, deleting ? 45 : 70);
      }

      setTimeout(typingLoop, 2500);


            function scrollSection(id) {
      const target = document.getElementById(id);

      if (!target) return;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

      // =========================
      // FADE-IN ANIMATIONS
      // =========================
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");

              // Animate skill bars
              const skillBars = entry.target.querySelectorAll(
                ".skill-bar[data-width]",
              );

              skillBars.forEach((bar) => {
                setTimeout(() => {
                  bar.style.width = bar.dataset.width;
                }, 200);
              });

              // Stop observing once animated
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
        },
      );

      document.querySelectorAll(".fade-in").forEach((element) => {
        observer.observe(element);
      });


  // =========================
  // WHATSAPP CONTACT FORM
  // =========================

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      // YOUR WHATSAPP NUMBER
      // Format:
      // country code + number
      // NO + sign
      // Example Nigeria: 2348012345678
      const phoneNumber = "2348155141240";

      // GET FORM VALUES
      const name = document.getElementById("fname").value.trim();
      const email = document.getElementById("femail").value.trim();
      const subject = document.getElementById("fsubject").value.trim();
      const message = document.getElementById("fmsg").value.trim();

      // VALIDATION
      if (!name || !email || !message) {
        alert("Please complete all required fields.");
        return;
      }

      // CREATE MESSAGE
      const whatsappMessage = `
Hello Jalixon 👋

You have a new portfolio message.

👤 Name: ${name}
📧 Email: ${email}
📌 Subject: ${subject}

💬 Message:
${message}
      `;

      // ENCODE MESSAGE
      const encodedMessage = encodeURIComponent(whatsappMessage);

      // WHATSAPP URL
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // OPEN WHATSAPP
      window.open(whatsappURL, "_blank");

      // SUCCESS UI
      const successBox = document.getElementById("form-success");
      const submitButton = document.querySelector(".form-submit");

      successBox.style.display = "block";

      submitButton.textContent = "Redirecting to WhatsApp...";

      // RESET FORM
      contactForm.reset();
    });
  }

      // =========================
      // ACTIVE NAVIGATION LINK
      // =========================
      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav-links a");

      window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop - 140;

          if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.dataset.section === current) {
            link.classList.add("active");
          }
        });
      });

      // =========================
// MOBILE NAVIGATION
// =========================

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNav = document.querySelector(".nav-links");

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });

  // CLOSE MENU WHEN LINK IS CLICKED
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.classList.remove("active");
      mobileNav.classList.remove("active");
    });
  });

  // CLOSE ON OUTSIDE CLICK
  document.addEventListener("click", (event) => {
    const isInsideNav = mobileNav.contains(event.target);
    const isButton = mobileMenuBtn.contains(event.target);

    if (!isInsideNav && !isButton) {
      mobileMenuBtn.classList.remove("active");
      mobileNav.classList.remove("active");
    }
  });
}

