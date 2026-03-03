"use client";

import { motion } from "framer-motion";
import { LiquidCard } from "@/components/ui/LiquidCard";
import { CalendarDays, CheckCircle2, XCircle } from "lucide-react";

export function AttendanceOverview() {
    const recentDays = [
        { day: "Mon", status: "present" },
        { day: "Tue", status: "present" },
        { day: "Wed", status: "absent" },
        { day: "Thu", status: "present" },
        { day: "Fri", status: "none" },
    ];

    return (
        <LiquidCard className="p-5 flex flex-col gap-4">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-semibold tracking-tight text-white/90">Attendance Rate</h3>
                    <p className="text-xs text-white/50 mt-1">Rolling 30 days</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-accent-blue/20 flex flex-col items-center justify-center border border-accent-blue/30 shadow-[0_0_15px_rgba(0,225,255,0.2)]">
                    <span className="text-sm font-bold text-accent-blue">88%</span>
                </div>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div>
                <p className="text-xs text-white/60 mb-3 font-medium flex items-center gap-2">
                    <CalendarDays className="w-3 h-3" /> Recent History
                </p>
                <div className="flex justify-between items-center w-full px-1">
                    {recentDays.map((day, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="text-[10px] text-white/40">{day.day}</div>
                            {day.status === "present" ? (
                                <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                                    <CheckCircle2 className="w-3 h-3 text-green-400" />
                                </div>
                            ) : day.status === "absent" ? (
                                <div className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                                    <XCircle className="w-3 h-3 text-red-400" />
                                </div>
                            ) : (
                                <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                    <span className="w-1 h-1 bg-white/30 rounded-full" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </LiquidCard>
    );
}
