import { productServices } from "../services/productServices.js";


const form = document.getElementById("product-form");

async function postProduct(event) {
    event.preventDefault();

    const name = document.getElementById("newProducts__name").value;
    const imageUrl = document.getElementById("image-link").value;
    const price = parseInt(document.getElementById("newProducts__price").value);
    const category = document.getElementById("newProducts__category").value;
    const description = document.getElementById("newProducts__descricao").value;

    try {
        await productServices.adicionarNovoProduto(
            name,
            imageUrl,
            price,
            category,
            description
        );
        window.location.href = "/"
    } catch (e) {
        alert(e);
    }
}

form.addEventListener("submit", (event) => postProduct(event))

function renderizarProduto(name, imageUrl, price, id) {
    const listaProdutos = document.getElementById("lista-produtos");

    // Criar o elemento de card do produto
    const cardProduto = document.createElement("div");
    // cardProduto.classList.add("produto-card");
    cardProduto.className = "produto-card";

    // Definir o conteúdo do card do produto
    cardProduto.innerHTML = `
  <div class="products__single">
  <img src="${imageUrl}" alt="" class="products__image">
  <p class="products__name">${name}</p>
  <p class="products__price">R$${price}</p>
  <a href="" class="products__link">Ver Produto</a>
</div>
`;
    // Adicionar o card do produto à lista de produtos
    // listaProdutos.appendChild(cardProduto);
    return listaProdutos
}

