"use client";

import { useRouter } from "next/navigation";

export default function CollaborationCTA() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/datasets")}
      className="mt-8 rounded-full bg-white px-7 py-2.5 text-sm font-semibold
           text-black shadow-lg shadow-white/20
           transition hover:bg-zinc-100 hover:scale-[1.02] focus:outline-none
           focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-black"
    >
      Explore Collaborative Programs
    </button>
  );
}
