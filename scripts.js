const toggleButtons = document.querySelectorAll('.toggle-btn');
const forms = document.querySelectorAll('.form-content');

toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active from all buttons
        toggleButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Hide all forms
        forms.forEach(f => f.style.display = 'none');

        // Show selected form
        const target = document.getElementById(btn.dataset.target);
        target.style.display = 'flex';
        target.style.flexDirection = 'column';
    });
});