// Products Data
const products = [
    {
        id: 'men-tshirt-1',
        name: "Men's Classic Cotton T-Shirt",
        price: 29,
        image: 'https://images.unsplash.com/photo-1666358085449-a10a39f33942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjYXN1YWwlMjBjb3R0b24lMjB0LXNoaXJ0fGVufDF8fHx8MTc3MzMyNTc3Nnww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'T-Shirts',
        gender: 'men',
        description: 'Premium quality cotton t-shirt perfect for everyday wear. Soft, breathable fabric with a comfortable fit.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        id: 'men-jeans-1',
        name: "Men's Slim Fit Denim Jeans",
        price: 59,
        image: 'https://images.unsplash.com/photo-1714167911035-136e96efd239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBzbGltJTIwZGVuaW0lMjBqZWFuc3xlbnwxfHx8fDE3NzMzMjU3NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Jeans',
        gender: 'men',
        description: 'Stylish slim fit jeans with a modern cut. Made from durable denim with stretch for all-day comfort.',
        sizes: ['28', '30', '32', '34', '36', '38']
    },
    {
        id: 'men-hoodie-1',
        name: "Men's Casual Hoodie",
        price: 45,
        image: 'https://images.unsplash.com/photo-1772521239245-844fe3a0d66e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBjYXN1YWwlMjBob29kaWV8ZW58MXx8fHwxNzczMzI1Nzc2fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Hoodies',
        gender: 'men',
        description: 'Cozy pullover hoodie with adjustable drawstring hood. Perfect for layering or wearing on its own.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        id: 'men-shirt-1',
        name: "Men's Plaid Shirt",
        price: 39,
        image: 'https://images.unsplash.com/photo-1771340183956-6f69d2d08f43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBwbGFpZCUyMHNoaXJ0fGVufDF8fHx8MTc3MzMyNTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Casual Shirts',
        gender: 'men',
        description: 'Classic plaid button-down shirt with a relaxed fit. Great for casual outings or dressed-up occasions.',
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
        id: 'women-dress-1',
        name: "Women's Summer Floral Dress",
        price: 49,
        image: 'https://images.unsplash.com/photo-1578404449256-0de908ee34ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHN1bW1lciUyMGZsb3JhbCUyMGRyZXNzfGVufDF8fHx8MTc3MzMyNTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Dresses',
        gender: 'women',
        description: 'Beautiful floral print dress perfect for warm weather. Lightweight fabric with a flattering silhouette.',
        sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
        id: 'women-hoodie-1',
        name: "Women's Oversized Hoodie",
        price: 42,
        image: 'https://images.unsplash.com/photo-1674695670808-0480f62cc7d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG92ZXJzaXplZCUyMGhvb2RpZXxlbnwxfHx8fDE3NzMzMjU3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Hoodies',
        gender: 'women',
        description: 'Trendy oversized hoodie with a relaxed fit. Ultra-soft material for maximum comfort and style.',
        sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    {
        id: 'women-jeans-1',
        name: "Women's High Waist Jeans",
        price: 55,
        image: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGhpZ2glMjB3YWlzdCUyMGplYW5zfGVufDF8fHx8MTc3MzMyNTc3OHww&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Jeans',
        gender: 'women',
        description: 'High-waisted denim jeans with a flattering fit. Versatile design that pairs well with any top.',
        sizes: ['24', '26', '28', '30', '32']
    },
    {
        id: 'women-top-1',
        name: "Women's Casual Crop Top",
        price: 28,
        image: 'https://images.unsplash.com/photo-1759873911325-aead6238d9f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNhc3VhbCUyMGNyb3AlMjB0b3B8ZW58MXx8fHwxNzczMzI1Nzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        category: 'Tops',
        gender: 'women',
        description: 'Stylish crop top perfect for casual wear. Soft, stretchy fabric that moves with you.',
        sizes: ['XS', 'S', 'M', 'L', 'XL']
    }
];
