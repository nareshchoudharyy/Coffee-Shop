import Image from "next/image";

export default function PageHeader({ title, subtitle, image }) {
  return (
    <div className="relative h-[50vh]">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover brightness-[0.85]"
        priority
      />
      <div className="absolute inset-0 bg-black/40">
        <div className="max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-light text-white">{title}</h1>
          {subtitle && <p className="text-[#D4D1CC] mt-4">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
} 