import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/userSlice';

export default function Layout() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      <nav>
        <NavLink to="/contacts">Contacts</NavLink>
        {isLoggedIn ? (
          <UserMenu />
        ) : (
          <div>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
}
