import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout';





const HomePage = lazy(() => import('../page/Home/Home'));

const CatalogPage = lazy(() => import('../page/Catalog/Catalog'));
const FavoritePage = lazy(() => import('../page/Favorite/Favorite'));

export const App = () => {
  // const dispatch = useDispatch();
 

  // useEffect(() => {
  //   dispatch();
  // }, [dispatch]);

  return ( 
   
  
  <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
                 
        
        <Route
          path="/catalog"
          element={<CatalogPage />}/>

        <Route
          path="/favorite"
          element={<FavoritePage />}/>
       <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
    );
  
};
