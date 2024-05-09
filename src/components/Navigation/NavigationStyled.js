import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuLink = styled(NavLink)`
 display: inline-block;
  text-decoration: none;
  font-family: ${p => p.theme.font.mainFont};

  padding: 12px;
  font-weight: 700;
  color: ${p => p.theme.colors.hText};

  &.active {
    color:  ${p => p.theme.colors.actionBtn};
  }
  
`;