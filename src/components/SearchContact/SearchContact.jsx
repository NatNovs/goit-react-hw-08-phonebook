import React from 'react';
import { SearchWrapper } from './SearchContact.styled';
import { useDispatch } from 'react-redux';
import { searchContact } from 'store/contacts/contactsSlice';
import { Input } from '@chakra-ui/react';

export const SearchContact = () => {
  const dispatch = useDispatch();

  function handleChange({ target: { value } }) {
    dispatch(searchContact(value));
  }
  return (
    <SearchWrapper>
      <label htmlFor="search">Find contact:</label>
      <Input mb="15" onChange={handleChange} type="text" id="search" />
    </SearchWrapper>
  );
};