import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from '../GlobalStales';

import { NavBar } from './NavBar/NavBar';
import { HomePage } from '../pages/homePage/HomePage';
import { MyContacts } from '../pages/myContacts/MyContacts';
import { Register } from '../pages/register/register';
import { LogIn } from '../pages/logIn/LogIn';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<HomePage />} />
          <Route path="/myContacts" element={<MyContacts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logIn" element={<LogIn />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
