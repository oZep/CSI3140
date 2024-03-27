function fetchProductData() {
    const xhrProducts = new XMLHttpRequest();
    xhrProducts.open('GET', 'products.json', true);

    xhrProducts.onload = function() {
        if (xhrProducts.status === 200) {
            const products = JSON.parse(xhrProducts.responseText);

            fetchDescriptions(products);
        } else {
            console.error('Failed to load product data.');
        }
    };

    xhrProducts.send();
}

function fetchDescriptions(products) {
    const xhrDescriptions = new XMLHttpRequest();
    xhrDescriptions.open('GET', 'descriptions.json', true);

    xhrDescriptions.onload = function() {
        if (xhrDescriptions.status === 200) {
            const descriptions = JSON.parse(xhrDescriptions.responseText);

            fetchFullImages(products, descriptions);
        } else {
            console.error('Failed to load descriptions.');
        }
    };

    xhrDescriptions.send();
}


function fetchFullImages(products, descriptions) {
    const xhrFullImages = new XMLHttpRequest();
    xhrFullImages.open('GET', 'full_images.json', true);

    xhrFullImages.onload = function() {
        if (xhrFullImages.status === 200) {
            const fullImages = JSON.parse(xhrFullImages.responseText);
            fetchThumbnailImages(products, descriptions, fullImages);
        } else {
            console.error('Failed to load full-size images.');
        }
    };

    xhrFullImages.send();
}

// Function to fetch thumbnail images for products
function fetchThumbnailImages(products, descriptions, fullImages) {
    const xhrThumbnailImages = new XMLHttpRequest();
    xhrThumbnailImages.open('GET', 'thumbnail_images.json', true);

    xhrThumbnailImages.onload = function() {
        if (xhrThumbnailImages.status === 200) {
            const thumbnailImages = JSON.parse(xhrThumbnailImages.responseText);

            displayProductThumbnails(products, descriptions, fullImages, thumbnailImages);
        } else {
            console.error('Failed to load thumbnail images.');
        }
    };

    xhrThumbnailImages.send();
}


function displayProductThumbnails(products, descriptions, fullImages, thumbnailImages) {
    const productBody = document.getElementById('productBody');
    productBody.innerHTML = ''; 

    products.forEach(product => {
        const row = document.createElement('tr');
        const description = descriptions.find(desc => desc.id === product.id);
        row.innerHTML = `
            <td><img src="${thumbnailImages.find(img => img.id === product.id).filename}" alt="${product.title}" class="thumbnail" onmouseover="increaseSize(this)" onmouseout="resetSize(this)"></td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td><button class="description-button" data-id="${product.id}" onclick="showDescription('${description ? description.description : ''}',${product.id})">Show Description</button></td>
        `;
        productBody.appendChild(row);
    });
}
 
function showDescription(description, id) {
    const descriptionElement = document.querySelector(`[data-id="${id}"]`);
    console.log(description);
    descriptionElement.innerHTML = description;
}

window.addEventListener('load', fetchProductData);

function increaseSize(img) {    
    img.style.width = '200px';
}       

function resetSize(img) {
    img.style.width = '100px';
}