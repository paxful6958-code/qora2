export class TradingWebSocket {
    constructor(url = 'wss://stream.qoratrading.com') {
        this.url = url;
        this.socket = null;
    }

    connect(onMessageCallback) {
        this.socket = new WebSocket(this.url);

        this.socket.onopen = () => {
            console.log('Connected to Qora Trading WebSocket Stream');
        };

        this.socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            onMessageCallback(data);
        };

        this.socket.onerror = (error) => {
            console.error('WebSocket Error:', error);
        };

        this.socket.onclose = () => {
            console.log('WebSocket connection closed');
        };
    }

    disconnect() {
        if (this.socket) {
            this.socket.close();
        }
    }
}