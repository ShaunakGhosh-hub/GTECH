// Get the sidebar and toggle menu elements
const sidebar = document.querySelector('.sidebar');
const toggleMenu = document.getElementById('toggleMenu');

// Add event listener to toggle menu
toggleMenu.addEventListener('click', () => {
  sidebar.classList.toggle('active'); // Toggle the 'active' class to show/hide the sidebar
});

// Get all links inside the sidebar
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

// Add event listener to each link
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Check if the sidebar is currently active (open) and the window width is less than or equal to 768 pixels
    if (sidebar.classList.contains('active') && window.matchMedia('(max-width: 768px)').matches) {
      sidebar.classList.remove('active'); // Remove 'active' class to hide the sidebar
    }
  });
});