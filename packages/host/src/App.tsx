import React, { useState, useEffect, createRef, ChangeEvent } from 'react';
import ColorPicker from "./components/ColorPicker";
import ChatBotIFrame from "./components/ChatBotIFrame";

const targetHost = 'http://localhost:3002';


const App = () => {
  const frameRef = createRef<HTMLIFrameElement>();
  const [color, setColor] = useState('#e66465');

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setColor(value)
  };
  
  useEffect(() => {
    const savedColor = localStorage.getItem('color');
    if (savedColor) {
      setColor(savedColor);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('color', color);
  }, [color]);

  useEffect(() => {
    const iframe = frameRef.current;

    if (iframe) {
      const { contentWindow } = iframe;

      if (contentWindow) {
        contentWindow.postMessage(color, targetHost);
      }
    }
  }, [color, frameRef]);

  return (
    <>
      <ColorPicker
        value={color}
        onChange={handleColorChange}
      />
      <ChatBotIFrame frameRef={frameRef} />
    </>
  );
}

export default App;
