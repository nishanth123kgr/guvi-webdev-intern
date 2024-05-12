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

const passwordInput = document.querySelector('.pass-input');
const passwordValidation = document.querySelector('.valid-password');

passwordInput.addEventListener('focus', () => {
    passwordValidation.style.display = 'block';
});

passwordInput.addEventListener('blur', () => {
    passwordValidation.style.display = 'none';
});

function validatePassword() {
    console.log('validating password');
    function updateErrors(errors = [0, 0, 0]) {


        errors.forEach((error, index) => {
            console.log(passwordErrorItems[index]);
            if (error) {
                if (passwordErrorItems[index].classList.contains('valid')) {
                    passwordErrorItems[index].classList.replace('valid', 'invalid');
                } else {
                    passwordErrorItems[index].classList.add('invalid');
                }
            } else {
                if (passwordErrorItems[index].classList.contains('invalid')) {
                    passwordErrorItems[index].classList.replace('invalid', 'valid');
                } else {
                    passwordErrorItems[index].classList.add('valid');
                }
            }
        });
    }

    const passwordErrorItems = passwordValidation.children[0].children[0].children;
    let errors = [0, 0, 0];
    const password = passwordInput.value;
    const passwordPattern = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;

    if (passwordPattern.test(password)) {
        updateErrors();
    } else {
        if (password.length < 8) {
            errors[0] = 1;
        }
        if (!/(?=.*\d)/.test(password)) {
            errors[1] = 1;
        }
        if (!/(?=.*[a-zA-Z])/.test(password)) {
            errors[2] = 1;
        }

        updateErrors(errors);

    }

    return errors.every(error => error === 0);
}


passwordInput.addEventListener('input', validatePassword);

// setInterval(() => {
//     let waves = document.querySelector('.waves');

//     let waveList = document.querySelectorAll('.wave');
//     if (waveList.length > 0) {
//         let lastWave = waveList[waveList.length - 1];
//         waves.removeChild(lastWave);
//         waves.insertBefore(lastWave, waves.firstChild);
//     }

//     console.log(document.querySelectorAll('.wave').length);

// }, 1000);
