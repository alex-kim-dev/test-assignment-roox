import { Link } from 'react-router-dom';

import type { User } from '../../types';
import css from './UserItem.module.scss';

export const UserItem: React.FC<{ user: User }> = ({
  user: { id, name, address, company },
}) => {
  return (
    <li className={css.item}>
      <dl className={css.info}>
        <div>
          <dt>Name: </dt>
          <dd>{name}</dd>
        </div>
        <div>
          <dt>City: </dt>
          <dd>{address.city}</dd>
        </div>
        <div>
          <dt>Company: </dt>
          <dd>{company.name}</dd>
        </div>
        <Link className={css.link} to={String(id)}>
          More info
        </Link>
      </dl>
    </li>
  );
};
