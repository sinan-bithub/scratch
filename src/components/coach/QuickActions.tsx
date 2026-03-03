"use client";

import { motion } from "framer-motion";
import { Users, Activity, CalendarCheck, HeartPulse } from "lucide-react";
import { LiquidCard } from "@/components/ui/LiquidCard";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function QuickActions() {
    const actions = [
        { icon: <Users className="w-6 h-6 text-accent-blue" />, label: "Players", href: "/coach/players" },
        { icon: <Activity className="w-6 h-6 text-purple-400" />, label: "Workout", href: "#" },
        { icon: <CalendarCheck className="w-6 h-6 text-green-400" />, label: "Schedule", href: "/coach/schedule" },
        { icon: <HeartPulse className="w-6 h-6 text-red-400" />, label: "Health", href: "#" },
    ];

    return (
        <div className="grid grid-cols-4 gap-3">
            {actions.map((action, i) => (
                <Link key={i} href={action.href}>
                    <LiquidCard interactive className="flex flex-col items-center justify-center p-3 gap-2 aspect-square group">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            {action.icon}
                        </div>
                        <span className="text-[10px] text-white/70 font-medium group-hover:text-white transition-colors">
                            {action.label}
                        </span>
                    </LiquidCard>
                </Link>
            ))}
        </div>
    );
}
