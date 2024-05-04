import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { GlobalStyle } from 'components/GlobalStyle';
import { ContactList } from 'components/ContactList/ContactList';
import {
  selectContact,
  selectError,
  selectIsLoading,
  selectSearchedContacts,

} from 'reduxFiles/cont/selectors';
import { fetchContacts } from 'reduxFiles/cont/operators';
import {
  ContactsContainer,
  DataContainer,
  DataFrame,
  InputContainer,
} from './FavoriteStyled';

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
    <div>
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
          Phoneboo
        </h1>
        <ContactsContainer>
          <InputContainer>
         

            {isLoading && !error && <b>Request in progress...</b>}

            {allContacts.length > 0 && (
              <div>
                
              </div>
            )}
          </InputContainer>
          <DataContainer>
           
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
