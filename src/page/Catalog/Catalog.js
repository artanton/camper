import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalStyle } from 'components/GlobalStyle';
import { CamperList } from 'components/CamperList/CamperList';
import {
  selectCamper,
  selectError,
  selectIsLoading,
  // selectSearchedContacts,
} from 'reduxFiles/camper/selectors';
import { fetchData } from 'reduxFiles/camper/operators';

export default function Campers() {
  const allCampers = useSelector(selectCamper);
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
          <title>Camper catalog</title>
        </Helmet>
        <h1
          style={{
            textAlign: ' center',
            marginBottom: 20,
          }}
        >Catalog</h1>
        <div>
          <div>{isLoading && !error && <b>Request in progress...</b>}</div>
          <div>
            {allCampers.length > 0 && (
              <div>
                <CamperList />
              </div>
            )}
          </div>
        </div>
      </div>
      <GlobalStyle />
    </div>
  );
}
