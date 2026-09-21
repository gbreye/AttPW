const mainDiv = document.getElementById('main');
const form = document.getElementById('form');

const products = [
    ['assets/S26.png', 'Smartphone S26', 'Smartphone GALAXY S26 ULTRA', 'smartphone', '1000,00'],
    ['assets/S25.webp', 'Smartphone S25', 'Smartphone GALAXY S25 ULTRA', 'smartphone', '900,00'],
    ['assets/Thinkpad.png', 'Thinkpad X1', 'Thinkpad X1 Carbon Gen 9', 'notebook', '2000,00'],
    ['assets/Mac.webp', 'Laptop MacBook Pro', 'Laptop MacBook Pro M3', 'notebook', '3000,00'],
    ['assets/Watch.png', 'Smartwatch S26', 'Smartwatch GALAXY S26 ULTRA', 'smartwatch', '500,00'],
    ['assets/Tab.avif', 'Tablet S10', 'Tablet GALAXY S10 ULTRA', 'tablet', '800,00'],
]

function renderCard(filter) {
    filter.forEach(product => {
        const card = document.createElement('div');
        const textArea = document.createElement('div');
        const imageArea = document.createElement('div');
        product.forEach((value, index) => {
            switch(index) {
                case 0:
                    const image = document.createElement('img');
                    image.src = value;
                    imageArea.appendChild(image);
                    break;
                case 1:
                    const title = document.createElement('h2');
                    title.textContent = value;
                    textArea.appendChild(title);
                    break;
                case 2:
                    const description = document.createElement('h4');
                    description.textContent = value;
                    textArea.appendChild(description);
                    break;
                case 3:
                    const category = document.createElement('p');
                    category.textContent = value;
                    textArea.appendChild(category);
                    break;
                case 4:
                    const price = document.createElement('p');
                    price.textContent = value;
                    textArea.appendChild(price);
                    break;
            }
        });
        card.appendChild(imageArea);
        card.appendChild(textArea);
        card.classList.add('card');
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


