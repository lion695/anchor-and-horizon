document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbarNav');
    const toggler = document.querySelector('.navbar-toggler');

    if (!navbar || !toggler || typeof bootstrap === 'undefined') {
        return;
    }

    const collapse = bootstrap.Collapse.getOrCreateInstance(navbar, { toggle: false });
    const mobileTabletQuery = window.matchMedia('(max-width: 991.98px)');

    navbar.addEventListener('click', (event) => {
        const interactiveElement = event.target.closest('a, button');

        if (!interactiveElement || interactiveElement === toggler || !mobileTabletQuery.matches) {
            return;
        }

        collapse.hide();
    });
});