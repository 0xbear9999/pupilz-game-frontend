import React from "react";
import Image from "next/image";
import Link from "next/link";
import SoundButton from "@/components/buttons/SoundButton";
import CloseButton from "../buttons/CloseButton";

const Leaderboard: React.FC = () => {
  return (
    <div className="h-[400px] lg:h-[600px] w-full lg:w-[1000px] rounded-lg border-2 border-white shadow-xl relative bg-[url('/Pupilz/lead-bg.png')] bg-center bg-cover backdrop-blur-md">
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
        <div className="rounded-lg ml-0 lg:ml-[220px]  mt-10 justify-center bg-black/70 w-full lg:w-[600px] h-[450px] mx-auto">
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
                  Profit
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <tr className="hover:bg-purple-700">
                <td className="text-center text-[#FBC84C] font-extrabold text-xl py-2">
                  1.
                </td>
                <td className="text-left text-[#FBC84C] font-extrabold text-xl">
                  41if...J5yBB
                </td>
                <td className="text-right pr-6 text-[#FBC84C] font-extrabold text-xl">
                  1200
                </td>
              </tr>
              <tr className="hover:bg-purple-700 bg-[#5524d8]">
                <td className="text-center text-[#FBC84C] font-extrabold text-xl py-2">
                  2.
                </td>
                <td className="text-left text-[#FBC84C] font-extrabold text-xl">
                  RRB...yzXe
                </td>
                <td className="text-right pr-6 text-[#FBC84C] font-extrabold text-xl">
                  200
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
