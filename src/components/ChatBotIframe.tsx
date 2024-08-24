"use client"

import { useEffect } from 'react';

const ChatBotIframe: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const iframe = document.createElement('iframe');

    const iframeStyles = (styleString: string) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    };

    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 50px;
        right: 50px;
        
        border: none;
      }
    `);

    iframe.src = 'http://localhost:3000/chatbot';
    iframe.classList.add('chat-frame');
    document.body.appendChild(iframe);

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== 'http://localhost:3000') return null;
      const dimensions = JSON.parse(e.data) as { width: string; height: string };
      iframe.width = dimensions.width;
      iframe.height = dimensions.height;
      iframe.contentWindow?.postMessage('21e4cc31-3644-49d3-80f5-f5324d467b08', 'http://localhost:3000/');
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
      document.body.removeChild(iframe);
    };
  }, []);

  return null;
};

export default ChatBotIframe;
