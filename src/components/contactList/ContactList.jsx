import React from 'react';
import ContactListItem from './ContactListItem';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const currentFilter = useSelector(state => state.filter);
  const a = useSelector(state => state.contactsStore.contacts);

  return (
    <ul>
      {a.map(
        value =>
          value.name.includes(currentFilter) && (
            <ContactListItem
              key={value.id}
              id={value.id}
              name={value.name}
              phone={value.phone}
            />
          )
      )}
    </ul>
  );
};

export default ContactList;
