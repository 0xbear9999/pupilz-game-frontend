import Image from "next/image";
import Link from "next/link";

const CloseButton = () => {
  return (
    <Link href="/" legacyBehavior>
      <a>
        <Image
          src="/Pupilz/Closebutton-sheet0.png"
          width={80}
          height={80}
          className="w-[80px]"
          alt="Menu"
        />
      </a>
    </Link>
  );
};

export default CloseButton;
