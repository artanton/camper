
import { useAuth } from 'Hooks/useAuth';
import { MenuLink } from './NavigationStyled';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <MenuLink  to="/">
        Home
      </MenuLink>
      {isLoggedIn && (
        <MenuLink to="/contacts">
          Contacts
        </MenuLink>
      )}
    </nav>
  );
};
