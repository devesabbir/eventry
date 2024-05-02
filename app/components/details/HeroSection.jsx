import { getBlurData } from "@/utils";
import Image from "next/image";

async function HeroSection({ event }) {
  const { base64 } = await getBlurData(event.imageUrl);
  return (
    <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
      <Image
        src={event.imageUrl}
        alt={event.name}
        width={900}
        height={500}
        placeholder="blur"
        blurDataURL={base64}
        className="h-[450px]  object-cover mx-auto"
      />
    </div>
  );
}

export default HeroSection;
