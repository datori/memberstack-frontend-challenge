import { RefObject } from 'react';
import IFrame from './style/IFrame';

interface ChatBotIFrameProps {
  frameRef: RefObject<HTMLIFrameElement>
}

export const ChatBotIFrame = ({ frameRef }: ChatBotIFrameProps) => (
  <IFrame
    frameBorder="0"
    title="Chat bot"
    className="chatbot-iframe"
    src="http://localhost:3002/"
    ref={frameRef}
  />
);

export default ChatBotIFrame;
