import { LiquidCard } from "@/components/ui/LiquidCard";
import { User, Activity, TrendingUp } from "lucide-react";

export function ChildProfileCard() {
    return (
        <LiquidCard className="w-full p-5 relative overflow-hidden flex flex-col items-center">
            {/* Background soft glow based on role accent */}
            <div className="absolute top-[-50px] left-[-50px] w-48 h-48 bg-purple-500/10 rounded-full blur-[40px] pointer-events-none" />

            {/* Avatar Avatar */}
            <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-black/40 border-2 border-white/20 shadow-xl overflow-hidden flex justify-center items-center">
                    <User className="w-10 h-10 text-white/50" />
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500/80 rounded-full border-2 border-brand-800 flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
            </div>

            {/* Player Bio */}
            <h2 className="text-2xl font-bold tracking-tight text-white mb-1">Leo Messi Jr.</h2>
            <p className="text-white/60 text-sm font-medium mb-6">U14 Academy • Forward</p>

            {/* Mini Stats Ribbon */}
            <div className="w-full flex justify-between px-4 py-3 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="flex flex-col items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-accent-blue" />
                    <span className="text-xs text-white/50">Performance</span>
                    <span className="text-sm font-semibold">A-</span>
                </div>
                <div className="w-[1px] h-full bg-white/10" />
                <div className="flex flex-col items-center gap-1">
                    <Activity className="w-4 h-4 text-purple-400" />
                    <span className="text-xs text-white/50">Fitness</span>
                    <span className="text-sm font-semibold">92%</span>
                </div>
                <div className="w-[1px] h-full bg-white/10" />
                <div className="flex flex-col items-center gap-1">
                    <span className="text-[10px] text-green-400 font-bold border border-green-400/30 bg-green-400/10 px-1 rounded">OK</span>
                    <span className="text-xs text-white/50">Health</span>
                    <span className="text-sm font-semibold">Cleared</span>
                </div>
            </div>

        </LiquidCard>
    );
}
