import AddContactForm from 'components/AddContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { Container } from '@mui/material';

export default function Contacts() {
  return (
    <Container>
      <AddContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
}
