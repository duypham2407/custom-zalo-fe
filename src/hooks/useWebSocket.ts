'use client';

import { useEffect, useState, useCallback } from 'react';

export function useWebSocket(url: string) {
  const [data, setData] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => {
      setIsConnected(true);
      setError(null);
    };

    ws.onmessage = (event) => {
      try {
        setData(JSON.parse(event.data));
      } catch (e) {
        setData(event.data);
      }
    };

    ws.onerror = () => {
      setError('WebSocket connection error');
      setIsConnected(false);
    };

    ws.onclose = () => {
      setIsConnected(false);
    };

    return () => {
      ws.close();
    };
  }, [url]);

  const send = useCallback(
    (message: any) => {
      if (isConnected) {
        const ws = new WebSocket(url);
        ws.send(JSON.stringify(message));
      }
    },
    [isConnected, url]
  );

  return { data, isConnected, error, send };
}

