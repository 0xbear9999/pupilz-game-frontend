import Image from "next/image";
import WalletButton from "../buttons/WalletButton";
import SoundButton from "../buttons/SoundButton";
import PlayButton from "../buttons/PlayButton";

const Dashboard = () => {
  return (
    <div className="h-[400px] hidden landscape:block lg:h-[600px] w-full lg:w-[1000px] rounded-lg border-2 border-white shadow-xl relative bg-[url('/Pupilz/Background2-sheet0.png')] bg-cover backdrop-blur-md">
      <div className="container mx-auto">
        <div className="w-full py-2 px-4 flex items-center justify-between">
          <div>
            <SoundButton />
          </div>
          <div className="home-w emilys-candy-regular">
            <WalletButton />
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          <Image
            src="/Pupilz/Promo-sheet0.png"
            alt="Logo"
            width={1000}
            height={1000}
            className="w-[40%]"
          />
        </div>
        <div className="flex items-center mt-10 justify-center">
          <PlayButton />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
