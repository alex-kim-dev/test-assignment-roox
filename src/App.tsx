import { MainLayout } from './components';

export const App = () => {
  return (
    <MainLayout>
      <h1>Список пользователей</h1>
      <p>
        Иван Иванов {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#'>Подробнее</a>
      </p>
    </MainLayout>
  );
};
