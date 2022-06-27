import { Spinner } from '~/components';

import { useUsers } from '../../api/getUsers';
import { UserItem } from '../UserItem/UserItem';
import css from './UsersList.module.scss';

export const UsersList: React.FC = () => {
  const { users, isLoading, error } = useUsers();

  if (isLoading)
    return (
      <div className={css.spinnerWrapper}>
        <Spinner />
      </div>
    );

  if (error) return <p className={css.errorMsg}>{`Error: ${error.message}`}</p>;

  return (
    <>
      <ul className={css.list}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
      <p className={css.total}>
        Found {users.length} user{users.length > 1 && 's'}
      </p>
    </>
  );
};
