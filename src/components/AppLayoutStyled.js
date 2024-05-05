import styled from 'styled-components';



export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 8px ${p => p.theme.padding.big};
`;
export const Loader = styled.div`
   display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
