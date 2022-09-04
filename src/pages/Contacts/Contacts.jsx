import AddContactForm from 'components/AddContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export default function Contacts() {
  return (
    <div>
      <AddContactForm />
      <Filter />
      <ContactList />
    </div>
  );
}
