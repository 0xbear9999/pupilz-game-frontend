"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { SoundContext } from "@/context/SoundContext";

const SoundButton: React.FC = () => {
  const soundContext = useContext(SoundContext);

  if (!soundContext) {
    throw new Error("SoundButton must be used within a SoundProvider");
  }

  const { isSoundOn, toggleSound } = soundContext;

  return (
    <div onClick={toggleSound} className="cursor-pointer hover:opacity-80">
      <Image
        src={
          isSoundOn
            ? "/Pupilz/Soundbutton-sheet0.png"
            : "/Pupilz/Soundbutton-sheet1.png"
        }
        alt="Sound Toggle"
        width={80}
        height={80}
        className="w-[80px]"
      />
    </div>
  );
};

export default SoundButton;
