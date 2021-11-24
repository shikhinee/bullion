import { createContext, useState } from "react";

const ActiveAnchorContext = createContext({
  activeAnchor: "#home",
  setActiveAnchor: () => {},

  isClicked: false,
  setActiveAnchorImportant: () => {},

  whitePaperActiveAnchor: "#bullion",
  setWhitePaperActiveAnchor: () => {},
});

export const ActiveAnchorContextProvider = ({ children, ...props }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [activeAnchor, setActiveAnchor] = useState("#home");
  const [whitePaperActiveAnchor, setWhitePaperActiveAnchor] =
    useState("#bullion");

  const setActiveAnchorImportant = (hash) => {
    if (isClicked) return;

    setIsClicked(true);
    setActiveAnchor(hash);

    setTimeout(() => {
      setIsClicked(false);
    }, 600);
  };

  const context = {
    activeAnchor: activeAnchor,
    setActiveAnchor: setActiveAnchor,
    isClicked: isClicked,
    setActiveAnchorImportant: setActiveAnchorImportant,
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
