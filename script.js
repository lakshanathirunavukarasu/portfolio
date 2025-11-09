// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

  // Select all fade-in sections
  const sections = document.querySelectorAll(".fade-in-up");

  // Create an intersection observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2, // Trigger when 20% of the section is visible
    }
  );

  // Observe each section
  sections.forEach(section => {
    observer.observe(section);
  });
});
