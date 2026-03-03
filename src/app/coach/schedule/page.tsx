import { LiquidCard } from "@/components/ui/LiquidCard";
import { CalendarDays, MapPin, Clock, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CoachSchedule() {
    const scheduleItems = [
        {
            type: "training",
            title: "Tactical Drill: High Press",
            time: "16:30 - 18:00",
            location: "Pitch A (Main)",
            attendance: "18 / 22 Expected",
        },
        {
            type: "match",
            title: "Match vs. City Academy",
            time: "Saturday, 10:00 AM",
            location: "Away Stadium",
            attendance: "U12 Elite Squad",
            isNext: true,
        },
        {
            type: "training",
            title: "Recovery & Video Review",
            time: "Sunday, 09:00 AM",
            location: "Film Room B",
            attendance: "Full Squad",
        }
    ];

    return (
        <main className="flex flex-col h-full w-full animate-float pb-24" style={{ animationDuration: '15s' }}>

            {/* Header */}
            <div className="pt-4 pb-6 px-1 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Schedule</h1>
                    <p className="text-white/60 text-sm">Upcoming events and agenda.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent-blue/20 backdrop-blur-md border border-accent-blue/30 flex items-center justify-center text-accent-blue shadow-[0_0_15px_rgba(0,225,255,0.4)] cursor-pointer hover:bg-accent-blue/30 transition-colors">
                    <CalendarDays className="w-5 h-5" />
                </div>
            </div>

            {/* Date Picker Ribbon (Static Mock) */}
            <div className="flex gap-3 overflow-x-auto pb-4 mb-4 hide-scrollbar px-1">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
                    <div
                        key={day}
                        className={cn(
                            "flex-shrink-0 flex flex-col items-center justify-center w-14 h-20 rounded-2xl border backdrop-blur-md transition-all cursor-pointer",
                            i === 0
                                ? "bg-accent-blue/20 border-accent-blue/50 text-white shadow-[0_0_15px_rgba(0,225,255,0.3)]"
                                : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10"
                        )}
                    >
                        <span className="text-xs uppercase font-semibold mb-1">{day}</span>
                        <span className={cn("text-xl font-bold", i === 0 && "text-accent-blue")}>{12 + i}</span>
                    </div>
                ))}
            </div>

            {/* Timeline List */}
            <div className="flex flex-col gap-4 relative">

                {/* Vertical Timeline Track */}
                <div className="absolute left-[20px] top-4 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-white/10 to-transparent z-0" />

                {scheduleItems.map((item, idx) => (
                    <div key={idx} className="relative z-10 pl-12 pr-1">
                        {/* Timeline Marker */}
                        <div className={cn(
                            "absolute left-[13px] top-6 w-4 h-4 rounded-full border-2 border-[#0a0e17] z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]",
                            item.type === "match" ? "bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" : "bg-accent-blue shadow-[0_0_12px_rgba(0,225,255,0.8)]"
                        )} />

                        <LiquidCard className={cn(
                            "p-4 relative overflow-hidden group border",
                            item.isNext ? "border-accent-blue/40 shadow-[0_0_20px_rgba(0,225,255,0.1)]" : "border-white/10"
                        )}>
                            {item.isNext && (
                                <div className="absolute top-0 right-0 bg-accent-blue text-[#0a0e17] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-[0_0_10px_rgba(0,225,255,0.5)] z-10">
                                    Up Next
                                </div>
                            )}

                            {/* Hover Flare */}
                            <div className={cn(
                                "absolute -right-8 -top-8 w-32 h-32 blur-2xl rounded-full transition-all duration-500 pointer-events-none group-hover:opacity-100",
                                item.type === "match" ? "bg-purple-500/10 opacity-0" : "bg-accent-blue/10 opacity-0"
                            )} />

                            <h3 className="font-bold text-lg text-white tracking-tight mb-3 pr-16">{item.title}</h3>

                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                    <Clock className="w-4 h-4 text-white/40" />
                                    <span>{item.time}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/70 text-sm">
                                    <MapPin className="w-4 h-4 text-white/40" />
                                    <span>{item.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/70 text-sm mt-1 pt-2 border-t border-white/10">
                                    <Users className="w-4 h-4 text-white/40" />
                                    <span className="font-medium">{item.attendance}</span>
                                </div>
                            </div>
                        </LiquidCard>
                    </div>
                ))}

            </div>

        </main>
    );
}
