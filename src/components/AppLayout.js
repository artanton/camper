import { Suspense } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Outlet } from 'react-router-dom';
import {Hourglass} from 'react-loader-spinner';
import { Container, Loader } from './AppLayoutStyled';
import { AppBar } from './AppBar/AppBar';

export const AppLayout = () => {
  return (
    <Container>
      <AppBar />

      <main>
        <Suspense
          fallback={
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
          }
        >
          <Outlet />
        </Suspense>
      </main>

      <GlobalStyle />
    </Container>
  );
};