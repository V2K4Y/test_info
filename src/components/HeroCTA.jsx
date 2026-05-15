"use client";

import { useRouter } from "next/navigation";

export default function HeroCTA() {
  const router = useRouter();

  return (
    <div className="mt-6 flex flex-col items-center gap-3">
      <button
        onClick={() => router.push("/services")}
        className="rounded-full bg-white px-8 py-3 text-[15px] font-semibold text-black shadow-lg transition-all hover:bg-zinc-200 hover:shadow-xl"
      >
        Get Started
      </button>
    </div>
  );
}
