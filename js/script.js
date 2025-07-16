'use strict'
const email = document.getElementById('email');
const name = document.getElementById('name');
const btnValidation = document.getElementById('validation');
const errorEmail= document.getElementById('error-email');
const errorName= document.getElementById('error-name');


    btnValidation.addEventListener('click', (event) => {
        event.preventDefault();

        const emailUser = email.value.trim();
        const nameUser = name.value.trim();
        
        let errorValidate = validatefield(emailUser, nameUser);

        if(errorValidate) {
            error.textContent = validatefield;
        }

        localStorage.setItem("Useremail", emailUser);
        localStorage.setItem("Username", nameUser);
    });

    function validatefield(email, name) {

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        const nameUserRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
        
        if(!email || !emailRegex.test(email)) {
            return errorEmail.textContent = 'Please, enter a valid email';
            
        }

        if(!name || !nameUserRegex.test(name)) {
            return errorName.textContent = 'Please, enter a valid name. Must contain only letters and spaces.';
        }
        
        return null
    }