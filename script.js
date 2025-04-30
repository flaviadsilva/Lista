document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');
    const lista = document.getElementById('lista-itens');
    const botaoLimpar = document.getElementById('limpar-lista');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const produto = document.getElementById('produto').value.trim();
      const quantidade = document.getElementById('quantidade').value;
  
      if (produto === '' || quantidade <= 0) {
        alert('Por favor, insira um produto válido e uma quantidade maior que 0.');
        return;
      }
  
      const item = document.createElement('li');
      item.textContent = `${produto} (${quantidade})`;
  
      item.addEventListener('click', () => {
        item.classList.toggle('comprado');
      });
  
      lista.appendChild(item);
  
      form.reset();
    });
  
    botaoLimpar.addEventListener('click', () => {
      lista.innerHTML = '';
    });
  });
  