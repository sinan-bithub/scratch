"use client";

import { motion } from "framer-motion";
import { LiquidCard } from "@/components/ui/LiquidCard";
import { Calendar, MapPin, Clock } from "lucide-react";

export function UpcomingSchedule() {
    const schedule = [
        {
            type: "Match Day",
            title: "vs. City Academy",
            date: "Saturday, 10:00 AM",
            location: "East Side Pitch",
            isMatch: true,
        },
        {
            type: "Training",
            title: "Tactical Setup",
            date: "Tuesday, 16:30 PM",
            location: "Main Training Ground",
            isMatch: false,
        },
        {
            type: "Training",
            title: "Recovery Session",
            date: "Thursday, 17:00 PM",
            location: "Gym Area",
            isMatch: false,
        },
    ];

    return (
        <div className="w-full flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-1 px-1">
                <Calendar className="w-5 h-5 text-accent-blue" />
                <h3 className="text-lg font-semibold tracking-tight text-white/90">Upcoming Schedule</h3>
            </div>

            {schedule.map((event, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                    <LiquidCard className="p-4 flex flex-col gap-3 relative overflow-hidden group">
                        {event.isMatch && (
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 blur-[30px] rounded-full pointer-events-none group-hover:bg-accent-blue/20 transition-all duration-500" />
                        )}

                        <div className="flex justify-between items-start z-10">
                            <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-sm border backdrop-blur-sm ${event.isMatch
                                    ? "bg-accent-blue/20 text-accent-blue border-accent-blue/30"
                                    : "bg-white/10 text-white/70 border-white/10"
                                }`}>
                                {event.type}
                            </span>
                        </div>

                        <div className="z-10">
                            <h4 className="text-lg font-bold text-white mb-2">{event.title}</h4>

                            <div className="flex flex-col gap-1.5">
                                <div className="flex items-center gap-2 text-white/60 text-xs">
                                    <Clock className="w-3.5 h-3.5" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2 text-white/60 text-xs text-accent-blue/80">
                                    <MapPin className="w-3.5 h-3.5" />
                                    <span>{event.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Minimal interaction hint */}
                        <div className="absolute bottom-4 right-4 z-10">
                            <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                <span className="text-white/40 text-lg group-hover:text-accent-blue">›</span>
                            </div>
                        </div>

                    </LiquidCard>
                </motion.div>
            ))}
        </div>
    );
}
