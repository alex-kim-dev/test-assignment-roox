import { Button, MainLayout } from './components';

export const App = () => {
  return (
    <MainLayout>
      <h1>Список пользователей</h1>
      <p>
        Иван Иванов {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href='#'>Подробнее</a>
      </p>
      <Button>Button</Button>
      <Button active>Active</Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button disabled loading>
        Loading disabled
      </Button>
      <Button variant='success'>Success</Button>
    </MainLayout>
  );
};
