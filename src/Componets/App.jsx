import { Toaster } from 'react-hot-toast';
import ContactForm from 'Componets/ContactForm/ContactForm';
import ContactList from 'Componets/ContactList/ContactList';
import Filter from 'Componets/Filter/Filter';
import { Card } from './App.styled';

export default function App() {
  return (
    <Card>
      <h1 className="title">Phonebook</h1>
      <Toaster />
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </Card>
  );
}
