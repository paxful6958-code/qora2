import { useState, useEffect } from 'react';

export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedToken = localStorage.getItem('qora_token');
        if (savedToken) {
            // Authenticate user session
            setUser({ name: 'Trader Demo', email: 'user@qoratrading.com' });
        }
        setLoading(false);
    }, []);

    const login = (userData, token) => {
        localStorage.setItem('qora_token', token);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('qora_token');
        setUser(null);
    };

    return { user, loading, login, logout };
}