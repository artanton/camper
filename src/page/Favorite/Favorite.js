import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { GlobalStyle } from 'components/GlobalStyle';
import { CamperList } from 'components/ContactList/ContactList';
import {
  selectContact,
  selectError,
  selectIsLoading,
  // selectSearchedContacts,

} from 'reduxFiles/cont/selectors';
import { fetchData } from 'reduxFiles/cont/operators';
import {
  ContactsContainer,
  DataContainer,
  DataFrame,
  InputContainer,
} from './FavoriteStyled';

export default function Campers() {
 
  const allCampers = useSelector(selectContact);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchData());
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

            
          </InputContainer>
          <DataContainer>
           
            { allCampers.length > 0 && (
              <DataFrame>
                <CamperList />
              </DataFrame>
            )}
          </DataContainer>
        </ContactsContainer>
      </div>
      <GlobalStyle />
    </div>
  );
}
