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
import { CatalogContainer, CatalogHead, FilterContainer } from './CatalogStyled';
import { Loader } from 'components/AppLayoutStyled';
import { Hourglass } from 'react-loader-spinner';
import { Filters } from 'components/Filters/Filters';

export default function Campers() {
  const dispatch = useDispatch();
  const allCampers = useSelector(selectCamper);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Helmet>
          <title>Campers Catalog: Rate and Reviews</title>
        </Helmet>
        <CatalogHead>Camper catalog</CatalogHead>
        <div>
          <>
            {isLoading && !error && (
              <Loader>
                <Hourglass
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="hourglass-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  colors={['#3d3d3d', 'red']}
                />
              </Loader>
            )}
          </>
          

          <CatalogContainer>
            <FilterContainer>
            <Filters />
            </FilterContainer>

            {allCampers.length > 0 && (
              <div>
                <CamperList />
              </div>
            )}
          </CatalogContainer>
        </div>
      </div>
      <GlobalStyle />
    </div>
  );
}
