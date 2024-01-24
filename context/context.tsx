"use client";
import { createContext, useState } from "react";

export const ApplicationContext = createContext({});

function Context({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<null| {}> ();
  return (
    <ApplicationContext.Provider value={{ state, setState }}>
      {children}
    </ApplicationContext.Provider>
  );
}
export default Context;
