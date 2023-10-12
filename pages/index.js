import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-extrabold text-white w-full text-center flex h-full align-middle justify-center">
        Cricket Catalyst
      </h1>
    </main>
  );
}
