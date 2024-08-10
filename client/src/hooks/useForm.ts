import { useState, ChangeEvent, FormEvent } from 'react';

type FormValues = Record<string, any>;

type SubmitCallback<T> = (values: T) => void;

interface UseFormProps<T> {
  initialValues: T;
  submitCallback: SubmitCallback<T>;
}

interface UseFormReturn<T> {
  values: T;
  changeHandler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  submitHandler: (e: FormEvent<HTMLFormElement>) => void;
}

export function useForm<T extends FormValues>({ initialValues, submitCallback }: UseFormProps<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitCallback(values);
  };

  return {
    values,
    changeHandler,
    submitHandler,
  };
}
