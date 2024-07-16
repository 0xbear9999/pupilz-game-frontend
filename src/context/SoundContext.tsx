"use client";

import React, { createContext, useState, ReactNode } from "react";

interface SoundContextProps {
  isSoundOn: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextProps | undefined>(undefined);

interface SoundProviderProps {
  children: ReactNode;
}

const SoundProvider: React.FC<SoundProviderProps> = ({ children }) => {
  const [isSoundOn, setIsSoundOn] = useState(true);

  const toggleSound = () => {
    setIsSoundOn((prev) => !prev);
  };

  return (
    <SoundContext.Provider value={{ isSoundOn, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};

export { SoundContext, SoundProvider };
