import { useState, useEffect, useCallback } from 'react';
import { WS_URL } from '../api/client';

/**
 * Custom hook for managing WebSocket connections with auto-reconnect logic.
 * Provides a clean interface for components to interact with the backend stream.
 */
export function useWebSocket(onMessage?: (data: any) => void) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [status, setStatus] = useState<'connecting' | 'open' | 'closed'>('connecting');

  const connect = useCallback(() => {
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      console.log('WS Connected');
      setStatus('open');
    };

    ws.onmessage = (event) => {
      if (onMessage) {
        try {
          const data = JSON.parse(event.data);
          onMessage(data);
        } catch (e) {
          onMessage(event.data);
        }
      }
    };

    ws.onclose = () => {
      console.log('WS Disconnected');
      setStatus('closed');
      // Attempt reconnect after 3 seconds
      setTimeout(connect, 3000);
    };

    setSocket(ws);
  }, [onMessage]);

  useEffect(() => {
    connect();
    return () => {
      socket?.close();
    };
  }, []);

  const sendMessage = (message: any) => {
    if (socket?.readyState === WebSocket.OPEN) {
      socket.send(typeof message === 'string' ? message : JSON.stringify(message));
    }
  };

  return { socket, status, sendMessage };
}
