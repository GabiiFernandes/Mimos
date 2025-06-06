const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});


// Função para envio do formulário da página Monte sua Box
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formBox');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nome = document.getElementById('nome').value;
      const box = document.getElementById('box').value;
      const itens = document.getElementById('itens').value;
      const data = document.getElementById('data').value;
      const obs = document.getElementById('obs').value;

      const mensagem = `Olá! Meu nome é *${nome}* e gostaria de montar uma box personalizada.\n\n*Tipo da Box:* ${box}\n*Itens desejados:* ${itens}\n*Data para entrega:* ${data}\n*Observações:* ${obs}\n\nAguardo retorno ☺
`;

      const url = `https://wa.me/5547988676628?text=${encodeURIComponent(mensagem)}`;

      window.open(url, '_blank');
    });
  }
});
