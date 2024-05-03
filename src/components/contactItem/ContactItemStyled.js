import styled,{keyframes} from 'styled-components';
export const PhoneNoItem = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const ContactText = styled.p`
  animation: ${keyframes`
  100% {
      transform: translateX(0);
      opacity: 1;
    }
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    
  `} 1s ease-out; /* Adjust the duration and easing as needed */
  animation-fill-mode: both;
`;



export const DeleteButton = styled.button`
  background-color: transparent;

  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: rotate(180deg);
    transition: transform 0.5s ease;
  }
`;

export const IconWrapper = styled.span`
  color: red;
`;
