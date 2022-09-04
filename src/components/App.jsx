import { Routes, Route } from 'react-router-dom';

import Contacts from 'pages/Contacts';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Layout from './Layout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Contacts />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};
