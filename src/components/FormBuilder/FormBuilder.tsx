import { useContext, useState, useEffect } from "react";
import styles from "./FormBuilder.module.css";
import { FormContext } from "../context/FormContext";

interface FormBuilderProps {
  setClearErrors: (fn: () => void) => void;
}

const FormBuilder = ({ setClearErrors }: FormBuilderProps) => {
  const context = useContext(FormContext);
  if (!context) return null;

  const { data, setData } = context;
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  useEffect(() => {
    setClearErrors(() => () => setErrors({}));
  }, [setClearErrors]);

  const validate = () => {
    const newErrors: { name?: string; email?: string } = {};

    if (!data.name.trim()) newErrors.name = "Name is required";
    if (!data.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(data.email))
      newErrors.email = "Enter a valid email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setData({ name: "", email: "" }); // clear form
      localStorage.removeItem("formData"); // clear persisted data
      setErrors({}); // clear errors
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label>Name:</label>
      <input
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      {errors.name && <span className={styles.error}>{errors.name}</span>}

      <label>Email:</label>
      <input
        type="email"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      {errors.email && <span className={styles.error}>{errors.email}</span>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormBuilder;
