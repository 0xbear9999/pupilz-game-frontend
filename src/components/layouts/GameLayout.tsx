"use client";

import React, { useContext, useEffect, useState } from "react";
import ImageBlock from "../ui/ImageBlock";
import { GameContext } from "@/context/GameContext";
import GameOverPage from "./GameOverPage";
import LeaderBoardButton from "../buttons/LeaderBoardButton";

const GameLayout: React.FC = () => {
  const { grid, timer, score, level, experience } = useContext(GameContext)!;
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;
  if (timer <= 0) {
    return <GameOverPage score={score} />;
  }

  return (
    <div className="hidden landscape:block">
      <div className="gameLayout">
        <div className="top">
          <div className="scoreBoard">{score}</div>
          <div className="menu">
            <LeaderBoardButton />
          </div>
        </div>
        <div className="medium">
          <div className="timeBar">
            <div
              className="liquid"
              style={{ height: (83 / 50) * timer + "%" }}
            ></div>
            <div className="box"></div>
          </div>
          <div className="mainGrid">
            <div
              className="progressLine"
              style={{ width: (49 / 500) * experience + "%" }}
            ></div>
            <div className="progressBar">
              <div className="level">{level}</div>
            </div>
            <div className="box">
              {grid.map((block, index) => (
                <div className="item">
                  <ImageBlock key={index} type={block} id={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bottom">Time Left: {timer} seconds</div>
      </div>
    </div>
  );
};

export default GameLayout;
