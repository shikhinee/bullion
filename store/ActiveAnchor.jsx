import { createContext, useState } from "react";

const ActiveAnchorContext = createContext({
  activeAnchor: null,
  setActiveAnchor: () => {},

  whitePaperActiveAnchor: null,
  setWhitePaperActiveAnchor: () => {},
});

export const ActiveAnchorContextProvider = ({ children, ...props }) => {
  const [activeAnchor, setActiveAnchor] = useState(null);
  const [whitePaperActiveAnchor, setWhitePaperActiveAnchor] = useState(null);

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
