import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from '../GlobalStales';

import { NavBar } from './NavBar/NavBar';
import { HomePage } from '../pages/homePage/HomePage';
import { MyContacts } from '../pages/myContacts/MyContacts';
import { Register } from '../pages/register/register';
import { LogIn } from '../pages/logIn/LogIn';
import { PrivateRout } from '../components/PrivateRout/PrivateRout';
import { PublicRout } from '../components/PublicRout/PublicRout';
import { fetchGetCurrent } from '../redax/operations';
import { selectIsRefreshing } from '../redax/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(fetchGetCurrent());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />

          <Route
            path="/myContacts"
            element={
              <PrivateRout redirectTo="/logIn" component={<MyContacts />} />
            }
          />

          <Route
            path="/register"
            element={
              <PublicRout redirectTo="/myContacts" component={<Register />} />
            }
          />
          <Route
            path="/logIn"
            element={
              <PublicRout redirectTo="/myContacts" component={<LogIn />} />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
