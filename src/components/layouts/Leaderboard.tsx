"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import SoundButton from "@/components/buttons/SoundButton";
import CloseButton from "../buttons/CloseButton";

interface Score {
  wallet: string;
  score: number;
}

const Leaderboard: React.FC = () => {
  const [scores, setScores] = useState<Score[]>([]);

  useEffect(() => {
    fetch("/api/scores")
      .then((response) => response.json())
      .then((data) => {
        const sortedScores = data.sort(
          (a: Score, b: Score) => b.score - a.score
        );
        setScores(sortedScores);
      })
      .catch((error) => console.error("Error fetching scores:", error));
  }, []);

  return (
    <div className="hidden landscape:block">
      <div className="h-[400px] lg:h-[600px] w-full lg:w-[1000px] rounded-lg border-2 border-white shadow-xl relative bg-[url('/Pupilz/lead-bg.png')] bg-center bg-cover backdrop-blur-md leaderboard">
        <div className="container mx-auto">
          <div className="absolute top-0 py-2 px-4 w-full flex items-center justify-between">
            <div>
              <SoundButton />
            </div>
            <div className="home-w emilys-candy-regular">
              <CloseButton />
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-[50px]">
            <Image
              src="/Pupilz/leaderboard.png"
              alt="Leaderboard"
              width={400}
              height={200}
            />
          </div>
          <div
            className="rounded-lg ml-0 lg:ml-[220px] mt-10 justify-center bg-black/70 w-full lg:w-[600px] h-[450px] mx-auto overflow-y-auto"
            style={{ height: "50vh" }}
          >
            <table className="w-full table-auto mt-6">
              <thead>
                <tr>
                  <th className="text-[#768CFF] text-center pt-4 uppercase text-2xl font-extrabold">
                    Place
                  </th>
                  <th className="text-[#06BA05] text-left pt-4 uppercase text-2xl font-extrabold">
                    Wallet
                  </th>
                  <th className="text-[#D25B0D] text-right pt-4 pr-6 uppercase text-2xl font-extrabold">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {scores.map((score, index) => (
                  <tr
                    key={score.wallet}
                    className={
                      index % 2 === 0
                        ? "hover:bg-purple-700"
                        : "hover:bg-purple-700 bg-[#5524d8]"
                    }
                  >
                    <td className="text-center text-[#FBC84C] font-extrabold text-xl py-2">
                      {index + 1}.
                    </td>
                    <td className="text-left text-[#FBC84C] font-extrabold text-xl">
                      {score.wallet.slice(0, 4)}...{score.wallet.slice(-4)}
                    </td>
                    <td className="text-right pr-6 text-[#FBC84C] font-extrabold text-xl">
                      {score.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
