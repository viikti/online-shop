import { useState, useCallback } from "react";

const useForm = (initialFormValues) => {
  const [form, setForm] = useState(initialFormValues);

  const handleChange = useCallback(({ target }) => {
    const { name, value, type } = target;
    setForm((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);

  const handleReset = useCallback(() => {
    setForm(initialFormValues);
  }, []);

  return { form, handleChange, handleReset };
};

export default useForm;
