import Image from "next/image";

export default function Logo() {
  return (
    <div className="inline-flex items-center gap-3">
      {/* 
        LOGO IMAGE
        Replace src with your own logo file in /public/images and adjust sizes as needed.
      */}
      <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/18 bg-white/5 shadow-soft-glow">
        <Image
          src="images/logo-adastra.png"
          alt="Adastra Systems logo"
          fill
          className="object-contain p-1.5"
        />
      </div>
      <span className="text-[11px] uppercase tracking-[0.35em] text-adastra-muted/80">
        Adastra Systems
      </span>
    </div>
  );
}

