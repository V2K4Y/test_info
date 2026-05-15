"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollHandler() {
    const searchParams = useSearchParams();

    useEffect(() => {
        const target = searchParams.get("scroll");
        if (!target) return;

        const el = document.getElementById(target);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [searchParams]);

    return null;
}
