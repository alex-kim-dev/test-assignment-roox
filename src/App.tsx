import { HashRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from '~/components';
import { SortingProvider } from '~/stores/sorting';

import { Profile, Users } from './features/users';

export const App = () => {
  return (
    <HashRouter>
      <SortingProvider>
        <MainLayout>
          <Routes>
            <Route element={<Users />} path='/' />
            <Route element={<Profile />} path='/:userId' />
          </Routes>
        </MainLayout>
      </SortingProvider>
    </HashRouter>
  );
};
