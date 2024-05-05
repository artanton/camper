import { styled } from 'styled-components';

export const CatalogHead = styled.h1`
  display: none;
`;

export const CatalogContainer = styled.div`
 
  padding: 100px 0;
  display: flex;
  gap: ${p => p.theme.gap.biggest};
`;

export const FilterContainer = styled.div`
 width:360px;
`;


