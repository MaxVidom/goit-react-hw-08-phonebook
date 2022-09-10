import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterContactSlice';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactApi';
import { getIsLoggedIn } from 'redux/auth/userSlice';

export default function ContactList() {
  const { data, error } = useGetAllContactsQuery();
  const filterContact = useSelector(getFilter);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const [deleteContact] = useDeleteContactMutation();

  console.log(data);
  const getVisibleContacts = () => {
    const normalizedFilter = filterContact.toLowerCase();
    return (
      data &&
      data.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    );
  };

  const visibbleContacts = getVisibleContacts();

  return (
    <div>
      <Typography variant="h5">Contact List:</Typography>

      <List>
        {visibbleContacts &&
          isLoggedIn &&
          !error &&
          visibbleContacts.map(({ id, name, number }, i) => {
            return (
              <ListItem key={id} sx={{ maxWidth: 600 }}>
                <ListItemText primary={`${i + 1}) ${name}:`} />
                <ListItemText primary={`+${number};`} />
                <IconButton
                  type="button"
                  onClick={evt => {
                    evt.preventDefault();
                    deleteContact(id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}
