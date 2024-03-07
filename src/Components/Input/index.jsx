import { useMemo } from "react";
import styles from "./styles.module.css";

const Input = ({ placeholder, size = "DEFAULT", className, ...others }) => {
  const sizeStyle = useMemo(() => {
    switch (size) {
      case "SMALL":
        return styles.sizeSmall;

      case "LARGE":
        return styles.sizeLarge;

      default:
        return styles.sizeDefault;
    }
  }, [size]);
  return (
    <div className={styles.inputDiv}>
      <input
        type="text"
        placeholder={placeholder}
        className={`${styles.input} ${sizeStyle} ${className}`}
        {...others}
      />
    </div>
  );
};
export default Input;
