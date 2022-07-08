import { HashRouter, Route, Routes } from 'react-router-dom';

import { MainLayout } from '~/components';
import { NotFound } from '~/features/misc';
import { Profile, Users } from '~/features/users';
import { SortingProvider } from '~/stores/sorting';

export const App = () => {
  return (
    <HashRouter>
      <SortingProvider>
        <MainLayout>
          <Routes>
            <Route element={<Users />} path='/' />
            <Route element={<Profile />} path='/:userId' />
            <Route element={<NotFound />} path='*' />
          </Routes>
        </MainLayout>
      </SortingProvider>
    </HashRouter>
  );
};
