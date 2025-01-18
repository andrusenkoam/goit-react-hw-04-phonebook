import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
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
          <ContactList
            contacts={getFilteredContacts()}
            onClick={removeContact}
          />
        </>
      )}
      <ToastContainer />
    </Container>
  );
}
