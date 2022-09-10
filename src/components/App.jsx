import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { authOperations } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));
const Layout = lazy(() => import('./Layout'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<PublicRoute />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/register" element={<Register />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
