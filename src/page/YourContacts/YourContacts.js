import { ContactForm } from 'components/ContactForm/ContactForm';
import { GlobalStyle } from 'components/GlobalStyle';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContact,
  selectError,
  selectIsLoading,
  selectSearchedContacts,

} from 'reduxFiles/cont/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'reduxFiles/cont/operators';
import { Helmet } from 'react-helmet';
import {
  ContactsContainer,
  DataContainer,
  DataFrame,
  Header,
  InputContainer,
} from './YourContactStyled';

export default function Contacts() {
  const actualContacts = useSelector(selectSearchedContacts);
  const allContacts = useSelector(selectContact);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <div>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        <h1
          style={{
            textAlign: ' center',
            marginBottom: 20,
          }}
        >
          Phonebook
        </h1>
        <ContactsContainer>
          <InputContainer>
          <Header>Add Contact</Header>
            <ContactForm />

            {isLoading && !error && <b>Request in progress...</b>}

            {allContacts.length > 0 && (
              <div>
                <Header>Find contacts by name</Header>
                <Filter />
              </div>
            )}
          </InputContainer>
          <DataContainer>
            <Header>Contacts</Header>
            {actualContacts.length > 0 && (
              <DataFrame>
                <ContactList />
              </DataFrame>
            )}
          </DataContainer>
        </ContactsContainer>
      </div>
      <GlobalStyle />
    </div>
  );
}
