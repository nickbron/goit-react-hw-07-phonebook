import PropTypes from 'prop-types';
import { Button } from '../ContactList/ContactList.styled';
import { useSelector } from 'react-redux';
import { Spinner } from '../Spinner/Spinner';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactSlice';

export default function ContactList() {
  let data1;
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const contacts = useSelector(state => state.contacts.filter);
  if (data) {
    const normalizedFilter = contacts.toLowerCase();
    data1 = data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }

  return (
    <>
      {isFetching && <Spinner />}
      {data1 && (
        <ul>
          {data1.map(contact => (
            <li key={contact.id}>
              <span>{contact.name}: </span>
              <span>{contact.phone}</span>
              <Button
                onClick={() => deleteContact(contact.id)}
                type="button"
                disabled={isLoading}
              >
                {isLoading && <Spinner size={12} />}
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
