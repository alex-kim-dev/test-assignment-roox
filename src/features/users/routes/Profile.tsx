import { useParams } from 'react-router-dom';

import { ContentLayout } from '~/components';

import { useUser } from '../api/getUser';
import { UserProfile } from '../components';

export const Profile: React.FC = () => {
  const { userId } = useParams();
  const { user, isLoading, error } = useUser(Number(userId));
  const errorMsg = error ? `Error: ${error.message}` : '';

  return (
    <ContentLayout
      errorMsg={errorMsg}
      isLoading={isLoading}
      title='User Profile'>
      {user && <UserProfile user={user} />}
    </ContentLayout>
  );
};
