import { Input } from '../ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
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
