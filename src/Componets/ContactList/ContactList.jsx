import PropTypes from 'prop-types';
import { Button } from '../ContactList/ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
// import actions from '../../redux/actions';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactSlice';

export default function ContactList() {
  const { data, isFetching } = useFetchContactsQuery();

  const { contacts } = useSelector(state => {
    const { filter, items } = state.contacts;
    const normalizedFilter = filter.toLowerCase();
    const findContacts = items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return {
      contacts: findContacts,
    };
  });

  // console.log('items', data);

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      {data && (
        <ul>
          {data.map(contact => (
            <li key={contact.id}>
              <span>{contact.name}: </span>
              <span>{contact.phone}</span>
              <Button onClick={() => deleteContact(contact.id)} type="button">
                DELETE
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};
