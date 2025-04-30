import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../../src/index.js';

describe('Product API', () => {
  it('should create a new product', async () => {
    const newProduct = {
      id: 3,
      sku: "as-sd-de-232",
      pictures: ['https://example.com/image1.png', "https://example.com/img2.jpg"],
      sizes: ['S', 'M'],
      color: 'Red',
      brand: {
        id: 1,
        name: 'Nike',
        logo: 'https://example.com/logo.png'
      }
    };

    const res = await request(app).post('/products').send(newProduct);
    expect(res.statusCode).toBe(201);
    expect(res.body).toMatchObject({ sku: "as-sd-de-232" });
  });
});