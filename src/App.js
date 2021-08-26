import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import ContactList from 'components/ContactList/ContactList';
import SearchContact from 'components/SearchContact/SearchContact';

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <PhonebookForm />

      <h2>Contacts</h2>
      <SearchContact />
      <ContactList />
    </div>
  );
};

export default App;
