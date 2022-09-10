import { AppBar, Typography, Toolbar, Grid } from '@mui/material';
import { Container } from '@mui/system';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet, NavLink } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/userSlice';

export default function Layout() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      <AppBar position="static">
        <Container>
          <Toolbar>
            {isLoggedIn ? (
              <Grid
                container
                spacing={2}
                direction="row-reverse"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <UserMenu />
                </Grid>
                <Grid item xs={2}>
                  <NavLink to="/contacts">
                    <Typography variant="h6">Contacts</Typography>
                  </NavLink>
                </Grid>
              </Grid>
            ) : (
              <Grid container spacing={2}>
                <Grid item>
                  <NavLink to="/login">
                    <Typography variant="h6">Login</Typography>
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink to="/register">
                    <Typography variant="h6">Register</Typography>
                  </NavLink>
                </Grid>
              </Grid>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </div>
  );
}
