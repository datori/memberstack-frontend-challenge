import { useState, useEffect } from 'react';
import { ChatIcon, ChatIconImage } from './style/ChatIcon';
import logo from './chat.png';

const originHost = 'http://localhost:3001'

function App() {
  const [color, setColor] = useState('#cfeaf7');

  useEffect(() => {
    const savedColor = localStorage.getItem('color');
    if (savedColor) {
      setColor(savedColor);
    }

    const handleMessage = (event: MessageEvent) => {
      const { origin, data } = event;
      if (origin === originHost) {
        setColor(data);
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    localStorage.setItem('color', color);
  }, [color]);

  return (
    <div className="App">
      <ChatIcon color={color}>
        <ChatIconImage src={logo} alt="logo" />
      </ChatIcon>
    </div>
  );
}

export default App;
