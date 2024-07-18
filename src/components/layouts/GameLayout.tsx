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

  if (!isClient) {
    return null;
  }

  if (timer <= 0) {
    return <GameOverPage score={score} />;
  }

  return (
    <div className="hidden landscape:block">
      <div className="h-[450px] lg:h-[600px] w-full lg:w-[1000px] rounded-lg border-2 border-white shadow-xl relative bg-[url('/Pupilz/Backgroundsheet0.png')] bg-cover backdrop-blur-md">
        <div>
          <div>
            <div className="p-2 flex container mx-auto">
              <div className="ml-auto text-center flex items-center">
                <div>
                  <div className="bg-[url('/Pupilz/Scoreboxpage2.png')] font-bold text-2xl flex items-center justify-center text-white w-[200px] h-[47px] bg-cover">
                    <div
                      className="-mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#F4911E] to-[#F4911E]"
                      style={{ WebkitTextStroke: "1px black" }}
                    >
                      {score}
                    </div>
                  </div>
                </div>
                <div className="flex relative flex-col gap-0 text-white">
                  <div className="relative w-[600px] h-[80px] -mb-4">
                    <div className="bg-[url('/Pupilz/progressb.png')] absolute z-10 w-full h-full bg-cover"></div>
                    <div
                      className="bg-[url('/Pupilz/progressbline.png')] z-0 bg-repeat rounded-lg left-[110px] h-[25px] top-[29px] absolute bottom-0 transition-all duration-500 ease-in-out"
                      style={{ width: (70 / 600) * experience + "%" }}
                    ></div>
                    <div
                      className="absolute flex items-center justify-center right-[35px] bg-clip-text text-transparent bg-gradient-to-r from-[#F4911E] to-[#F4911E] z-30 top-[23px] font-bold text-3xl"
                      style={{ WebkitTextStroke: "1px black" }}
                    >
                      {level}
                    </div>
                  </div>
                </div>
                <div>
                  <LeaderBoardButton />
                </div>
              </div>
            </div>
            <div
              className="flex p-4 pt-0 container mx-auto w-full"
              style={{ minHeight: "50svh" }}
            >
              <div className="flex w-[600px] relative">
                <div
                  className="bg-[url('/Pupilz/timebar.png')] h-[350px] lg:h-[550px] z-10 bg-cover bg-repeat rounded-lg absolute bottom-4 w-[70px] lg:w-[120px]"
                  style={{
                    top: "auto",
                    transition: "height 0.5s ease-in-out 0s",
                  }}
                ></div>
                <div
                  className="bg-[url('/Pupilz/timeline.png')] -left-[25px] lg:-left-[18px] bg-repeat rounded-lg w-[86px] lg:w-[113px] absolute bottom-[50px] lg:bottom-[70px]"
                  style={{
                    height: (93 / 50) * timer + "%",
                    top: "auto",
                    transition: "height 0.5s ease-in-out 0s",
                  }}
                ></div>
              </div>

              <div className="w-full flex-1 items-end justify-end">
                <div
                  className="flex relative bg-black/50 rounded-lg border-white border-2"
                  style={{ width: "774px", height: "430px" }}
                >
                  {grid.map((block, index) => (
                    <ImageBlock key={index} type={block} id={index} />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-black top-10 -mb-4 relative font-bold">
              Time Left: {timer} seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameLayout;
