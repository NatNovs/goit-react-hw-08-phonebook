import React, { useEffect } from 'react';
import { ContactItem } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk, fetchContactsThunk } from 'store/contacts/contactsThunk';
import { Button } from '@chakra-ui/react';
import { selectUser } from 'store/auth/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteContactThunk(id));
  }

  const { items, error, isLoading } = useSelector(state => state.contacts.contacts);
  const user = useSelector(selectUser);
  const { filter } = useSelector(state => state.contacts);

  useEffect(() => {
    if (user) {
      dispatch(fetchContactsThunk());
    }
  }, [dispatch, user]);

  function filteredContacts() {
    if (filter) return items.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()));
    else return items;
  }

  return (
    <ul>
      {error && <h1>{error}</h1>}
      {isLoading && <h1>Loading...</h1>}
      {filteredContacts().map(el => (
        <ContactItem key={el.id}>
          <h4>
            {el.name}: {el.number}
          </h4>
          <Button
            colorScheme="red"
            variant="outline"
            onClick={() => {
              handleDelete(el.id);
            }}
            type="button"
          >
            DELETE
          </Button>
        </ContactItem>
      ))}
    </ul>
  );
};