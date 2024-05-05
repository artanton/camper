import styled from 'styled-components';

export const CamperListStyle = styled.ul`
  display: flex;
  flex-direction: column;

  gap: ${p => p.theme.gap.big};
`;
