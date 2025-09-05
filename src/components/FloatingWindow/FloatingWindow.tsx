import  { useState, useContext } from "react";
import styles from "./FloatingWindow.module.css";
import { FormContext } from "../context/FormContext";

const FloatingWindow = () => {
  const [open, setOpen] = useState(true);
  const context = useContext(FormContext);

  if (!context || !open) return null;

  const { data } = context;

  return (
    <div className={styles.window}>
      <button className={styles.closeBtn} onClick={() => setOpen(false)}>X</button>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
    </div>
  );
};

export default FloatingWindow;
