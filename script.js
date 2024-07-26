document.addEventListener('DOMContentLoaded', () => {
    const headings = document.querySelectorAll('.toggle-heading');

    headings.forEach(heading => {
        heading.addEventListener('click', () => {
            const targetId = heading.getAttribute('data-target');
            const contentSection = document.getElementById(targetId);

            // Toggle the visibility of the clicked content section
            if (contentSection.style.display === 'block') {
                contentSection.style.display = 'none';
            } else {
                contentSection.style.display = 'block';
            }
        });
    });
});

