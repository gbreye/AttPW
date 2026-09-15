const mainDiv = document.getElementById('main');
const form = document.getElementById('form');


const products = [
    ['Smartphone S26', 'Smartphone GALAXY S26 ULTRA', 'smartphone', '1000,00'],
    ['Smartphone S25', 'Smartphone GALAXY S25 ULTRA', 'smartphone', '900,00'],
    ['Thinkpad X1', 'Thinkpad X1 Carbon Gen 9', 'notebook', '2000,00'],
    ['Laptop MacBook Pro', 'Laptop MacBook Pro M3', 'notebook', '3000,00']
]

function renderCard(filter) {
    filter.forEach(product => {
        const card = document.createElement('div');
        product.forEach((value, index) => {
            switch(index) {
                case 0:
                    const title = document.createElement('h2');
                    title.textContent = value;
                    card.appendChild(title);
                    break;
                case 1:
                    const description = document.createElement('p');
                    description.textContent = value;
                    card.appendChild(description);
                    break;
                case 2:
                    const category = document.createElement('p');
                    category.textContent = value;
                    card.appendChild(category);
                    break;
                case 3:
                    const price = document.createElement('p');
                    price.textContent = value;
                    card.appendChild(price);
                    break;
            }
        });
        mainDiv.appendChild(card);
        return card;
    });
}

renderCard(products);

form.addEventListener('input', (event) => {
  event.preventDefault();
  const typho = document.getElementById('search').value.toLowerCase();
  const filter = products.filter(products => {
    return products.slice(0,3).some(field => 
        field.toLowerCase().includes(typho)
    );
  });
    mainDiv.innerHTML = '';
    renderCard(filter);
});


