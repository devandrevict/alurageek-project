document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('[data-form-form]')
    const errorMessages = document.querySelector('[data-form-errorMessages]')

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário
    
        // Limpa as mensagens de erro
        errorMessages.innerHTML = '';
    
        // Obtém os valores dos campos
        const name = document.querySelector('[data-form-name]');
        const message = document.querySelector('[data-form-message]');
    
        // Validações
        if (name === '' || message === '') {
            errorMessages.innerHTML = 'Por favor, preencha todos os campos.';
        } else if (name.length > 40) {
            errorMessages.innerHTML = 'O campo "Nome" deve ter no máximo 40 caracteres.';
        } else if (message.length > 120) {
            errorMessages.innerHTML = 'O campo "Mensagem" deve ter no máximo 120 caracteres.';
        } else {
            // Envie a mensagem (substitua esta parte com a lógica do envio do formulário)
            alert('Mensagem enviada com sucesso!');
            form.reset();
        }
    });
    
})
