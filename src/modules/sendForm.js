const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        succesMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const forms = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
    statusMessage.style.textDecorationColor = 'white';
    const phoneInputs = document.querySelectorAll('.form-phone');
    const nameInputs = document.querySelectorAll('.form-name');
    const messageInput = document.getElementById('form2-message');

    const validatePhone = (input) => {
        input.value = input.value.replace(/[^0-9+]/ig, '');
    };
    const validateName = (input) => {
        input.value = input.value.replace(/[^А-Яа-я ]/ig, '');
    };
    const validateMsg = (input) => {
        input.value = input.value.replace(/[^?.,:;"!А-Я0-9 ]+/ig, '');
    }
    const clearInputs = () => {
        forms.forEach((form) => {
            const inputs = form.querySelectorAll('input');
            inputs.forEach( (item) => {
                item.value = '';
        })
        })
    }
    phoneInputs.forEach((input) => {
        input.addEventListener('input', () => {
           validatePhone(input);
        });
    })
    nameInputs.forEach((input) => {
        input.addEventListener('input', () => {
            validateName(input);
        });
    })
    messageInput.addEventListener('input', () => {
        validateMsg(messageInput);
    })

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    };

    forms.forEach( (form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.append(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);

            let body = {};
            for (let val of formData.entries()) {
                body[val[0]] = val[1];
            };
            postData(body)
                .then((response) => { 
                    if(response.status !== 200){
                        throw new Error('network status is not 200')
                    };
                    statusMessage.textContent = succesMessage;
                    setTimeout(() => {
                        statusMessage.textContent = '';
                    }, 3000);
                    clearInputs();
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    setTimeout(() => {
                        statusMessage.textContent = '';
                    }, 3000);
                    clearInputs();
                    console.error(error);
                });
        })
    });

};

export default sendForm;