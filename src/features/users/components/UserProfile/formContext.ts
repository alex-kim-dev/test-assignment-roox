import { createContext, useContext } from 'react';

interface FormContextShape {
  isFormTouched: boolean;
}

export const formContext = createContext<FormContextShape>({
  isFormTouched: false,
});

export const { Provider: FormProvider } = formContext;

export const useForm = () => {
  return useContext(formContext);
};
