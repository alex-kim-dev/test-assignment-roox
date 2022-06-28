import { Spinner } from '~/components';
import { SortingOptions, useSorting } from '~/stores/sorting';

import { useUsers } from '../../api/getUsers';
import type { User } from '../../types';
import { UserItem } from '../UserItem/UserItem';
import css from './UsersList.module.scss';

const select = {
  [SortingOptions.city]: (user: User): string => user.address.city,
  [SortingOptions.company]: (user: User): string => user.company.name,
};

export const UsersList: React.FC = () => {
  const { users, isLoading, error } = useUsers();
  const [sortBy] = useSorting();

  const sortedUsers =
    sortBy === SortingOptions.default
      ? users
      : users.slice().sort((userA, userB) => {
          const a = select[sortBy](userA);
          const b = select[sortBy](userB);
          return a.localeCompare(b);
        });

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
        {sortedUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
      <p className={css.total}>
        Found {users.length} user{users.length > 1 && 's'}
      </p>
    </>
  );
};
