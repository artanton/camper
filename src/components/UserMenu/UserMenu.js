import { useAuth } from 'Hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'reduxFiles/auth/operations';
import { Button, LogOutMenu} from './UserMenu.Styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <LogOutMenu>
      <p >{user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </LogOutMenu>
  );
};
