import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Hola mundo desde Next.js App</h1>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={100}
        height={20}
        priority
      />
    </div>
  );
}
