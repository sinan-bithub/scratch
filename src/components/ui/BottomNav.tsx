"use client";

import { motion } from "framer-motion";
import { Home, Users, CalendarDays, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function BottomNav() {
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/coach", icon: <Home className="w-6 h-6" /> },
        { label: "Roster", href: "/coach/players", icon: <Users className="w-6 h-6" /> },
        { label: "Schedule", href: "/coach/schedule", icon: <CalendarDays className="w-6 h-6" /> },
        { label: "Settings", href: "/coach/settings", icon: <Settings className="w-6 h-6" /> },
    ];

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[400px] z-[100]"
        >
            <div className="relative bg-[#0a0e17]/80 backdrop-blur-[40px] backdrop-saturate-[1.5] border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] rounded-[32px] overflow-hidden">

                {/* Liquid Turbulence Effect Mesh */}
                <div className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-screen">
                    <div className="absolute -top-[50%] -left-[20%] w-[150%] h-[150%] bg-gradient-to-r from-accent-blue/10 via-brand-500/20 to-purple-500/10 blur-[20px] animate-lava-flow" />
                    <div className="absolute bottom-[-10px] right-[-10px] w-24 h-24 bg-accent-blue/30 rounded-full blur-[24px] animate-pulse" style={{ animationDuration: '4s' }} />
                </div>

                {/* Glossy Top Edge Highlight */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-10" />

                <div className="relative z-20 px-6 py-4 flex justify-between items-center w-full">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;

                        return (
                            <Link key={item.href} href={item.href}>
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                    className="relative flex flex-col items-center gap-1"
                                >
                                    {/* Active Indicator Dot */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="bottomNavIndicator"
                                            className="absolute -top-3 w-1.5 h-1.5 rounded-full bg-accent-blue shadow-[0_0_10px_rgba(0,225,255,0.8)]"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}

                                    <div className={cn(
                                        "transition-all duration-300 relative",
                                        isActive ? "text-accent-blue drop-shadow-[0_0_12px_rgba(0,225,255,0.6)] scale-110" : "text-white/50 hover:text-white/90"
                                    )}>
                                        {item.icon}
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}
