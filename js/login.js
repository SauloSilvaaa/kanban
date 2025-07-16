
const email = document.getElementById('email');
const password = document.getElementById('password');
const btnValidation = document.getElementById('validation');
const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');

    btnValidation.addEventListener('click', (event) => {
        event.preventDefault();

        const emailUser = email.value.trim();
        const passwordUser = password.value.trim();
        
        let errorValidate = validatefield(emailUser, passwordUser);

        if(errorValidate) {
            errorEmail.innerText = errorValidate;
        } else {
            localStorage.setItem("Useremail", emailUser);
            localStorage.setItem("Userpassword", passwordUser);
    
            window.location.href = "kanban.html";
        }

    });

    function validatefield(email, password) {

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
        if(!email || !emailRegex.test(email)) {
            return errorEmail.textContent = 'Please, enter a valid email';
        }

        if(!password || !passwordRegex.test(password)) {
            return errorPassword.textContent = 'Please, enter a correct password.'
        }
        
        return null
    }