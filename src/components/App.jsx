import { fetchContacts } from 'operations';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import css from './App.module.css';
import ContactForm from './ContactForm';
import ContactList from './contactList';
import Filter from './Filter';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  });
  return (
    <div className={css.goitTemplateMarkup}>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
