function renderStars(rating) {
  const stars = [];
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;

  for (let i = 0; i < full; i++) stars.push('<i class="fa fa-star"></i>');
  if (half) stars.push('<i class="fa fa-star-half-o"></i>');
  while (stars.length < 5) stars.push('<i class="fa fa-star-o"></i>');

  return stars.join('');
}

function createProductCard(product) {
  return `
    <div class="pro">
      <img src="${product.image}" alt="${product.title}">
      <div class="des">
        <span>${product.brand || "D|Colony"}</span>
        <h5>${product.title}</h5>
        <div class="star">
          ${renderStars(product.rating)}
        </div>
        <h4>${product.price}</h4>
      </div>
      <a href="products-details.html"><i class="fas fa-shopping-cart cart"></i></a>
    </div>
  `;
}


fetch('data/products.json')
  .then(res => res.json())
  .then(data => {
    const featuredRow = document.getElementById('featured-products-row');
    const latestRow1 = document.getElementById('latest-products-row-1');
    const latestRow2 = document.getElementById('latest-products-row-2');

    const featured = data.filter(p => p.category === 'featured').slice(0, 3);
    const latest = data.filter(p => p.category === 'latest').slice(0, 6);

    featured.forEach(product => {
      featuredRow.innerHTML += createProductCard(product);
    });

    latest.slice(0, 3).forEach(product => {
      latestRow1.innerHTML += createProductCard(product);
    });

    latest.slice(3, 6).forEach(product => {
      latestRow2.innerHTML += createProductCard(product);
    });
  })
  .catch(err => console.error('Error loading products:', err));


const trustees = [
    {
        photo: "https://randomuser.me/api/portraits/women/65.jpg",
        name: "Dr. Emily Johnson",
        position: "Chairperson",
        expertise: "Fashion Industry Leader"
    },
    {
        photo: "https://randomuser.me/api/portraits/men/32.jpg",
        name: "Robert Chen",
        position: "Vice Chair",
        expertise: "Retail Operations Expert"
    },
    {
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Sarah Williams",
        position: "Secretary",
        expertise: "Sustainable Fashion Advocate"
    },
    {
        photo: "https://randomuser.me/api/portraits/men/75.jpg",
        name: "David Rodriguez",
        position: "Treasurer",
        expertise: "Financial Strategist"
    },
    {
        photo: "https://randomuser.me/api/portraits/women/28.jpg",
        name: "Priya Patel",
        position: "Trustee",
        expertise: "Global Supply Chain"
    },
    {
        photo: "https://randomuser.me/api/portraits/men/82.jpg",
        name: "James Wilson",
        position: "Trustee",
        expertise: "Technology Innovation"
    },
    {
        photo: "https://randomuser.me/api/portraits/women/53.jpg",
        name: "Michelle Kim",
        position: "Trustee",
        expertise: "Brand Development"
    },
    {
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
        name: "Thomas Okafor",
        position: "Trustee",
        expertise: "African Markets"
    },
    {
        photo: "https://randomuser.me/api/portraits/women/37.jpg",
        name: "Lisa Schmidt",
        position: "Trustee",
        expertise: "Customer Experience"
    },
    {
        photo: "https://randomuser.me/api/portraits/men/68.jpg",
        name: "Daniel Nguyen",
        position: "Trustee",
        expertise: "E-commerce Specialist"
    },
    {
        photo: "https://randomuser.me/api/portraits/women/19.jpg",
        name: "Natalie Rivera",
        position: "Trustee",
        expertise: "Marketing Strategy"
    },
    {
        photo: "https://randomuser.me/api/portraits/men/91.jpg",
        name: "Marcus Lee",
        position: "Trustee",
        expertise: "International Expansion"
    }
];

function renderTrustees() {
    const container = document.getElementById('trustees-container');
    container.innerHTML = ''; // Clear existing content
    
    trustees.forEach(trustee => {
        const trusteeCard = document.createElement('div');
        trusteeCard.className = 'trustee-card';
        trusteeCard.innerHTML = `
            <img src="${trustee.photo}" alt="${trustee.name}">
            <h3>${trustee.name}</h3>
            <p class="position">${trustee.position}</p>
            <p class="expertise">${trustee.expertise}</p>
        `;
        container.appendChild(trusteeCard);
    });
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', renderTrustees);
