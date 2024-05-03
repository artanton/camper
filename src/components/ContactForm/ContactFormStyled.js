import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const FormStyled = styled(Form)`
  
  margin-bottom: 40px;
  
 
  display: flex;
  flex-direction: column;
`;

export const FieldGroup = styled.label`
  display: flex;
  
  flex-direction: column;
  gap: ${p => p.theme.gap.small};
  height: 70px;
  margin-bottom: 20px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  padding: 0;
  color: red;
  font-size: 12px;
`;
export const FieldStyled = styled(Field)`
  width: 250px;
 font-size: 16px;
  padding: ${p => p.theme.padding.small};
  border: 1px solid ${p => p.theme.colors.borderGray};
  border-radius: ${p => p.theme.borderRad.small};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
`;

export const Button = styled.button`
margin: 0 auto;
  width: 90px; 
  font-weight: 500;
  border: 1px solid ${p => p.theme.colors.borderGray};
  border-radius: ${p => p.theme.borderRad.small};
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
  &:active {
    color:red;
    background-color: lightgray; 
    box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.5);}
`;
