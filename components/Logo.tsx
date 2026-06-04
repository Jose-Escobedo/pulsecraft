import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  white?: boolean;
}

export default function Logo({ white = false }: LogoProps) {
  return white ? (
    <Link href="/" className="block w-[160px] h-[80px] relative" aria-label="Pulsecraft home">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pulsecraftwhite.png?alt=media&token=5ab31648-c126-4e4e-986e-5d9bd3a4b767"
        alt="Pulsecraft"
        fill
        className="object-contain"
        priority
      />
    </Link>
  ) : (
    <Link href="/" className="block w-[180px] h-[60px] relative" aria-label="Pulsecraft home">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/tortas-bffc7.appspot.com/o/pulsecraftwhite.png?alt=media&token=5ab31648-c126-4e4e-986e-5d9bd3a4b767"
        alt="Pulsecraft"
        fill
        className="object-contain"
        priority
      />
    </Link>
  );
}
