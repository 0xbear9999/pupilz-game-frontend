import Image from "next/image";
import Link from "next/link";

const LeaderBoardButton = () => {
  return (
    <Link href="/leaderboard" legacyBehavior>
      <a>
        <Image
          src="/Pupilz/Menubutton-sheet0.png"
          width={80}
          height={80}
          className="w-[80px]"
          alt="Menu"
        />
      </a>
    </Link>
  );
};

export default LeaderBoardButton;
