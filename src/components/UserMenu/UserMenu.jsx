import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from 'redux/auth/userSlice';
import { authOperations } from 'redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <div>
      <p>Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
}
