const API_BASE_URL = 'https://api.qoratrading.com/v1';

export async function fetchMarketData() {
    try {
        const response = await fetch(`${API_BASE_URL}/markets`);
        if (!response.ok) throw new Error('Failed to fetch market data');
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        return [];
    }
}

export async function loginUser(credentials) {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials),
        });
        return await response.json();
    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
}