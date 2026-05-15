"use client";

import { useState, useEffect, useRef } from "react";

const CookieSettings = ({ isOpen, onClose }) => {
    const modalRef = useRef(null);
    const [cookiePreferences, setCookiePreferences] = useState({
        essential: true, // Always true, cannot be disabled
        analytics: true,
        marketing: true,
        functional: true,
    });

    useEffect(() => {
        if (!isOpen) return;

        // Load saved preferences from localStorage
        const saved = localStorage.getItem("cookiePreferences");
        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                setCookiePreferences({
                    essential: true, // Always enabled
                    analytics: parsed.analytics || false,
                    marketing: parsed.marketing || false,
                    functional: parsed.functional || false,
                });
            } catch (e) {
                console.error("Error parsing cookie preferences:", e);
            }
        }

        // Scroll lock
        const scrollY = window.scrollY || window.pageYOffset;
        const originalStyles = {
            position: document.body.style.position,
            top: document.body.style.top,
            width: document.body.style.width,
        };
        const originalScrollBehavior =
            document.documentElement.style.scrollBehavior || null;

        document.documentElement.style.scrollBehavior = "auto";
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";

        // ESC key handler
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.position = originalStyles.position;
            document.body.style.top = originalStyles.top;
            document.body.style.width = originalStyles.width;
            window.scrollTo(0, scrollY);
            if (originalScrollBehavior === null) {
                document.documentElement.style.removeProperty("scroll-behavior");
            } else {
                document.documentElement.style.scrollBehavior = originalScrollBehavior;
            }
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleToggle = (category) => {
        if (category === "essential") return; // Cannot disable essential cookies
        setCookiePreferences((prev) => ({
            ...prev,
            [category]: !prev[category],
        }));
    };

    const handleAcceptAll = () => {
        const allAccepted = {
            essential: true,
            analytics: true,
            marketing: true,
            functional: true,
        };
        setCookiePreferences(allAccepted);
        localStorage.setItem("cookiePreferences", JSON.stringify(allAccepted));
        localStorage.setItem("cookieConsent", "accepted");
        onClose();
    };

    const handleRejectAll = () => {
        const allRejected = {
            essential: true, // Always enabled
            analytics: false,
            marketing: false,
            functional: false,
        };
        setCookiePreferences(allRejected);
        localStorage.setItem("cookiePreferences", JSON.stringify(allRejected));
        localStorage.setItem("cookieConsent", "rejected");
        onClose();
    };

    const handleSavePreferences = () => {
        localStorage.setItem("cookiePreferences", JSON.stringify(cookiePreferences));
        localStorage.setItem("cookieConsent", "custom");
        onClose();
    };

    if (!isOpen) return null;

    const cookieCategories = [
        {
            id: "essential",
            name: "Essential Cookies",
            description:
                "These cookies are necessary for the website to function properly. They cannot be disabled.",
            required: true,
        },
        {
            id: "analytics",
            name: "Analytics Cookies",
            description:
                "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.",
        },
        {
            id: "marketing",
            name: "Marketing Cookies",
            description:
                "These cookies are used to deliver personalized advertisements and track campaign effectiveness.",
        },
        {
            id: "functional",
            name: "Functional Cookies",
            description:
                "These cookies enable enhanced functionality and personalization, such as remembering your preferences.",
        },
    ];

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-3 py-8"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-2xl rounded-2xl bg-zinc-950 border border-white/10 p-5 md:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.9)] text-left max-h-[90vh] overflow-y-auto ios-scroll modal-scroll"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-5 top-5 text-zinc-400 hover:text-white text-sm"
                >
                    ✕
                </button>

                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                    Cookie Settings
                </h2>
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed mb-6">
                    We use cookies to enhance your browsing experience, analyze site
                    traffic, and personalize content. You can choose which cookies to
                    accept or reject below.
                </p>

                {/* Cookie Categories */}
                <div className="space-y-4 mb-6">
                    {cookieCategories.map((category) => (
                        <div
                            key={category.id}
                            className="rounded-xl border border-white/10 bg-black/70 p-4"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="text-sm md:text-base font-semibold text-white">
                                            {category.name}
                                        </h3>
                                        {category.required && (
                                            <span className="text-xs text-zinc-400">(Required)</span>
                                        )}
                                    </div>
                                    <p className="text-xs md:text-sm text-zinc-300 leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <button
                                        type="button"
                                        onClick={() => handleToggle(category.id)}
                                        disabled={category.required}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-zinc-950 ${cookiePreferences[category.id]
                                            ? "bg-white"
                                            : "bg-zinc-700"
                                            } ${category.required ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                                        aria-label={`Toggle ${category.name}`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-black transition-transform ${cookiePreferences[category.id]
                                                ? "translate-x-6"
                                                : "translate-x-1"
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
                    <button
                        type="button"
                        onClick={handleRejectAll}
                        className="flex-1 rounded-full border border-white/20 bg-transparent px-6 py-3 text-sm font-semibold text-white hover:bg-white/5 transition"
                    >
                        Reject All
                    </button>
                    <button
                        type="button"
                        onClick={handleSavePreferences}
                        className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition"
                    >
                        Save Preferences
                    </button>
                    <button
                        type="button"
                        onClick={handleAcceptAll}
                        className="flex-1 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-zinc-200 transition shadow-md"
                    >
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieSettings;

