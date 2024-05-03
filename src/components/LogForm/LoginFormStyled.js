import styled from 'styled-components';

export const Form = styled.form` 
    width: 320px;
  `;
  
  export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  `;

  export const Input = styled.input`
  border: 1px solid ${p => p.theme.colors.borderGray};
  border-radius: ${p => p.theme.borderRad.small};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
  `

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
  