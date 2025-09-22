const express = require('express');
const { z } = require('zod');

const router = express.Router();

// Seed data
let PRODUCTS = [
  { id: "1", name: "Alpha Bag",   brand: "Alpha", category: "Bags",    price: 1299 },
  { id: "2", name: "Beta Shoes",  brand: "Beta",  category: "Shoes",   price: 2499 },
  { id: "3", name: "Gamma Watch", brand: "Gamma", category: "Watches", price: 3999 },
  { id: "4", name: "Delta Cap",   brand: "Delta", category: "Caps",    price: 499  },
  { id: "5", name: "Zeta Tee",    brand: "Zeta",  category: "T-shirts",price: 799  },
  { id: "6", name: "Omega Bag",   brand: "Omega", category: "Bags",    price: 1599 }
];

const productSchema = z.object({
  name: z.string().min(1),
  brand: z.string().min(1),
  category: z.string().min(1),
  price: z.number().nonnegative(),
});

// GET /products?search=&brand=&category=&minPrice=&maxPrice=&sortBy=brand|price&sortOrder=asc|desc&page=1&limit=12
router.get('/', (req, res) => {
  let { search = "", brand, category, minPrice, maxPrice, sortBy, sortOrder = "asc", page = 1, limit = 12 } = req.query;

  page = Number(page); limit = Number(limit);
  minPrice = minPrice ? Number(minPrice) : undefined;
  maxPrice = maxPrice ? Number(maxPrice) : undefined;

  let data = [...PRODUCTS];

  if (search) {
    const q = search.toLowerCase();
    data = data.filter(p => p.name.toLowerCase().includes(q));
  }
  if (brand) data = data.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  if (category) data = data.filter(p => p.category.toLowerCase() === category.toLowerCase());
  if (minPrice !== undefined) data = data.filter(p => p.price >= minPrice);
  if (maxPrice !== undefined) data = data.filter(p => p.price <= maxPrice);

  if (sortBy === 'brand' || sortBy === 'price') {
    data.sort((a, b) => {
      const A = a[sortBy], B = b[sortBy];
      if (typeof A === 'string') return sortOrder === 'desc' ? B.localeCompare(A) : A.localeCompare(B);
      return sortOrder === 'desc' ? B - A : A - B;
    });
  }

  const total = data.length;
  const start = (page - 1) * limit;
  const paged = data.slice(start, start + limit);

  res.json({ items: paged, total, page, pages: Math.ceil(total / limit) });
});

// CREATE
router.post('/', (req, res) => {
  const parsed = productSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

  const id = Date.now().toString();
  const product = { id, ...parsed.data };
  PRODUCTS.push(product);
  res.status(201).json(product);
});

// UPDATE
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const idx = PRODUCTS.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });

  const parsed = productSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

  PRODUCTS[idx] = { id, ...parsed.data };
  res.json(PRODUCTS[idx]);
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const before = PRODUCTS.length;
  PRODUCTS = PRODUCTS.filter(p => p.id !== id);
  if (PRODUCTS.length === before) return res.status(404).json({ error: 'Not found' });
  res.status(204).end();
});

module.exports = router;
