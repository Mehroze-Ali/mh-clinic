/**
 * MH Medical & Dental Clinic - Premium UI Interactions
 * Production Quality Vanilla JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sticky Navbar Logic with Scroll Threshold
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Intersection Observer for Fade-in Animations (Premium feel)
  // Select all elements with the 'fade-in-section' class
  const fadeInElements = document.querySelectorAll(".fade-in-section");

  const fadeOptions = {
    root: null, // use the viewport
    rootMargin: "0px",
    threshold: 0.15, // trigger when 15% of the element is visible
  };

  const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add class to trigger CSS transition
        entry.target.classList.add("is-visible");
        // Unobserve once animated to prevent repeating
        observer.unobserve(entry.target);
      }
    });
  }, fadeOptions);

  // Attach observer to elements
  fadeInElements.forEach((element) => {
    fadeObserver.observe(element);
  });

  // 3. Mobile Menu Toggle (Basic implementation for completeness)
  const mobileBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");
  const navActions = document.querySelector(".nav-actions");

  mobileBtn.addEventListener("click", () => {
    // Toggle mobile menu visibility by overriding CSS display
    const isExpanded = navLinks.style.display === "flex";

    if (isExpanded) {
      navLinks.style.display = "none";
      navActions.style.display = "none";
    } else {
      navLinks.style.display = "flex";
      navLinks.style.flexDirection = "column";
      navLinks.style.position = "absolute";
      navLinks.style.top = "90px";
      navLinks.style.left = "0";
      navLinks.style.width = "100%";
      navLinks.style.backgroundColor = "#FFFFFF";
      navLinks.style.padding = "2rem";
      navLinks.style.boxShadow = "0 10px 20px rgba(0,0,0,0.05)";

      navActions.style.display = "flex";
      navActions.style.position = "absolute";
      navActions.style.top = "250px";
      navActions.style.left = "2rem";
    }
  });
});
