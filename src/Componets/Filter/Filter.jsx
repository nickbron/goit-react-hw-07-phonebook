import { Input } from '../ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';
import {
  useFetchContactsQuery,
  useFilterContactMutation,
} from 'redux/contactSlice';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  //console.log('filter', filter);
  const dispatch = useDispatch();
  return (
    <>
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        autoComplete="off"
        value={filter}
        onChange={e => dispatch(actions.filterItem(e.target.value))}
      />
    </>
  );
}
