import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
export const Button = styled.button`
  vertical-align: middle;
  background-color: transparent;

  border: none;
  /* transition: background-color 0.3s ease; */
`;

export const NoActiveHeart = styled(FaRegHeart)`
  color:${p => p.theme.colors.hText};
 
`;
// color: ${({ isActive }) =>
//     isActive ? p => p.theme.colors.actionBtn : p => p.theme.colors.hText};
//   transition: color 0.3s ease;

export const ActiveHeart = styled(FaHeart)`
  color:${p => p.theme.colors.actionBtn};
 
`;