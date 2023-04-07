import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsUserLogin } from '../../redax/selectors';

export const PublicRout = () => {
  const isLogin = useSelector(selectIsUserLogin);

  if (isLogin) {
    return <Navigate to="/myContacts" />;
  } else {
    return <Outlet />;
  }
};
