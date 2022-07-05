import { useContext } from 'react';

import { userProfileContext } from './utils/userProfileContext';

export const useUserProfile = () => {
  return useContext(userProfileContext);
};
