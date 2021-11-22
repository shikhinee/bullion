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
          background-color: ${darkTheme ? "#121212" : "#fffdf9"};
          color: ${darkTheme ? "#e6e4e0" : "#2a2a2a"};
        }
      `}</style>
      {children}
    </div>
  );
};

export default ThemeLayout;
