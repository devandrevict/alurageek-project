import { productServices } from "../services/productServices.js";
import { novoProduto } from "../controllers/productsControllers.js";

const produtos = document.querySelector("[data-todos-produtos]");

async function listarProdutosStarWars() {
  const listaProdutos = await productServices.listaProdutos();
  const produtosFiltrados = listaProdutos.filter(elemento => elemento.category === 'Star Wars');

  produtos.innerHTML = '';

  produtosFiltrados.forEach(elemento => {
    const produtoElement = novoProduto(elemento.name, elemento.price, elemento.imageUrl, elemento.id, elemento.category);
    produtos.appendChild(produtoElement);
  });
}

const botaoVerTudoStarWars = document.querySelector('[data-category-starWars]');
botaoVerTudoStarWars.addEventListener('click', listarProdutosStarWars);


////////////////////////////////////////////////////////

async function listarProdutosConsoles() {
  const listaProdutos = await productServices.listaProdutos();
  const produtosFiltrados = listaProdutos.filter(elemento => elemento.category === 'Consoles');

  produtos.innerHTML = '';

  produtosFiltrados.forEach(elemento => {
    const produtoElement = novoProduto(elemento.name, elemento.price, elemento.imageUrl, elemento.id, elemento.category);
    produtos.appendChild(produtoElement);
  });
}

const botaoVerTudoConsoles = document.querySelector('[data-category-consoles]');
botaoVerTudoConsoles.addEventListener('click', listarProdutosConsoles);

//////////////////////////////////////////////////////////////

async function listarProdutosDiversos() {
  const listaProdutos = await productServices.listaProdutos();
  const produtosFiltrados = listaProdutos.filter(elemento => elemento.category === 'Diversos');

  produtos.innerHTML = '';

  produtosFiltrados.forEach(elemento => {
    const produtoElement = novoProduto(elemento.name, elemento.price, elemento.imageUrl, elemento.id, elemento.category);
    produtos.appendChild(produtoElement);
  });
}

const botaoVerTudoDiversos = document.querySelector('[data-category-diversos]');
botaoVerTudoDiversos.addEventListener('click', listarProdutosDiversos);