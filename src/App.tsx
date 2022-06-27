import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { MainLayout } from '~/components';
import { SortingProvider } from '~/stores/sorting';

export const App = () => {
  return (
    <BrowserRouter>
      <SortingProvider>
        <MainLayout>
          <Routes>
            <Route
              element={
                <>
                  <h1>Users list</h1>
                  <Link to='123'>go to a user profile</Link>
                </>
              }
              path='/'
            />
            <Route element={<h1>User Profile</h1>} path='/:userid' />
          </Routes>
        </MainLayout>
      </SortingProvider>
    </BrowserRouter>
  );
};
