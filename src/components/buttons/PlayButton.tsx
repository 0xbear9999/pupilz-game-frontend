import Image from "next/image";

const PlayButton = () => {
  return (
    <a href="/game/0">
      <div className="relative z-30 cursor-pointer">
        <Image
          src="/Pupilz/Playbutton-sheet0.png"
          alt="Play"
          width={240}
          height={240}
          className="w-[100px] lg:w-[240px] transition-transform duration-300 transform hover:scale-110 hover:opacity-90 animate-pulse-size"
        />
      </div>
    </a>
  );
};

export default PlayButton;
