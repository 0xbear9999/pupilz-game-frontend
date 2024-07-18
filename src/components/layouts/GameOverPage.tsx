import React from "react";
import Image from "next/image";
import Link from "next/link";

const GameOverPage: React.FC<{ score: number }> = ({ score }) => {
  const handlePlayClick = () => {
    window.location.reload();
  };

  return (
    <div className=" h-[450px] lg:h-[600px] w-full lg:w-[1000px] rounded-lg border-2 border-white shadow-xl relative bg-[url('/gameplay-bg.png')] bg-cover backdrop-blur-md">
      <div>
        <div>
          <div className="game-over-page flex bg-cover flex-col items-center justify-start bg-[url('/Pupilz/Background2-sheet0.png')] h-[595px] rounded-lg">
            <div className="w-full flex items-center justify-center mt-5">
              <Image
                src="/Pupilz/Promo-sheet0.png"
                alt="Logo"
                width={450}
                height={450}
                className="w-[45%]"
              />
            </div>
            <div className="absolute bottom-28">
              <div
                onClick={handlePlayClick}
                className="w-[150px] cursor-pointer relative z-30 hover:opacity-90"
              >
                <Image
                  src="/Pupilz/Playbutton-sheet0.png"
                  alt="Play"
                  width={150}
                  height={150}
                  className="w-[150px]"
                />
              </div>
            </div>
            <div
              className="text-5xl uppercase mt-5 font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-[#AD6EF3] to-[#E36EFA]"
              style={{ WebkitTextStroke: "2px black" }}
            >
              Score: {score}
            </div>
            <div className="absolute flex items-center gap-4 bottom-10 left-32">
              <Link href="#">
                <Image
                  src="/Pupilz/Di-sheet0.png"
                  alt="D"
                  width={90}
                  height={90}
                  className="w-[90px] h-[90px] cursor-pointer hover:opacity-80"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/Pupilz/Tw-sheet0.png"
                  alt="X"
                  width={90}
                  height={90}
                  className="w-[90px] h-[90px] cursor-pointer hover:opacity-80"
                />
              </Link>
              <Link href="#">
                <Image
                  src="/Pupilz/Site-sheet0.png"
                  alt="P"
                  width={90}
                  height={90}
                  className="w-[90px] h-[90px] cursor-pointer hover:opacity-80"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameOverPage;
