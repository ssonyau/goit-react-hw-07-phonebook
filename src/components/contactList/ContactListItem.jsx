import { deleteContactByID } from 'operations';
import React from 'react';
import { useDispatch } from 'react-redux';
// import { removeContactRedux } from 'slice';

const ContactListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="itemContainer">
        <span>{name}: </span>
        <span>{phone}</span>
        <button onClick={() => dispatch(deleteContactByID(id))}>Delete</button>
      </div>
    </li>
  );
};

export default ContactListItem;
