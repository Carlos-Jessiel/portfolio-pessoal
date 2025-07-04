function carregarSecao(secao) {
    fetch(`pages/${secao}.html`) // Carrega a página da seção selecionada pela pasta pages
        .then(res => res.text())
        .then(html => {
            document.getElementById('mensagem').innerHTML = html;

            // Função criada para mostrar mensagem em tela ao enviar o formulário de contato
            if (secao === 'contato') {
                ativarEnvioFormularioContato();
            }
        });
}

// Carrega o conteúdo da seção selecionada
document.querySelectorAll('.menu h1').forEach(item => {
    item.addEventListener('click', () => {
        const secao = item.getAttribute('data-section');
        carregarSecao(secao); // Carrega o conteúdo da seção selecionada
    });
});

/*
    Evita o reload da página quando o formulário de contato é enviado
    Mostra a mensagem de sucesso e limpa o formulário
*/
function ativarEnvioFormularioContato() {
    const form = document.querySelector('form');
    const mensagemEnvio = document.getElementById('mensagem-envio');

    if (form && mensagemEnvio) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            mensagemEnvio.textContent = 'Mensagem enviada com sucesso!';
            mensagemEnvio.style.color = '#007bff';
            form.reset();
        });
    }
}