import styled from 'styled-components';


export const LogOutMenu = styled.div`
display: flex;
gap:24px;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: black;
  align-items: baseline,
  
  
`;

export const Button = styled.button`
  
  border: 1px solid ${p => p.theme.colors.borderGray};
  border-radius: ${p => p.theme.borderRad.small};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
  
  text-decoration: none;

  font-weight: 500;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    color:red;
    background-color: lightgray; 
    box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.5);}
`;



  
 