import { productServices } from "../services/productServices.js";
import { novoProduto } from "../controllers/productsControllers.js";

async function buscarProduto(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await productServices.buscaProduto(dadosDePesquisa);
    const lista = document.querySelector('[data-todos-produtos]');
  
    lista.innerHTML = ''; // Limpa o conteúdo atual da lista
  
    busca.forEach(elemento => {
      const produto = novoProduto(elemento.name, elemento.price, elemento.imageUrl, elemento.id);
      produto.classList.add('selected-product');
      lista.appendChild(produto);
    });
    
    lista.classList.add('products__products'); // Adiciona a classe para aplicar o layout flexível
  }
  
  const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');
  botaoDePesquisa.addEventListener('click', buscarProduto);