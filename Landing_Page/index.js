const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('swipe-up')) {
          entry.target.classList.add('animate-swipe-up');
        }
        if (entry.target.classList.contains('swipe-down')) {
          entry.target.classList.add('animate-swipe-down');
        }
        observer.unobserve(entry.target); 
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.swipe-up, .swipe-down').forEach(el => {
  observer.observe(el);
});
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('menu-toggle');
  const menuBar = document.getElementById('menu-bar');
  const iconBars = document.getElementById('icon-bars');
  const iconClose = document.getElementById('icon-close');

    let isOpen = false;
  toggleBtn.addEventListener('click', () => {
    
 isOpen = !isOpen;

      iconBars.classList.toggle("hidden", isOpen);
      iconClose.classList.toggle("hidden", !isOpen);
      menuBar.classList.toggle("scale-y-0", !isOpen);
      menuBar.classList.toggle("scale-y-100", isOpen);
  });
});
