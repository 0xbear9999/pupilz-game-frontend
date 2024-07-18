"use client";
import React, { useState, useContext } from "react";
import Image from "next/image";
import { GameContext } from "@/context/GameContext";

interface ImageBlockProps {
  id: number;
  type: number;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ id, type }) => {
  const { selected, add } = useContext(GameContext)!;
  const [isHovered, setIsHovered] = useState(false);

  const isActive = selected.includes(id);
  const src =
    isActive || isHovered
      ? `/Pupilz/pieces/piece-${type}-active.png`
      : `/Pupilz/pieces/piece-${type}.png`;

  const side = 10.75;
  const size = 64.5;
  const xPos = (id % 9) * (size + side * 2) + side;
  const yPos = Math.floor(id / 9) * (size + side * 2) + side;

  const handleClick = () => {
    add(id, type);
  };

  return (
    <Image
      src={src}
      alt={`Piece ${type}`}
      className="absolute"
      width={size}
      height={size}
      style={{
        transform: `translate3d(${xPos}px, ${yPos}px, 0) scale(1)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    />
  );
};

export default ImageBlock;
