// products.js
const productsData = {
    "products": [
        {
            "id": "1",
            "name": "Downshifter Sports Shoes",
            "price": "$50.00",
            "ratings": 3.5,
            "imageUrl": "../images/product-1.jpg",
            "category": "featured",
            "popularity": 120,
            "onSale": false,
            "sizes": ["6", "7", "8", "9", "10"],
            "thumbnailImages": [
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100"
            ],
            "description": "Comfortable sports shoes designed for running and casual wear, with breathable mesh and durable soles."
        },
        {
            "id": "2",
            "name": "Classic Running Sneakers",
            "price": "$65.00",
            "ratings": 4.0,
            "imageUrl": "../images/product-2.jpg",
            "category": "latest",
            "popularity": 200,
            "onSale": true,
            "sizes": ["6", "7", "8", "9", "10"],
            "thumbnailImages": [
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100"
            ],
            "description": "Lightweight sneakers perfect for daily runs, featuring cushioning for extra comfort."
        },
        {
            "id": "3",
            "name": "Casual Leather Boots",
            "price": "$80.00",
            "ratings": 4.5,
            "imageUrl": "../images/product-3.jpg",
            "category": "featured",
            "popularity": 150,
            "onSale": false,
            "sizes": ["7", "8", "9", "10", "11"],
            "thumbnailImages": [
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100"
            ],
            "description": "Stylish leather boots for casual and semi-formal occasions, with a sturdy build."
        },
        {
            "id": "4",
            "name": "Athletic Training Shoes",
            "price": "$45.00",
            "ratings": 3.0,
            "imageUrl": "../images/product-4.jpg",
            "category": "latest",
            "popularity": 80,
            "onSale": true,
            "sizes": ["6", "7", "8", "9", "10"],
            "thumbnailImages": [
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100"
            ],
            "description": "Durable training shoes for gym workouts and outdoor activities, with excellent grip."
        },
        {
            "id": "5",
            "name": "Flat Heel Gray Shoes",
            "price": "$50.00",
            "ratings": 3.5,
            "imageUrl": "../images/product-5.jpg",
            "category": "latest",
            "popularity": 90,
            "onSale": false,
            "sizes": ["6", "7", "8", "9"],
            "thumbnailImages": [
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100"
            ],
            "description": "Gray flat shoes perfect for everyday use with a minimalist design."
        },
        {
            "id": "6",
            "name": "Lace-Fastening Black Shoes",
            "price": "$21.00",
            "ratings": 4.5,
            "imageUrl": "../images/product-6.jpg",
            "category": "latest",
            "popularity": 130,
            "onSale": true,
            "sizes": ["6", "7", "8", "9", "10", "11"],
            "thumbnailImages": [
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100"
            ],
            "description": "Versatile black shoes with lace fastening suitable for casual or formal settings."
        },
        {
            "id": "7",
            "name": "Men's Cotton Socks",
            "price": "$9.00",
            "ratings": 4.0,
            "imageUrl": "../images/product-7.jpg",
            "category": "latest",
            "popularity": 300,
            "onSale": true,
            "sizes": ["Free Size"],
            "thumbnailImages": [
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100"
            ],
            "description": "Soft and breathable cotton socks for men, ideal for all-day wear."
        },
        {
            "id": "8",
            "name": "Loafers Men (Gray)",
            "price": "$15.00",
            "ratings": 3.0,
            "imageUrl": "../images/product-8.jpg",
            "category": "latest",
            "popularity": 60,
            "onSale": false,
            "sizes": ["7", "8", "9", "10"],
            "thumbnailImages": [
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100"
            ],
            "description": "Slip-on gray loafers for men that blend style and comfort effortlessly."
        },
        {
            "id": "9",
            "name": "White Lace-Fastening Shoes",
            "price": "$21.00",
            "ratings": 3.0,
            "imageUrl": "../images/product-9.jpg",
            "category": "latest",
            "popularity": 70,
            "onSale": true,
            "sizes": ["6", "7", "8", "9"],
            "thumbnailImages": [
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100"
            ],
            "description": "Classic white shoes with lace fastening, perfect for clean, casual looks."
        },
        {
            "id": "10",
            "name": "Premium Leather Sneakers",
            "price": "$99.00",
            "ratings": 5.0,
            "imageUrl": "../images/product-10.jpg",
            "category": "featured",
            "popularity": 500,
            "onSale": false,
            "sizes": ["8", "9", "10", "11", "12"],
            "thumbnailImages": [
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100"
            ],
            "description": "High-end sneakers made with genuine leather for maximum durability and style."
        },
        {
            "id": "11",
            "name": "Canvas Everyday Sneakers",
            "price": "$29.00",
            "ratings": 3.8,
            "imageUrl": "../images/product-11.jpg",
            "category": "featured",
            "popularity": 110,
            "onSale": true,
            "sizes": ["6", "7", "8", "9", "10"],
            "thumbnailImages": [
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100"
            ],
            "description": "Affordable canvas sneakers great for everyday use with a flexible sole."
        },
        {
            "id": "12",
            "name": "Eco-Friendly Running Shoes",
            "price": "$40.00",
            "ratings": 4.2,
            "imageUrl": "../images/product-12.jpg",
            "category": "latest",
            "popularity": 170,
            "onSale": false,
            "sizes": ["7", "8", "9", "10"],
            "thumbnailImages": [
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100",
                "https://via.placeholder.com/100"
            ],
            "description": "Running shoes made from recycled materials, combining performance with sustainability."
        }
    ]
};
