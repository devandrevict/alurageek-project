import { productServices } from "../services/productServices.js";
const produtosStarWars = document.querySelector("[data-starWars]");
const produtosConsoles = document.querySelector("[data-consoles]");
const produtosDiversos = document.querySelector("[data-diversos]");

export const novoProduto = (name, price, imageUrl, id) => {
    const card = document.createElement('div');
    card.className = "products__single";
    card.innerHTML = `
    <div class="products__single">
        <img src="${imageUrl}" alt="" class="products__image">
        <p class="products__name">${name}</p>
        <p class="products__price">R$${price}</p>
        <a href="" class="products__link">Ver Produto</a>
    </div>
    `;

    return card;
};

async function listarProdutosStarWars() {
    const listaProdutos = await productServices.listaProdutos();
    const produtosFiltrados = listaProdutos.filter(elemento => elemento.category === 'Star Wars');

    produtosFiltrados.forEach(elemento => produtosStarWars.appendChild(novoProduto(elemento.name, elemento.price, elemento.imageUrl, elemento.id, elemento.category)));
}

listarProdutosStarWars();

////////////////////////////////////////////////

async function listarProdutosConsole() {
    const listaProdutos = await productServices.listaProdutos();
    const produtosFiltrados = listaProdutos.filter(elemento => elemento.category === 'Consoles');

    produtosFiltrados.forEach(elemento => produtosConsoles.appendChild(novoProduto(elemento.name, elemento.price, elemento.imageUrl, elemento.id, elemento.category)));
}

listarProdutosConsole();

////////////////////////////////////////////////

async function listarProdutosDiversos() {
    const listaProdutos = await productServices.listaProdutos();
    const produtosFiltrados = listaProdutos.filter(elemento => elemento.category === 'Diversos');

    produtosFiltrados.forEach(elemento => produtosDiversos.appendChild(novoProduto(elemento.name, elemento.price, elemento.imageUrl, elemento.id, elemento.category)));
}

listarProdutosDiversos();

export const productsControllers = {
    novoProduto
}