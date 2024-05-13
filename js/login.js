document.querySelector('.pass-toggle').addEventListener('click', (e) => {
    let toggler = e.target;
    if (toggler.classList.contains('fa-eye-slash')) {
        toggler.classList.replace('fa-eye-slash', 'fa-eye')
        toggler.previousSibling.type = "password"
    } else {
        toggler.classList.replace('fa-eye', 'fa-eye-slash')
        toggler.previousSibling.type = "text"

    }
})