/* admin.js */
const STORAGE_KEY = 'yourbeauty_products';
let isEditing = false;

function initStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const current = raw ? JSON.parse(raw) : null;
    if (!Array.isArray(current) || current.length === 0) {
      const initial = Array.isArray(window.products) ? window.products : [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
    }
  } catch (err) {
    console.error("Erreur d'initialisation du storage", err);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(window.products || []));
  }
}

function getProducts() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveProducts(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

function renderList() {
  const container = document.getElementById('product-list');
  container.innerHTML = '';
  const products = getProducts();
  if (products.length === 0) {
    container.innerHTML = '<p>Aucun produit à afficher.</p>';
    return;
  }
  products.forEach(prod => {
    const div = document.createElement('div');
    div.className = 'product-item p-4 border rounded flex justify-between items-center';
    div.innerHTML = `
      <span>${prod.name}</span>
      <div class="space-x-2">
        <button data-id="${prod.id}" class="edit-btn py-1 px-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">Modifier</button>
        <button data-id="${prod.id}" class="delete-btn py-1 px-2 bg-red-600 text-white rounded hover:bg-red-700">Supprimer</button>
      </div>
    `;
    container.appendChild(div);
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = +btn.dataset.id;
      const updated = getProducts().filter(p => p.id !== id);
      saveProducts(updated);
      if (isEditing && +document.getElementById('product-id').value === id) resetForm();
      renderList();
    });
  });

  document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = +btn.dataset.id;
      const prod = getProducts().find(p => p.id === id);
      document.getElementById('product-id').value = prod.id;
      document.getElementById('name').value = prod.name;
      document.getElementById('price').value = prod.price;
      document.getElementById('category').value = prod.category;
      document.getElementById('image').value = prod.image;
      document.getElementById('description').value = prod.description;
      document.getElementById('fullDescription').value = prod.fullDescription;
      document.getElementById('sizes').value = prod.sizes.join(', ');
      isEditing = true;
      document.getElementById('cancel-btn').classList.remove('hidden');
    });
  });
}

function resetForm() {
  const form = document.getElementById('product-form');
  form.reset();
  document.getElementById('product-id').value = '';
  isEditing = false;
  document.getElementById('cancel-btn').classList.add('hidden');
}

function initForm() {
  const form = document.getElementById('product-form');
  const cancelBtn = document.getElementById('cancel-btn');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const idField = document.getElementById('product-id').value;
    const product = {
      id: idField ? +idField : (getProducts().slice(-1)[0]?.id || 0) + 1,
      name: document.getElementById('name').value.trim(),
      price: parseFloat(document.getElementById('price').value),
      category: document.getElementById('category').value.trim(),
      image: document.getElementById('image').value.trim(),
      description: document.getElementById('description').value.trim(),
      fullDescription: document.getElementById('fullDescription').value.trim(),
      sizes: document.getElementById('sizes').value.split(',').map(s => s.trim()),
    };
    const list = getProducts();
    if (isEditing) {
      const updated = list.map(p => (p.id === product.id ? product : p));
      saveProducts(updated);
    } else {
      list.push(product);
      saveProducts(list);
    }
    resetForm();
    renderList();
  });
  cancelBtn.addEventListener('click', resetForm);
}

window.addEventListener('DOMContentLoaded', () => {
  initStorage();
  initForm();
  renderList();
});








