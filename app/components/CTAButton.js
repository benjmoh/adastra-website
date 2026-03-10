import Link from "next/link";

const CALENDLY_URL =
  "https://calendly.com/benjamin-adastrasystems/30min?month=2026-01";

export default function CTAButton({ children = "Book an appointment" }) {
  return (
    <Link
      href={CALENDLY_URL}
      className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-black shadow-soft-glow transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(255,255,255,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-adastra-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      {children}
    </Link>
  );
}

