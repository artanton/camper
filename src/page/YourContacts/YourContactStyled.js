import styled from 'styled-components';

export const ContactsContainer = styled.div`
  max-width: 1020px;
  height: 500px;
  margin: 0 auto;
  padding: 0 16px 40px 16px;
  display: flex;
  justify-content: space-between; 
`;

export const Header = styled.h2`

  margin-bottom:  20px ;

`;

export const InputContainer = styled.div`
font-size: 16px;
min-width: 350px;
  width: 100%; 
  padding: 30px;
  display: inline-block;
  overflow: hidden;
  border: 1px solid ${p => p.theme.colors.borderGray};
  border-radius: 2px 25px 25px 2px;;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
`;

export const DataContainer = styled.div`
min-width: 350px;

font-size: 16px;
  width: 100%; 
  padding: 30px;
  display: inline-block;
  overflow: hidden;
  border: 1px solid ${p => p.theme.colors.borderGray};
  border-radius:  25px 2px 2px 25px ;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
`;

export const DataFrame = styled.div`

  overflow-y: auto;
  height: 350px;
  border: none;

`;
