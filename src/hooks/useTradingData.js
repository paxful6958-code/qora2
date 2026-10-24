import { useState, useEffect } from 'react';

export function useTradingData(symbol = 'EURUSD') {
    const [priceData, setPriceData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulated market data ticker updates
        const interval = setInterval(() => {
            setPriceData({
                symbol,
                bid: (1.084 + Math.random() * 0.001).toFixed(4),
                ask: (1.0842 + Math.random() * 0.001).toFixed(4),
                time: new Date().toLocaleTimeString()
            });
            setLoading(false);
        }, 2000);

        return () => clearInterval(interval);
    }, [symbol]);

    return { priceData, loading };
}