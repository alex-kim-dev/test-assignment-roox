import { ContentLayout } from '~/components';

import { useUsers } from '../api/getUsers';
import { UsersList } from '../components';

export const Users: React.FC = () => {
  const { users, isLoading, error } = useUsers();
  const errorMsg = error ? `Error: ${error.message}` : '';

  return (
    <ContentLayout errorMsg={errorMsg} isLoading={isLoading} title='Users List'>
      <UsersList users={users} />
    </ContentLayout>
  );
};
