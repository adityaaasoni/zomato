// Simple click events for header menu
document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('header ul li');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You clicked on "${item.innerText}"`);
        });
    });

    // Search input animation
    const searchInput = document.querySelector('main input');
    searchInput.addEventListener('focus', () => {
        searchInput.style.backgroundColor = '#ffebee';
    });
    searchInput.addEventListener('blur', () => {
        searchInput.style.backgroundColor = 'white';
    });
});
