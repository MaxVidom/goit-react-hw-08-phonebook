import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from 'redux/auth/userSlice';
import { authOperations } from 'redux/auth';
import { Grid, Typography, Button } from '@mui/material';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Typography mr={2} variant="h6">
          Welcome, {userName}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Logout
        </Button>
      </Grid>
    </Grid>
  );
}
