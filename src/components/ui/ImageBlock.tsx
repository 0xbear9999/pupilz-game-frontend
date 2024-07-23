import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import { GameContext } from "@/context/GameContext";

interface ImageBlockProps {
  id: number;
  type: number;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ id, type }) => {
  const { selected, add, destroyingTiles, fadingInTiles } =
    useContext(GameContext)!;
  const [isHovered, setIsHovered] = useState(false);

  const isActive = selected.includes(id);
  const isDestroying = destroyingTiles.includes(id);
  const isFadingIn = fadingInTiles.includes(id);
  const src =
    isActive || isHovered
      ? `/Pupilz/pieces/piece-${type}-active.png`
      : `/Pupilz/pieces/piece-${type}.png`;

  const handleClick = () => {
    add(id, type);
  };

  return (
    <Image
      src={src}
      alt={`Piece ${type}`}
      className={`absolute ${isDestroying ? "fade-out" : ""} ${
        isFadingIn ? "fade-in" : ""
      }`}
      layout="fill"
      objectFit="cover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    />
  );
};

export default ImageBlock;
