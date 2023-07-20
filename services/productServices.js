//GET

async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produto");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}

async function buscaProduto(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/produto?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}


// POST

export async function adicionarNovoProduto(name, imageUrl, price, category, description) {
    const conexao = await fetch('http://localhost:3000/produto', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            imageUrl: imageUrl,
            price: price,
            category: category,
            description: description

        })
    });

    const novoProduto = await conexao.json();
    return novoProduto;

}


export const productServices = {
    listaProdutos,
    buscaProduto,
    adicionarNovoProduto

}