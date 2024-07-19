import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Section from './Section';
import { store } from '../redux/store';
import { fetchContacts } from '../redux/slices/contactsSlice';

export const App = () => {
  useEffect(() => {
    store.dispatch(fetchContacts());
  }, []);

  return (
    <Provider store={store}>
      <div>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </div>
    </Provider>
  );
};

