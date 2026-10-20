// Menu do celular e ano do rodapé. O resto da página funciona sem JavaScript.
const botao = document.querySelector('.menu-botao');
const menu = document.getElementById('menu');

botao.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  botao.setAttribute('aria-expanded', String(aberto));
});

// fecha o menu ao escolher uma seção
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    menu.classList.remove('aberto');
    botao.setAttribute('aria-expanded', 'false');
  }
});

document.getElementById('ano').textContent = new Date().getFullYear();
