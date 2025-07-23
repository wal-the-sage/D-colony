document.querySelectorAll('#MenuItems a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetPage = this.getAttribute('data-page');

        // Ensure the path is relative to the root
        if (targetPage) {
        const fullPath = location.origin + '/' + targetPage;
        window.location.href = fullPath;
        }
    });
});