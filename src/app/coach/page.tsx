import { QuickActions } from "@/components/coach/QuickActions";
import { AttendanceChart } from "@/components/coach/AttendanceChart";
import { LiquidCard } from "@/components/ui/LiquidCard";
import { Trophy, Clock } from "lucide-react";

export default function CoachDashboard() {
    return (
        <main className="flex flex-col gap-4 w-full animate-float relative" style={{ animationDuration: '10s' }}>

            {/* Top Header */}
            <header className="flex justify-between items-center mb-2 mt-2 px-1">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Hey Coach 👋
                    </h1>
                    <p className="text-white/60 text-sm mt-1">What's up today?</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,225,255,0.2)] overflow-hidden flex items-center justify-center">
                    {/* Coach Avatar Placeholder */}
                    <span className="text-lg font-bold text-accent-blue">C</span>
                </div>
            </header>

            {/* Stats Row */}
            <section className="grid grid-cols-2 gap-3">
                <LiquidCard className="p-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-white/50 mb-1">Total Players</p>
                        <h3 className="text-2xl font-bold">42</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-accent-blue">
                        <Trophy className="w-5 h-5" />
                    </div>
                </LiquidCard>

                <LiquidCard className="p-4 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-white/50 mb-1">Next Session</p>
                        <h3 className="text-xl font-bold text-green-400">16:30</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        <Clock className="w-5 h-5" />
                    </div>
                </LiquidCard>
            </section>

            {/* Primary Chart */}
            <section>
                <AttendanceChart />
            </section>

            {/* Quick Actions Grid */}
            <section>
                <QuickActions />
            </section>

            {/* Next Match/Event Snippet */}
            <section className="mb-24">
                <LiquidCard className="p-5 flex justify-between items-center relative overflow-hidden group">
                    {/* Subtle glow effect on the card */}
                    <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent-blue/10 blur-2xl rounded-full group-hover:bg-accent-blue/20 transition-all duration-500" />

                    <div>
                        <h4 className="font-semibold text-white/90">Upcoming Match</h4>
                        <p className="text-sm text-white/60 mt-1">vs. City Academy • Sat 10:00 AM</p>
                    </div>
                    <div className="px-4 py-2 bg-white/10 rounded-full border border-white/10 text-xs font-medium backdrop-blur-md">
                        View
                    </div>
                </LiquidCard>
            </section>

        </main>
    );
}
