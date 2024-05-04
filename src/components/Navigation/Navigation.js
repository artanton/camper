

import { MenuLink } from './NavigationStyled';


export const Navigation = () => {
 

  return (
    <nav>
      <MenuLink  to="/">
        Home
      </MenuLink>
     
        <MenuLink to="/catalog">
          Catalog
        </MenuLink>
        <MenuLink to="/favorite">
         Favorite
        </MenuLink>
     
    </nav>
  );
};
