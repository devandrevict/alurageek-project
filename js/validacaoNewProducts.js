document.getElementById('product-form').addEventListener('submit', function (event) {

    event.preventDefault();

    const productName = document.getElementById('newProducts__name').value;
    const productPrice = document.getElementById('newProducts__price').value;
    const productDescription = document.getElementById('newProducts__descricao').value;

    if (productName.trim() === '' || productPrice.trim() === '' || productDescription.trim() === '') {
        document.getElementById('errorMessages').innerHTML = 'Preencha todos os campos.';
    } else {
        document.getElementById('errorMessages').innerHTML = '';

        adicionarProduto(productName, productPrice);

        document.getElementById('newProducts__name').value = '';
        document.getElementById('newProducts__price').value = '';
        document.getElementById('newProducts__descricao').value = '';
    }
})

function adicionarProduto(name, price) {
    console.log('Produto adicionado:', name, price);
}