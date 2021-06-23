import styled from 'styled-components';

interface ChatIconProps {
  color: string;
}

// [element].attrs helps optimize a little given the dynamic nature of 'color'.
export const ChatIcon = styled.div.attrs<ChatIconProps>(props => ({
  style: {
    backgroundColor: props.color
  }
}))`
  border-radius: 50%;
  display: inline-flex;
  padding: 10px;
  border: 1px solid rgba(81,92,93,0.1);
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const ChatIconImage = styled.img`
  height: 30px;
`;