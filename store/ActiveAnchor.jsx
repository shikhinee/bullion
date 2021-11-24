import { createContext, useState } from "react";

const ActiveAnchorContext = createContext({
  activeAnchor: "#home",
  setActiveAnchor: () => {},

  whitePaperActiveAnchor: "#bullion",
  setWhitePaperActiveAnchor: () => {},
});

export const ActiveAnchorContextProvider = ({ children, ...props }) => {
  const [activeAnchor, setActiveAnchor] = useState("#home");
  const [whitePaperActiveAnchor, setWhitePaperActiveAnchor] =
    useState("#bullion");

  const context = {
    activeAnchor: activeAnchor,
    setActiveAnchor: setActiveAnchor,
    whitePaperActiveAnchor: whitePaperActiveAnchor,
    setWhitePaperActiveAnchor: setWhitePaperActiveAnchor,
  };

  return (
    <ActiveAnchorContext.Provider value={context}>
      {children}
    </ActiveAnchorContext.Provider>
  );
};

export default ActiveAnchorContext;
