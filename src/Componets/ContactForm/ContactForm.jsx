import { Button, Input, Form } from './ContactForm.styled';
import { toast } from 'react-hot-toast';

import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contactSlice';

const handleSubmit = (e, data, createContact) => {
  e.preventDefault();
  const name = e.currentTarget.elements.name.value;
  const phone = e.currentTarget.elements.number.value;

  if (data.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
    toast.error(` ${name} is already in contacts.`);
    return;
  }

  createContact({ name, phone });
  e.currentTarget.reset();
};

export default function ContactForm() {
  const { data } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  return (
    <div>
      <Form onSubmit={e => handleSubmit(e, data, createContact)}>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        />
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    </div>
  );
}
