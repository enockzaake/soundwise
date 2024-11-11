import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex gap-2 items-center font-bold">
      <Image src="/images/wave.png" alt="logo" width={30} height={30} />
      SoundStats
    </div>
  );
}
