import { createContext } from 'react';

interface UserProfileContext {
  isFormTouched: boolean;
}

export const userProfileContext = createContext<UserProfileContext>({
  isFormTouched: false,
});

export const { Provider: UserProfileProvider } = userProfileContext;
