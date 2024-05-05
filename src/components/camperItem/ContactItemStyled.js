import styled,{keyframes} from 'styled-components';


export const CamperCard = styled.div`
max-width: 888px;
border: 1px solid inside ${p => p.theme.colors.borderGray};
border-radius: ${p => p.theme.borderRad.medium};
padding: ${p => p.theme.padding.medium};

display: flex;

gap: ${p => p.theme.gap.medium};
`;

export const Poster = styled.img`
max-width: 290px;
border: none;
border-radius: ${p => p.theme.borderRad.small};

`;

export const CamperCardInfo = styled.div`
max-width:526px;

display: flex;
flex-direction: column;
gap: ${p => p.theme.gap.medium};


`;

export const CamperHeading = styled.div`

display: flex;
justify-content: space-between;
font-family: ${p => p.theme.font.mainFont};
color: ${p => p.theme.colors.hText};
font-weight:  ${p => p.theme.fontWeight.big};
font-size: ${p => p.theme.fontSize.big};



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
