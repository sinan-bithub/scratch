import { LiquidCard } from "@/components/ui/LiquidCard";
import { User, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PlayerCardProps {
    name: string;
    position: string;
    avatarChar: string;
    status: "cleared" | "injured" | "pending";
}

export function PlayerCard({ name, position, avatarChar, status }: PlayerCardProps) {
    return (
        <Link href={`#`}>
            <LiquidCard interactive className="w-full flex items-center justify-between p-3 relative group overflow-hidden cursor-pointer hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-white/20 bg-black/40 flex items-center justify-center relative shadow-inner">
                        {/* Fallback Graphic */}
                        <User className="w-5 h-5 text-white/50" />

                        {/* Status Indicator Dot */}
                        <div className={cn(
                            "absolute top-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-[#0a0e17]",
                            status === "cleared" ? "bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" :
                                status === "injured" ? "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" :
                                    "bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]"
                        )} />
                    </div>

                    <div className="flex flex-col">
                        <span className="font-semibold text-white tracking-tight">{name}</span>
                        <span className="text-xs text-white/50">{position}</span>
                    </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:bg-accent-blue/20 transition-all duration-300">
                    <ChevronRight className="w-4 h-4 text-white group-hover:text-accent-blue transition-colors" />
                </div>

                {/* Hover Hover Flare */}
                <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-24 h-24 bg-accent-blue/0 group-hover:bg-accent-blue/10 blur-[20px] rounded-full transition-colors duration-500 pointer-events-none" />
            </LiquidCard>
        </Link>
    );
}
