// tests/api.spec.ts
import { test, expect } from '@playwright/test';
import {StatusCodes} from "http-status-codes";
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API', () => {

    test('find user: should return a user by ID', async ({ request }) => {
        const response = await request.get(`${baseURL}/24`);
        expect(response.status()).toBe(StatusCodes.OK);
        const responseBody = await response.json();
        expect(responseBody.id).toBe(24);
    });

    test('find user: should return 404 if user not found', async ({ request }) => {
        const response = await request.get(`${baseURL}/123`);
        expect(response.status()).toBe(404);
    });

    test('create user: should add a new user', async ({ request }) => {
        const response = await request.post(`${baseURL}`);
        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        expect(responseBody.id).toBeDefined();
    });

    test('delete user: should delete a user by ID', async ({ request }) => {
        const responseUserCreation = await request.post(`${baseURL}`);
        expect(responseUserCreation.status()).toBe(201);
        const responseBodyUserCreation = await responseUserCreation.json();
        expect(responseBodyUserCreation.id).toBeDefined();
        const userId = responseBodyUserCreation.id;
        console.log(userId);
        const response = await request.delete(`${baseURL}`+"/"+userId);
        expect(response.status()).toBe(200);
    });

    test('delete user: should return 404 if user not found', async ({ request }) => {
        const responseUserCreation = await request.post(`${baseURL}`);
        expect(responseUserCreation.status()).toBe(201);
        const responseBodyUserCreation = await responseUserCreation.json();
        expect(responseBodyUserCreation.id).toBeDefined();
        const userId = responseBodyUserCreation.id;
        console.log(userId);
        const responseUser = await request.delete(`${baseURL}`+"/"+userId);
        expect(responseUser.status()).toBe(200);
        const response = await request.delete(`${baseURL}`+"/"+userId);
        expect(response.status()).toBe(404);
    });
});
