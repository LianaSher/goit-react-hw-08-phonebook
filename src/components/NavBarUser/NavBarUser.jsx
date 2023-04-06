import { useSelector } from 'react-redux';

import { Btn } from '../shared/Button/Button';
import { selectUser } from '../../redax/selectors';

import { UserMenu, UserEmail } from '../NavBarUser/NavBarUser.styled';

export const NavBarUser = () => {
  const { email } = useSelector(selectUser);
  return (
    <UserMenu>
      <UserEmail>{email}</UserEmail>
      <Btn type={'button'} btnName={'Logout'} />
    </UserMenu>
  );
};
