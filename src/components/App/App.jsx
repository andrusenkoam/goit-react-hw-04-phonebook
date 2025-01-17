import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const renderedContacts = getFilteredContacts();

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    contacts.length !== 0 &&
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function addContact({ name, number }) {
    const addContact = {
      id: nanoid(),
      name,
      number,
    };

    inContacts(addContact, contacts);

    setContacts(prevContacts => [addContact, ...prevContacts]);
  }

  function inContacts(newContact, contacts) {
    const inContacts = contacts.find(
      contact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (inContacts) {
      toast.warn(`${addContact.name} is already in contacts!`, {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  }

  function removeContact(contactId) {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  }

  function changeFilter(e) {
    const { value } = e.target;
    setFilter(value);
  }

  function getFilteredContacts() {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onSubmit={addContact} />

      {contacts.length !== 0 && (
        <>
          <ContactsTitle>Contacts</ContactsTitle>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList contacts={renderedContacts} onClick={removeContact} />
        </>
      )}
      <ToastContainer />
    </Container>
  );
}
