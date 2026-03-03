"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiquidCard } from "@/components/ui/LiquidCard";
import { MapPin, CheckCircle2, Loader2, Navigation } from "lucide-react";

export function CheckInModule() {
    const [isCheckingIn, setIsCheckingIn] = useState(false);
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [locationStatus, setLocationStatus] = useState<string>("");

    const handleCheckIn = async () => {
        setIsCheckingIn(true);
        setLocationStatus("Verifying location...");

        // Mock API/Geolocation Latency
        setTimeout(() => {
            setIsCheckingIn(false);
            setIsCheckedIn(true);
            setLocationStatus("Verified 12m from Pitch Center");
        }, 2500);
    };

    return (
        <div className="w-full relative">
            <AnimatePresence>
                {isCheckingIn && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute -inset-4 z-0 bg-accent-blue/30 blur-[24px] rounded-[40px] animate-lava-flow pointer-events-none"
                    />
                )}
            </AnimatePresence>

            <LiquidCard className="z-10 relative overflow-hidden flex flex-col items-center text-center">

                {/* Header Icon */}
                <div className="mb-4">
                    <motion.div
                        className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-inner"
                        animate={isCheckingIn ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                        transition={{ repeat: isCheckingIn ? Infinity : 0, duration: 2 }}
                    >
                        {isCheckedIn ? (
                            <CheckCircle2 className="w-8 h-8 text-green-400" />
                        ) : (
                            <MapPin className="w-8 h-8 text-accent-blue" />
                        )}
                    </motion.div>
                </div>

                {/* Content */}
                <h2 className="text-2xl font-semibold mb-2 tracking-tight">
                    {isCheckedIn ? "Checked In!" : "Ready for Training?"}
                </h2>
                <p className="text-white/60 text-sm mb-6 min-h-[20px]">
                    {isCheckingIn ? locationStatus : (isCheckedIn ? "Have a great session." : "Must be within 50m of pitch")}
                </p>

                {/* Primary Action Button */}
                <motion.button
                    disabled={isCheckedIn || isCheckingIn}
                    whileTap={!isCheckedIn && !isCheckingIn ? { scale: 0.95 } : undefined}
                    onClick={handleCheckIn}
                    className={`
            w-full py-4 px-6 rounded-full flex items-center justify-center gap-2 font-medium text-lg transition-all duration-500
            ${isCheckedIn
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-white/10 hover:bg-white/20 border border-white/20 shadow-[0_0_20px_rgba(0,225,255,0.1)] hover:shadow-[0_0_30px_rgba(0,225,255,0.3)]'}
            backdrop-blur-md
          `}
                >
                    {isCheckingIn ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Verifying...</span>
                        </>
                    ) : isCheckedIn ? (
                        <>
                            <CheckCircle2 className="w-5 h-5" />
                            <span>Present</span>
                        </>
                    ) : (
                        <>
                            <Navigation className="w-5 h-5" />
                            <span>Tap to Check-In</span>
                        </>
                    )}
                </motion.button>
            </LiquidCard>
        </div>
    );
}
