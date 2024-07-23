import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";

const GameOverPage: React.FC<{ score: number }> = ({ score }) => {
  const { publicKey } = useWallet();

  useEffect(() => {
    if (publicKey) {
      fetch("/api/scores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ score, wallet: publicKey.toBase58() }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Score added:", data))
        .catch((error) => console.error("Error adding score:", error));
    }
  }, [publicKey, score]);
  const handlePlayClick = () => {
    window.location.reload();
  };

  return (
    <div className="hidden landscape:block">
      <div className="h-[450px] lg:h-[600px] w-full lg:w-[1000px] rounded-lg border-2 border-white shadow-xl relative backdrop-blur-md gameoverpage">
        <div>
          <div>
            <div className="game-over-page flex bg-cover flex-col items-center justify-start bg-[url('/Pupilz/Background2-sheet0.png')] rounded-lg gameoverpng">
              <div className="w-full flex items-center justify-center mt-5 ">
                <Image
                  src="/Pupilz/Promo-sheet0.png"
                  alt="Logo"
                  width={450}
                  height={450}
                  className="w-[45%]"
                />
              </div>
              <div className="absolute bottom-20">
                <div
                  onClick={handlePlayClick}
                  className="w-[100px] cursor-pointer relative z-30 hover:opacity-90"
                >
                  <Image
                    src="/Pupilz/Playbutton-sheet0.png"
                    alt="Play"
                    width={100}
                    height={100}
                    className="w-[100px] lg:w-[240px]"
                  />
                </div>
              </div>
              <div
                className="text-5xl uppercase mt-5 font-extrabold bg-clip-text text-transparent bg-gradient-to-t from-[#AD6EF3] to-[#E36EFA]"
                style={{ WebkitTextStroke: "2px black" }}
              >
                Score: {score}
              </div>
              <div className="absolute flex items-center gap-4 bottom-1 left-32">
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
    </div>
  );
};

export default GameOverPage;
