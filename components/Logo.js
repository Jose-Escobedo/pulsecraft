import Link from "next/link";
import Image from "next/image";

export default function Logo({white}) {
  return (
    white ? ( <Link href="/" className="block w-[160px] h-[80px] relative">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pulsecraftwhite.png?alt=media&token=5ab31648-c126-4e4e-986e-5d9bd3a4b767"
        alt="Pulsecraft Logo"
        fill
        className="object-contain"
        priority
      />
    </Link>): (<Link href="/" className="block w-[200px] h-[66px] relative">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pulsecraftlandscapelessspace.png?alt=media&token=0df18799-a077-4d88-b5a1-fd17fc2fca0a"
        alt="Pulsecraft Logo"
        fill
        className="object-contain"
        priority
      />
    </Link>)
   
  );
}
