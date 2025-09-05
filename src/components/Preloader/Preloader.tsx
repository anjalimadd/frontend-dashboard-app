import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Preloader.module.css";

const Preloader = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard"); // go to dashboard after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
      <p>Loading Dashboard...</p>
    </div>
  );
};

export default Preloader;
