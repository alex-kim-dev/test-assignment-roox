import type { User } from '../../types';

interface UserProfileProps {
  user: User;
}

export const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return <pre>{JSON.stringify(user, null, 2)}</pre>;
};
