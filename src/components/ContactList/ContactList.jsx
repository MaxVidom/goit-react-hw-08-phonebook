import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterContactSlice';
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
  console.log(error);

  const getVisibleContacts = () => {
    const normalizedFilter = filterContact.toLowerCase();
    console.log(data);
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
      <h2>Contact List</h2>
      <ul>
        {visibbleContacts &&
          isLoggedIn &&
          !error &&
          visibbleContacts.map(({ id, name, number }, i) => {
            return (
              <li key={id}>
                {i + 1}) {name}: {number};
                <button
                  type="button"
                  onClick={evt => {
                    evt.preventDefault();
                    deleteContact(id);
                  }}
                >
                  DELETE
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
