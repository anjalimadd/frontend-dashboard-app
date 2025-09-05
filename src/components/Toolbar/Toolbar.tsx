import  { useContext } from "react";
import { FormContext } from "../context/FormContext";
import styles from "./Toolbar.module.css";

interface ToolbarProps {
  clearErrors: () => void;
}

const Toolbar = ({ clearErrors }: ToolbarProps) => {
  const context = useContext(FormContext);
  if (!context) return null;

  const { setData } = context;

  const handleReset = () => {
    setData({ name: "", email: "" }); // clear form data
    localStorage.removeItem("formData"); // clear persisted data
    clearErrors(); // clear validation errors
  };

  return (
    <div className={styles.toolbar}>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Toolbar;
