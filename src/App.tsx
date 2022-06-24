import { MainLayout, Spinner } from './components';

export const App = () => {
  return (
    <MainLayout>
      <h1>Список пользователей</h1>
      <p>
        Иван Иванов {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#'>Подробнее</a>
      </p>
      <div style={{ width: '2rem', aspectRatio: '1' }}>
        <Spinner />
      </div>
    </MainLayout>
  );
};
