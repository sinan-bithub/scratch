"use client";

import { motion } from "framer-motion";
import { LiquidCard } from "@/components/ui/LiquidCard";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { day: "Mon", present: 85 },
    { day: "Tue", present: 88 },
    { day: "Wed", present: 82 },
    { day: "Thu", present: 95 },
    { day: "Fri", present: 90 },
    { day: "Sat", present: 98 },
    { day: "Sun", present: 92 },
];

export function AttendanceChart() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full mt-2"
        >
            <LiquidCard className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-lg tracking-tight">Attendance Overview</h3>
                    <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/70 border border-white/10">Last 7 Days</span>
                </div>

                <div className="h-[180px] w-full -ml-4">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorPresent" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#00e1ff" stopOpacity={0.5} />
                                    <stop offset="95%" stopColor="#00e1ff" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis
                                dataKey="day"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                                dy={10}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                                domain={[0, 100]}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: 'rgba(10, 14, 23, 0.8)',
                                    backdropFilter: 'blur(16px)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '12px',
                                    color: '#fff'
                                }}
                                itemStyle={{ color: '#00e1ff' }}
                                formatter={(value: number) => [`${value}%`, 'Present']}
                                labelStyle={{ color: 'rgba(255,255,255,0.5)' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="present"
                                stroke="#00e1ff"
                                strokeWidth={3}
                                fillOpacity={1}
                                fill="url(#colorPresent)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </LiquidCard>
        </motion.div>
    );
}
