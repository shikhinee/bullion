// IMPORTING USE CONTEXT FROM REACT TO USE STORE
import { useContext } from "react";

// IMPORTING THEME CONTEXT FROM STORE
import ThemeContext from "@/store/ThemeContext";

const ThemeLayout = ({ children, ...props }) => {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <div className={darkTheme ? "dark" : "light"}>
      <style jsx global>{`
        body {
          background-color: ${darkTheme ? "#000000" : "#f5f5f5"};
          color: ${darkTheme ? "#e6e4e0" : "#414141"};
        }
      `}</style>
      {children}
    </div>
  );
};

export default ThemeLayout;
