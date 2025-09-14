// @ts-check
import { test, expect, request } from '@playwright/test';


const BASE_URL = 'https://api.ketobalanced.com/pre/opt/country';

test.describe('API Tests - /pre/opt/country', () => {
  let apiContext;

  test.beforeAll(async () => {
    apiContext = await request.newContext();
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });

  // 1. Check if API is reachable (200 OK)
  test('should return 200 status for GET request', async () => {
    const response = await apiContext.get(BASE_URL);
    expect(response.status()).toBe(200);
  });

  // 2. Validate response is JSON
  test('should return response in JSON format', async () => {
    const response = await apiContext.get(BASE_URL);
    expect(response.headers()['content-type']).toContain('application/json');
  });

  // 3. Validate response body has required fields
  test('should return list of countries with expected fields', async () => {
    const response = await apiContext.get(BASE_URL);
    const body = await response.json();

    expect(Array.isArray(body)).toBeTruthy();
    for (const country of body) { 
      //expect(country).toHaveProperty('id');        // Example field
      expect(country).toHaveProperty('name');      // Example field
     // expect(country).toHaveProperty('code');      // Example field
    }
  });

  // 4. Response should not be empty
  test('should return at least one country', async () => {
    const response = await apiContext.get(BASE_URL);
    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
  });

  // 5. Negative test - invalid endpoint
  test('should return 404 for wrong endpoint', async () => {
    const response = await apiContext.get('https://api.ketobalanced.com/pre/opt/countries123');
    expect(response.status()).toBe(404);
  });

  // 6. Negative test - method not allowed
  test('should return 405 for POST request', async () => {
    const response = await apiContext.post(BASE_URL, { data: { test: "dummy" } });
    expect([400, 405]).toContain(response.status()); 
  });

  // 7. Validate response time (Performance check)
  test('response time should be under 2 seconds', async () => {
    const start = Date.now();
    const response = await apiContext.get(BASE_URL);
    const end = Date.now();
    expect(response.status()).toBe(200);
    expect(end - start).toBeLessThan(2000);
  });
});
