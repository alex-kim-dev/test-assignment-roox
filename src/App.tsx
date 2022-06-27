import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from '~/components';
import { SortingProvider } from '~/stores/sorting';

import { Users } from './features/users';

export const App = () => {
  return (
    <BrowserRouter>
      <SortingProvider>
        <MainLayout>
          <Routes>
            <Route element={<Users />} path='/' />
            <Route element={<h1>User Profile</h1>} path='/:userid' />
          </Routes>
        </MainLayout>
      </SortingProvider>
    </BrowserRouter>
  );
};
