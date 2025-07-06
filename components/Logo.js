import Link from "next/link";
import { Scale } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-start space-x-3 cursor-pointer">

      <div className="pt-1 text-teal-300">
        <Scale size={32} />
      </div>

   
      <div className="flex flex-col leading-tight">
        <span className="text-xl md:text-2xl font-semibold text-white tracking-wide font-sans">
          Therapy Site Studio
        </span>
        <span className="text-sm text-teal-200 font-light">
          Beautiful. Secure. Built for Therapists.
        </span>
      </div>
    </Link>
  );
}
