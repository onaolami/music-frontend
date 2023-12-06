import { useMemo } from "react";
import styles from "./styles.module.css";
const Button = ({ children, variant = "DEFAULT", size = "DEFAULT",className }) => {
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
    <button
      className={`${styles.btn} ${
        variant === "DEFAULT" ? styles.variantDefault : styles.variantPrimary
      } ${sizeStyle} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
