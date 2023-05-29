import ContactForm from './contact-form';
import Filter from './filter';
import ContactList from './contact-list';

export const App = () => {
  return (
    <>
      <h1>Phonebook</h1>

      <ContactForm/>

      <h2>Contacts</h2>

      <Filter/>

      <ContactList/>
    </>
  );
};
