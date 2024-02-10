import { Box, Card, CardBody, Heading } from '@chakra-ui/react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { SearchContact } from 'components/SearchContact/SearchContact';
import React from 'react';

const ContactsPage = () => {
  return (
    <>
      <Box display="flex" mx="auto" justifyContent="center" alignItems="center" maxW="6xl" flexWrap="wrap" gap="20">
        <Card mx="auto" maxW="md" p="6">
          <CardBody>
            <Heading as="h3" size="lg" mb="35" textAlign="center">
              Phonebook
            </Heading>
            <ContactForm />
          </CardBody>
        </Card>
        <Card mx="auto" maxW="md" p="6">
          <CardBody>
            <Heading as="h3" size="lg" mb="35" textAlign="center">
              Contacts
            </Heading>
            <SearchContact />
            <ContactsList />
          </CardBody>
        </Card>
      </Box>
    </>
  );
};

export default ContactsPage;