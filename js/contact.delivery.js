function formValidator(form) {

    function createError(input, text) {
        const parent = input.parentNode;
        const errorLabel = document.createElement('label');
        errorLabel.classList.add('error-label');
        errorLabel.textContent = text;
        parent.classList.add('error');
        parent.append(errorLabel)

    }

    function removeError(input) {
        const parent = input.parentNode;
        if (parent.classList.contains('error')) {
            parent.querySelector('.error-label').remove();
            parent.classList.remove('error');
        }

    }
    let result = true;

    const allInputs = form.querySelectorAll('input');

    for (const input of allInputs) {

        removeError(input);

        if (input.value == "" ) {
        console.log("Ошибка поля");
        createError(input, 'The field is not filled!');
        result = false;
        }
    }
    return result
}
document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault();

    formValidator(this);
    // Проводим валидацию формы
    const isValid = formValidator(this);

    // Если валидация успешна, отправляем форму
    if (isValid) {
        this.submit(); // Это отправит форму
    }
    
})