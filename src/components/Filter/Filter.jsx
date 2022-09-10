import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from 'redux/filterContactSlice';
import { Typography, TextField, Grid } from '@mui/material';

export default function Filter() {
  const filterInput = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterInput = evt => {
    const inputValue = evt.currentTarget.value;
    dispatch(setFilter(inputValue));
  };

  return (
    <Grid container pt={10} pb={5} alignItems="center" justifyContent="center">
      <Grid item>
        <Typography variant="h6" align="left" mr={3}>
          Filter:
        </Typography>
      </Grid>
      <Grid item>
        <TextField
          variant="standard"
          sx={{ width: '50ch' }}
          size="small"
          type="text"
          value={filterInput}
          onChange={handleFilterInput}
        />
      </Grid>
    </Grid>
  );
}
