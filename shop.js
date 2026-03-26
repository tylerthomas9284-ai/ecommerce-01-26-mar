// Shop page functionality
let currentFilters = {
    gender: 'all',
    category: 'all',
    price: 'all',
    sort: 'featured'
};

// Display products with filters
function displayProducts() {
    const container = document.getElementById('shopProducts');
    const noProducts = document.getElementById('noProducts');
    const productCount = document.getElementById('productCount');
    
    if (!container) return;

    // Filter products
    let filteredProducts = products.filter(product => {
        // Gender filter
        if (currentFilters.gender !== 'all' && product.gender !== currentFilters.gender) {
            return false;
        }

        // Category filter
        if (currentFilters.category !== 'all' && product.category !== currentFilters.category) {
            return false;
        }

        // Price filter
        if (currentFilters.price === 'under-30' && product.price >= 30) return false;
        if (currentFilters.price === '30-50' && (product.price < 30 || product.price > 50)) return false;
        if (currentFilters.price === 'over-50' && product.price <= 50) return false;

        return true;
    });

    // Sort products
    switch (currentFilters.sort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }

    // Update product count
    if (productCount) {
        productCount.textContent = `Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? 'product' : 'products'}`;
    }

    // Show/hide no products message
    if (filteredProducts.length === 0) {
        container.style.display = 'none';
        if (noProducts) noProducts.style.display = 'block';
        return;
    } else {
        container.style.display = 'grid';
        if (noProducts) noProducts.style.display = 'none';
    }

    // Display products
    container.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price}</p>
                <p class="product-category">${product.category} • ${product.gender === 'men' ? 'Men' : 'Women'}</p>
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');
}

// Apply filters
function applyFilters() {
    // Get gender filter
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    genderInputs.forEach(input => {
        if (input.checked) {
            currentFilters.gender = input.value;
        }
    });

    // Get category filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        currentFilters.category = categoryFilter.value;
    }

    // Get price filter
    const priceInputs = document.querySelectorAll('input[name="price"]');
    priceInputs.forEach(input => {
        if (input.checked) {
            currentFilters.price = input.value;
        }
    });

    // Get sort option
    const sortBy = document.getElementById('sortBy');
    if (sortBy) {
        currentFilters.sort = sortBy.value;
    }

    displayProducts();
}

// Reset filters
function resetFilters() {
    currentFilters = {
        gender: 'all',
        category: 'all',
        price: 'all',
        sort: 'featured'
    };

    // Reset form inputs
    document.querySelectorAll('input[name="gender"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    document.querySelectorAll('input[name="price"]').forEach(input => {
        input.checked = input.value === 'all';
    });
    
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) categoryFilter.value = 'all';
    
    const sortBy = document.getElementById('sortBy');
    if (sortBy) sortBy.value = 'featured';

    // Reset category buttons
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector('.category-btn').classList.add('active');

    displayProducts();
}

// Filter by gender (from quick category buttons)
function filterByGender(gender) {
    currentFilters.gender = gender;
    
    // Update radio buttons
    document.querySelectorAll('input[name="gender"]').forEach(input => {
        input.checked = input.value === gender;
    });

    // Update button states
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    displayProducts();
}

// Check URL parameters for filters
function checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.has('gender')) {
        currentFilters.gender = urlParams.get('gender');
        document.querySelectorAll('input[name="gender"]').forEach(input => {
            input.checked = input.value === currentFilters.gender;
        });
    }
    
    if (urlParams.has('category')) {
        currentFilters.category = urlParams.get('category');
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = currentFilters.category;
        }
    }
}

// Initialize shop page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('shopProducts')) {
        checkUrlParams();
        displayProducts();
    }
});
