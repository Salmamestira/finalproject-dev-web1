




// Liste des produits
window.products = [
    { id: 1, name: "Jean bleu clear", category: "pantalons-homme", price: 350, description: "idéal pour un style casual et confortable",fullDescription: "Ce jean bleu clair offre un style classique et décontracté. Conçu avec une coupe droite, il s’adapte à toutes vos envies, que ce soit pour une sortie entre amis ou un look quotidien confortable."

,image:"pantalonhomme1.jpg", sizes: ["S"] },
         
    { id: 2, name: "Pantalon beige", category: "pantalons-homme", price: 250, description: "parfait pour un look à la fois chic et détendu",fullDescription:"Léger et élégant, ce pantalon beige est parfait pour les journées ensoleillées. Sa couleur neutre permet de l’associer facilement à différents styles pour un rendu chic et décontracté."
 ,image: "pantalonhomme2.jpg",sizes:["M"] },
    { id: 3, name: "Pantalon gris sobre et raffiné", category: "pantalons-homme", price: 150, description: "adapté aux tenues professionnelles ou formelle",fullDescription:"Ce pantalon gris allie sobriété et raffinement. Sa coupe ajustée est idéale pour les environnements professionnels tout en restant agréable à porter toute la journée."
 ,image: "pantalonhomme3.jpg", sizes:["L"] },
    { id: 4, name: "Pantalon bleu marine intemporel,", category: "pantalons-homme", price: 99, description: "idéal pour un style moderne et soigné",fullDescription:"Intemporel et polyvalent, ce pantalon bleu marine est un indispensable de la garde-robe. Sa teinte profonde assure un look moderne adapté aussi bien aux occasions formelles qu’aux sorties décontractées."
 ,image: "pantalonhomme4.jpg",sizes:["XL"] },
    { id: 5, name: "Pantalon blanc éclatant", category: "pantalons-homme", price: 310, description: "parfait pour un look frais et estival",fullDescription:"Apportez une touche de fraîcheur à votre tenue avec ce pantalon blanc. Sa coupe simple et épurée en fait un choix idéal pour les journées estivales ou les looks minimalistes."
,image: "pantalonhomme5.jpg",sizes:["M"] },
    { id: 6, name: "Pantalon bleu foncé casual", category: "pantalons-homme", price: 299, description: "pour un style simple et polyvalent au quotidien",fullDescription:"Ce pantalon bleu foncé propose un style discret et efficace. Sa coupe décontractée assure un confort optimal tout en conservant une allure soignée."
 ,image: "pantalonhomme6.jpg",sizes:["S"] },
    { id: 7, name: "Jean bleu clair délavé", category: "pantalons-homme", price: 199, description: "apportant une touche jeune et dynamique à votre tenue",fullDescription:"Ce jean bleu clair délavé est parfait pour un look jeune et tendance. Léger et souple, il vous accompagnera aussi bien lors de vos sorties urbaines que pour vos moments de détente."
 ,image: "pantalonhomme7.jpg",sizes:["M"] },
    { id: 8, name: " Pantalon gris clair tendance", category: "pantalons-homme", price: 160, description: "combinant confort et élégance pour un look urbain",fullDescription:"Ce pantalon gris clair offre une alternative moderne aux teintes classiques. Sa matière agréable et sa coupe droite garantissent confort et style en toute occasion." ,image: "pantalonhomme8.jpg",sizes:["M"] },
    { id: 9, name: "Chemise blanche à motifs noirs", category: "chemises-homme", price: 320, description: " parfaite pour un style décontracté",fullDescription:"Optez pour un style unique avec cette chemise blanche ornée de motifs géométriques noirs. Sa coupe légère et confortable la rend idéale pour les journées d'été, tout en apportant une touche moderne à votre look casual"
,image: "chemisehomme1.jpg",sizes:["XXL"] },
    { id: 10, name: "Chemise beige clair", category: "chemises-homme", price: 270, description: "idéale pour un look chic et décontracté",fullDescription:" Cette chemise beige clair est parfaite pour ceux qui aiment combiner élégance et décontraction. Avec son tissu respirant et son col ouvert, elle est idéale pour vos sorties estivales ou vos balades en ville"
,image: "chemisehomme2.jpg",sizes:["S"] },
    { id: 11, name: "Chemise beige foncé", category: "chemises-homme", price: 199, description: " parfaite pour les journées chaudes et les sorties casual",fullDescription:"Simple, sobre et efficace, cette chemise beige foncé vous accompagnera dans toutes vos occasions décontractées. Sa texture douce offre un grand confort, tout en mettant en valeur un style naturel et authentique"
 ,image: "chemisehomme3.jpg",sizes:["XLL"] },
    { id: 12, name: "Chemise verte claire", category: "chemises-homme", price: 80, description: "Un basique élégant pour un look naturel et raffiné",fullDescription:"Apportez une touche de fraîcheur à votre garde-robe avec cette chemise verte claire. Elle se porte aussi bien pour des événements formels que pour des sorties entre amis, grâce à sa coupe élégante et son tissu léger."
 ,image: "chemisehomme4.jpg",sizes:["M"] },
    { id: 13, name: "Chemise bleue à motifs feuilles", category: "chemises-homme", price: 90, description: " idéale pour l’été et les vacances.",fullDescription:"Inspirée par la nature, cette chemise bleue à motifs de feuilles est idéale pour un look tropical et détendu. Elle est confectionnée dans un tissu doux et respirant, parfait pour les journées chaudes et ensoleillées."

 ,image: "chemisehomme5.jpg",sizes:["M"] },
    { id: 14, name: "Chemise blanche à motifs gris foncé", category: "chemises-homme", price: 150, description: "Un mélange parfait de sobriété et d’originalité avec ses motifs modernes",fullDescription:" Cette chemise blanche, agrémentée de motifs gris foncé, marie élégance et originalité. Son design moderne en fait une pièce forte qui peut être portée aussi bien avec un jean qu'avec un pantalon plus habillé."
,image: "chemisehomme6.jpg",sizes:["L"] },
    { id: 15, name: "Chemise verte kaki ", category: "chemises-homme", price: 350, description: "parfaite pour un look urbain et tendance",fullDescription:"La chemise verte kaki est une pièce tendance qui allie sobriété et caractère. Son tissu de qualité assure un confort optimal, et sa couleur neutre permet de l'associer facilement à d'autres éléments de votre garde-robe."
 ,image: "chemisehomme7.jpg", sizes:["L"] },
    { id: 16, name: "Chemise blanche classique", category: "chemises-homme", price: 190, description: "Un indispensable intemporel pour un style élégant en toute occasion ",fullDescription:"ndispensable de tout dressing masculin, cette chemise blanche classique vous garantit une allure élégante et soignée. Que ce soit pour le bureau, une cérémonie ou un rendez-vous, elle s'adapte à toutes les situations." ,image: "chemisehomme8.jpg",sizes:["M"] },
    { id: 17, name: "Basket Noire", category: "chaussures-homme", price: 390, description: "Des baskets noires légères et parfaites pour un look sportif",fullDescription:"Découvrez notre basket noire au design moderne et épuré. Ultra légère, elle est idéale pour accompagner vos tenues de tous les jours ou vos sessions sportives. Conçue pour offrir un confort optimal à chaque pas."
,image: "chaussurehomme1.jpg",sizes:["40"] },
    { id: 18, name: "Chaussures en marron", category: "chaussures-homme", price: 250, description: "Chaussures marron élégantes idéales pour les sorties habillées",fullDescription:"Ces chaussures marron classiques sont parfaites pour les événements formels et les sorties élégantes. Leur finition soignée et leur confort durable en font un indispensable de votre garde-robe."
 ,image: "chaussurehomme2.jpg",sizes:["41"] },
    { id: 19, name: "Baskets en gris", category: "chaussures-homme", price: 190, description: " Baskets grises modernes, alliant confort et style urbain",fullDescription:"Optez pour un look décontracté et tendance avec nos baskets grises. Leur semelle antidérapante et leur tissu respirant vous garantissent confort et style tout au long de la journée."
 ,image: "chaussurehomme3.jpg",sizes:["39"] },




    { id: 20, name: "Baskets marrons", category: "chaussures-homme", price: 180, description: "Baskets marron casual, parfaites pour un style décontracté",fullDescription:"Simples et efficaces, nos baskets marrons s'adaptent à toutes vos tenues. Que ce soit pour une promenade en ville ou une sortie entre amis, elles vous assurent un confort inégalé."
,image: "chaussurehomme4.jpg",sizes:["38"] },
    { id: 21, name: " Chaussures marron et bleu", category: "chaussures-homme", price: 330, description: "  Chaussures bicolores chic pour un style unique au quotidien.",fullDescription:"Originales et raffinées, ces chaussures marron et bleu combinent modernité et élégance. Leur cuir de qualité supérieure vous assure un style distingué à chaque occasion."
,image: "chaussurehomme5.jpg",sizes:["42"] },
    { id: 22, name: "Baskets noires", category: "chaussures-homme", price: 99, description: "Baskets noires respirantes, idéales pour le sport et la marche",fullDescription:"Conçues pour les sportifs et les amateurs de confort, ces baskets noires offrent un excellent maintien du pied. Leur design sobre s'associe facilement avec vos vêtements de sport ou de ville."

,image: "chaussurehomme6.jpg",sizes:["41"]},
    { id: 23, name: "Chaussures bleues", category: "chaussures-homme", price: 299, description: "Chaussures bleues sobres pour un look casual et tendance",fullDescription:"Ajoutez une touche de fraîcheur à vos tenues avec ces chaussures bleues élégantes. Confortables et stylées, elles sont parfaites pour le bureau comme pour vos sorties du week-end."
,image:"chaussurehomme7.jpg",sizes:["43"]},
    { id: 24, name: "Baskets noires et grises", category: "chaussures-homme", price: 130, description: " Baskets stylées noir et gris pour un maximum de confort et de style.",fullDescription:"Alliez performance et modernité avec nos baskets noires et grises. Leur design dynamique et leur confort optimal en font le choix parfait pour une journée active sans compromis sur le style." ,image: "chaussurehomme8.jpg",sizes:["39"] },
    { id: 25, name: "Pantalon Baggy Femme", category: "pantalons-femme", price: 340, description: "Un style large et ultra confortable pour un look détendu.",fullDescription:"Ce pantalon baggy à la coupe ample offre un confort maximal sans sacrifier le style. Idéal pour une allure détendue, il se marie aussi bien avec des baskets que des sandales."
 ,image: "pantalonfemme1.jpg",sizes:["Xl"] },
    { id: 26, name: "Jean Regular Femme", category: "pantalons-femme", price: 280, description: "Le jean droit classique, parfait pour toutes les occasions.",fullDescription:"Avec sa coupe droite classique, ce jean regular est un must-have de toute garde-robe. Sa matière souple vous assure confort et durabilité pour un usage quotidien."
,image: "pantalonfemme2.jpg",sizes:["S"] },
    { id: 27, name: " Jean Indigo Femme", category: "pantalons-femme", price: 180, description: "Un jean bleu profond pour un style moderne et élégant.",fullDescription:"Ce jean indigo se distingue par son bleu profond et sa coupe flatteuse. Il s’adapte aussi bien à une tenue casual qu'à un look plus sophistiqué pour vos sorties."
,image: "pantalonfemme3.jpg",sizes:["M"] },
    { id: 28, name: "Jean Bleu Classique Femme", category: "pantalons-femme", price: 80, description: "Le basique indispensable, facile à assortir. ",fullDescription:"Un jean bleu intemporel qui s’accorde avec toutes vos tenues. Sa coupe droite et son tissu doux en font une pièce essentielle pour un style simple et efficace."
,image: "pantalonfemme4.jpg",sizes:["S"] },
    { id: 29, name: "Pantalon Large Femme ", category: "pantalons-femme", price: 90, description: "Élégant et fluide, parfait pour les journées ensoleillées.",fullDescription:"Léger et élégant, ce pantalon large en tissu fluide est parfait pour la saison estivale. Sa coupe ample garantit un confort optimal tout en restant chic."
, image: "pantalonfemme5.jpg",sizes:["L"] },
    { id: 30, name: "Jean Droit Décontracté Femme", category: "pantalons-femme", price: 199, description: " Confort et liberté dans une coupe droite tendance.",fullDescription:"Ce jean droit vous offre un look décontracté sans effort. Sa coupe confortable et son style simple en font une pièce idéale pour vos journées actives."
, image: "pantalonfemme6.jpg",sizes:["S"] },
    { id: 31, name: "Jean Slim Bleu Clair Femme", category: "pantalons-femme", price: 200, description: "Une coupe près du corps pour un look dynamique et frais.",fullDEscription:"Le jean slim bleu clair épouse parfaitement vos formes pour un effet seconde peau. Léger et stylé, il est parfait pour un look casual moderne."
,image: "pantalonfemme7.jpg",sizes:["XL"] },
    { id: 32, name: "Pantalon Droit Noir Femme", category: "pantalons-femme", price: 110, description: "Chic et sobre, un essentiel pour vos tenues élégantes. ",fullDescription:"Un pantalon noir classique à coupe droite, parfait pour vos tenues professionnelles ou élégantes. Son tissu solide et sa coupe sobre en font un intemporel." ,image:"pantalonfemme8.jpg",sizes:["M"] },
    { id: 33, name: "Chemise Blanche Classique", category: "chemises-femme", price: 366, description: "Une chemise blanche intemporelle, élégante et facile à porter.",fullDescription:"Cette chemise blanche classique est un incontournable de toute garde-robe. Sa coupe élégante et son tissu léger en font un choix parfait pour un style chic au quotidien."
 ,image: "chemisefemme1.jpg",sizes:["S"] },
    { id: 34, name: "Chemise Ample Marron ", category: "chemises-femme", price: 250, description: "Une coupe ample et une couleur chaude pour un style décontracté chic.",fullDescription:"Offrez-vous un confort absolu avec cette chemise ample marron. Sa couleur chaleureuse et sa coupe fluide en font une pièce idéale pour un look casual et tendance."

 ,image: "chemisefemme2.jpg",sizes:["L"] },
    { id: 35, name: "Chemise Bleu Clair à Fleurs", category: "chemises-femme", price: 240, description: "Fraîche et féminine, idéale pour les journées ensoleillées. ",fullDescription:"Douce et féminine, cette chemise bleu clair ornée de délicates fleurs apportera une touche de fraîcheur à vos tenues printanières et estivales."
 ,image: "chemisefemme3.jpg",sizes:["XLL"] },
    { id: 36, name: "Chemise à Carreaux Multicolores", category: "chemises-femme", price: 150, description: "Un style casual avec des couleurs dynamiques parfait pour l'automne.",fullDescription:"Affirmez votre style avec cette chemise à carreaux multicolores. Parfaite pour les looks décontractés et stylés, elle s'accorde aussi bien avec un jean qu'un pantalon classique."
,image: "chemisefemme4.jpg",sizes:["L"] },
    { id: 37, name:"Chemise Verte Vif", category: "chemises-femme", price: 110, description: "Une touche de peps à vos tenues grâce à sa couleur éclatante.",fullDescription:"Ajoutez une touche de vitalité à votre dressing avec cette chemise verte éclatante. Sa coupe simple la rend facile à porter au quotidien.", image: "chemisefemme5.jpg",sizes:["M"] },
    { id: 38, name: "Chemise Jaune Pâle", category: "chemises-femme", price: 70, description: " Légère et lumineuse, parfaite pour un look doux et estival.",fullDescription:"Douce et lumineuse, cette chemise jaune pâle est parfaite pour égayer vos looks. Sa matière légère vous assure confort tout au long de la journée."
 ,image: "chemisefemme6.jpg",sizes:["XXL"] },



    { id: 39, name: "Chemise Tie and Dye Violet et Blanc", category: "chemises-femme", price: 80, description: "Un style artistique et original pour un look tendance et décontracté.",fullDescription:"Originale et moderne, cette chemise tie and dye combine un style artistique et une coupe confortable. Idéale pour se démarquer avec élégance."

, image: "chemisefemme7.jpg",sizes:["S"] },
    { id: 40, name: "Chemise Blanche Légère à Col V ", category: "chemises-femme", price: 320, description: "Élégante et légère, parfaite pour un look naturel et raffiné. ",fullDescription:"Simple et chic, cette chemise blanche à col V se distingue par sa légèreté et son allure naturelle. Un basique raffiné pour toutes les saisons." ,image: "chemisefemme8.jpg",sizes:["L"] },
    { id: 41, name: "Sandales à talon", category: "chaussures-femme", price: 365, description: "Élégantes et confortables pour toutes vos occasions spéciales.",fullDescription:"Avec leur finition douce et leur couleur pastel raffinée, ces sandales à talon sont parfaites pour sublimer vos tenues de soirée ou vos looks de journée chic. Leur design élégant assure confort et maintien tout au long de la journée."
 ,image: "chaussurefemme1.jpg",sizes:["38"] },
    { id: 42, name: "Mocassins en simili cuir", category: "chaussures-femme", price: 280, description: "L'alliance parfaite entre confort et style décontracté." ,fullDescription:"Conçus pour allier confort et style, ces mocassins en simili cuir offrent une touche élégante et décontractée à vos tenues. Leur texture douce et leur finition soignée en font une option idéale pour le quotidien."
, image:"chaussurefemme2.jpg",sizes:["40"]},
    { id: 43, name: "Mules classiques", category: "chaussures-femme", price: 290, description: "Un indispensable chic et facile à enfiler au quotidien..",fullDescription:"Ces mules noires au design intemporel se distinguent par leur confort absolu et leur allure élégante. Faciles à enfiler, elles sont parfaites pour accompagner aussi bien un look décontracté qu'une tenue plus sophistiquée.", image: "chaussurefemme3.jpg",sizes:["39"] },
    
    { id: 44, name: " Sandales plates", category: "chaussures-femme", price: 66, description: "Parfaites pour un été tout en douceur et en liberté",fullDescription:"Légères et confortables, ces sandales plates sont idéales pour les journées ensoleillées. Leur teinte douce et leur double bride assurent un bon maintien tout en laissant respirer vos pieds avec style."
 ,image: "chaussurefemme4.jpg",sizes:["36"] },
    { id: 45, name: "Babies en jean", category: "chaussures-femme", price: 180, description: "Une touche rétro revisitée pour vos looks casual",fullDescription:"Originales et modernes, ces babies en tissu denim apportent une touche casual chic à votre garde-robe. Leur bride ajustable et leur design rétro en font un modèle aussi tendance que confortable."
 ,image: "chaussurefemme5.jpg",sizes:["38"] },
    { id: 46, name: "Baskets blanches ", category: "chaussures-femme", price: 210, description: "Un modèle intemporel qui s'accorde avec toutes vos tenues.",fullDescription:"Indispensables et intemporelles, ces baskets blanches s'associent facilement à toutes vos tenues. Leur design minimaliste et leur confort optimal en font un choix parfait pour une allure fraîche et dynamique."
 ,image: "chaussurefemme6.jpg",sizes:["40"] },
    { id: 47, name: "Baskets beiges", category: "chaussures-femme", price: 190, description: "Sobres et modernes, elles complètent vos looks urbains",fullDescription:"Avec leur subtil mélange de teintes beiges, ces baskets offrent un style doux et moderne. Elles sont idéales pour un look épuré, que ce soit pour une promenade citadine ou une journée active."
,image: "chaussurefemme7.jpg",sizes:["37"] },
    { id: 48, name: " Baskets à motifs", category: "chaussures-femme", price: 210, description: "Ajoutez une note originale à votre style avec ces baskets uniques.",fullDescription:"Osez l'originalité avec ces baskets ornées de motifs colorés. Leur design unique donne du caractère à vos tenues tout en assurant confort et légèreté au quotidien." ,image: "chaussurefemme8.jpg",sizes:["39"] },

];

const products = (() => {
  const local = localStorage.getItem('yourbeauty_products');
  try {
    return local ? JSON.parse(local) : window.products;
  } catch {
    return window.products;
  }
})();





// Fonction pour afficher les produits
function displayProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = '';  // Vider la liste existante

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}dh</p>
            <button onclick="addToCart(${product.id})">Ajouter au panier</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Filtrage des produits
function filterProducts() {
    const category = document.getElementById('category-filter').value;
    const price = document.getElementById('price-filter').value;

    let filteredProducts = products;

    // Filtrage par catégorie
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    // Filtrage par prix
    if (price !== 'all') {
        let priceRange;
        if (price === 'low') {
            priceRange = [0, 100];  // Prix bas : jusqu'à 100dh
        } else if (price === 'medium') {
            priceRange = [100, 200];  // Prix moyen : entre 100dh et 200dh
        } else if (price === 'mid-high') {
            priceRange = [200, 300];  // Nouveau range entre 200dh et 300dh    
        } else if (price === 'high') {
            priceRange = [300, Infinity]; // Prix élevé : plus de 200dh
        }

        filteredProducts = filteredProducts.filter(product => product.price >= priceRange[0] && product.price <= priceRange[1]);
    }

    displayProducts(filteredProducts);
}

// Initialiser les produits
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);  // Afficher tous les produits au début

    // Écouter les changements des filtres
    document.getElementById('category-filter').addEventListener('change', filterProducts);
    document.getElementById('price-filter').addEventListener('change', filterProducts);
});

// Tableau pour stocker le panier
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Fonction pour ajouter un produit au panier
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const product = products.find(p => p.id === id);

    // Vérifie si le produit est déjà dans le panier
    const alreadyInCart = cart.some(item => item.id === id);

    if (!alreadyInCart) {
        // Ajoute le produit avec quantité fixe de 1
        cart.push({ ...product, quantity: 1 });
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart(); 
        displayCart();
    }   
}

// Fonction pour mettre à jour le bouton du panier
function updateCart() {
    const cartButton = document.getElementById('cart-button');
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartButton.innerHTML = `Panier (${cartCount})`;
}


// Fonction pour mettre à jour le nombre d'articles dans le panier
function updateCart() {
    const cartButton = document.getElementById('cart-button');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];  // Lire les données du panier dans localStorage
    const cartCount = cart.length;  // Nombre d'articles dans le panier
    cartButton.innerHTML = `Panier (${cartCount})`;  // Mettre à jour l'affichage du panier
}

// Mettre à jour le panier dès que la page est chargée
document.addEventListener('DOMContentLoaded', () => {
    updateCart();  // Actualiser le nombre d'articles dans le panier
    // Écouter les changements des filtres
    document.getElementById('category-filter').addEventListener('change', filterProducts);
    document.getElementById('price-filter').addEventListener('change', filterProducts);
});






//pour les details d'un produit

function displayProducts(items) {
    const list = document.getElementById("product-list");
    list.innerHTML = "";
  
    items.forEach(p => {
      const card = document.createElement("div");
      card.className = "product";
      card.innerHTML = `
        <div class="image-container">
          <img src="${p.image}" alt="${p.name}" class="product-thumb">
          <div class="click-hint">Cliquez pour voir</div>
        </div>
        <h3>${p.name}</h3>
        <p class="price">${p.price} dh</p>
        <p class="short-desc">${p.description}</p>
        <button class="add-btn" onclick="addToCart(${p.id}); event.stopPropagation();">
          Ajouter au panier
        </button>
      `;
      // Au clic sur la carte, ouvrir la modale
    // Cibler seulement l'image pour ouvrir la modale
const imageContainer = card.querySelector(".image-container");
imageContainer.addEventListener("click", () => openModal(p));

    
      list.appendChild(card);
    });
  }
  
  
  // Ouvre la modale avec les détails du produit
function openModal(product) {
    const modal = document.getElementById("product-modal");
    const modalImg = document.getElementById("modal-img");
  
    // Mise à jour du contenu
    modalImg.src = product.image;
    modalImg.style.transition = "transform 0.3s ease";
    modalImg.style.transform = "scale(0.7)"; // Réduction de l'image
  
    document.getElementById("modal-name").textContent = product.name;
    document.getElementById("modal-full-desc").textContent = product.fullDescription;
    document.getElementById("modal-sizes").textContent = product.sizes.join(", ");
    document.getElementById("modal-price").textContent = product.price ;
  
    // Bouton d’ajout au panier
    document.getElementById("modal-add").onclick = () => {
      addToCart(product.id);
    };
  
    // Affiche la modale
    modal.classList.remove("hidden");
  }
  
  // Ferme la modale
  function closeModal() {
    document.getElementById("product-modal").classList.add("hidden");
  }
  
  // Initialisation après chargement de la page
  document.addEventListener("DOMContentLoaded", () => {
    displayProducts(products); // Affichage des produits
  
    // Gestion de la fermeture de la modale
    document.querySelector(".modal-close").addEventListener("click", closeModal);
    document.getElementById("product-modal").addEventListener("click", (e) => {
      if (e.target.id === "product-modal") closeModal();
    });
  
    // Filtres produits
    document.getElementById("category-filter").addEventListener("change", filterProducts);
    document.getElementById("price-filter").addEventListener("change", filterProducts);
  
    // Mise à jour du panier au démarrage
    updateCart();
  });
  



  


  













  






 



  
  