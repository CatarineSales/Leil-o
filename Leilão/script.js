// Lance mínimo definido
const minBid = 500;

// Elementos do DOM
const bidAmountInput = document.getElementById('bidAmount');
const auctionForm = document.getElementById('auctionForm');
const messageDiv = document.getElementById('message');

// Manipula o envio do formulário
auctionForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o reload da página ao enviar o formulário

    const userBid = parseFloat(bidAmountInput.value);

    // Limpa a mensagem anterior
    messageDiv.textContent = '';
    messageDiv.style.color = '';

    if (isNaN(userBid)) {
        showMessage('Por favor, insira um valor válido.', 'error');
        return;
    }

    // Verifica se o lance é maior ou igual ao lance mínimo
    if (userBid >= minBid) {
        showMessage(`Lance de R$ ${userBid.toFixed(2)} foi aceito com sucesso!`, 'success');
    } else {
        showMessage(`Erro: O lance mínimo é de R$ ${minBid.toFixed(2)}.`, 'error');
    }

    // Limpa o campo de entrada após o envio
    bidAmountInput.value = '';
});

// Função para exibir mensagens
function showMessage(message, type) {
    messageDiv.textContent = message;

    if (type === 'success') {
        messageDiv.style.color = 'green';
    } else if (type === 'error') {
        messageDiv.style.color = 'red';
    }
}
