import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../../src/index.js';

describe('Test API', () => {
  it('should create a test entry', async () => {
    const test = {
        id: 1,
        testerId: 1,
        productId: 1,
        size: 'M'
    };

    const res = await request(app).post('/tests').send(test);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  
});