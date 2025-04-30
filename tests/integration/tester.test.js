import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../../src/index.js';

describe('Tester API', () => {
  it('should create a new tester', async () => {
    const tester = {
        id:1,
        name:"pepe",
        birthday : "2010-10-10",
        sex: "Male",
        email:"pepe@palotes.com",
        password:"pass1234",
        testsDone:0,
        measure: { 
            id:1,
            creationDate: "2010-10-10",
            height:171.4,
            weight: 73.2
        }
    };

    const res = await request(app).post('/testers').send(tester);
    expect(res.statusCode).toBe(201);
    expect(res.body).toMatchObject({ email:"pepe@palotes.com" });
  });
});