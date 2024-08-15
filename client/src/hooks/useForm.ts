import { useState, ChangeEvent, FormEvent, useEffect } from 'react';

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
  setValues: React.Dispatch<React.SetStateAction<T>>;
}

export function useForm<T extends FormValues>({ initialValues, submitCallback }: UseFormProps<T>): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    await submitCallback(values);

    setValues(initialValues)
  };

  return {
    values,
    changeHandler,
    submitHandler,
    setValues
  };
}

