 // Scroll-based fade-in animation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.classList.add('animate');
        }
      });
    });
    document.querySelectorAll('.fade-in-up, .fade-in').forEach(el => observer.observe(el));

    // Initial fade for hero section
    window.addEventListener('load', () => {
      document.querySelector('.hero').classList.add('fade-in-up');
    });