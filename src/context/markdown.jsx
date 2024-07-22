import { createContext, useContext, useEffect, useState } from "react";

const MarkdownContext = createContext(null);

export const MarkdownProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    setMarkdown(JSON.parse(localStorage.getItem("markdown")));
  }, []);

  return (
    <MarkdownContext.Provider value={[markdown, setMarkdown]}>
      {children}
    </MarkdownContext.Provider>
  );
};

export default function useMarkdown() {
  return useContext(MarkdownContext);
}
