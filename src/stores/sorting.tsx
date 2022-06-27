import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

export enum SortingOptions {
  default = 'default',
  city = 'city',
  company = 'company',
}

const sortingContext = createContext<
  [SortingOptions, Dispatch<SetStateAction<SortingOptions>>]
>([SortingOptions.default, () => {}]);

export const SortingProvider: React.FC = ({ children }) => {
  const state = useState<SortingOptions>(SortingOptions.default);

  return (
    <sortingContext.Provider value={state}>{children}</sortingContext.Provider>
  );
};

export const useSorting = () => {
  return useContext(sortingContext);
};
