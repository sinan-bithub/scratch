"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LiquidCard } from "@/components/ui/LiquidCard";
import { UserSquare, Users, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type Role = "COACH" | "PLAYER" | "PARENT";

export function LoginForm() {
    const [selectedRole, setSelectedRole] = useState<Role | null>("PLAYER");
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoggingIn(true);

        // Mock Authentication Delay
        setTimeout(() => {
            setIsLoggingIn(false);
            // Route based on selected Role
            if (selectedRole === "COACH") {
                router.push("/coach");
            } else if (selectedRole === "PARENT") {
                router.push("/parent"); // Placeholder for future parent view
            } else {
                router.push("/"); // Default Player View
            }
        }, 2000);
    };

    const roles: { id: Role; label: string; icon: React.ReactNode }[] = [
        { id: "COACH", label: "Coach", icon: <ShieldCheck className="w-6 h-6" /> },
        { id: "PLAYER", label: "Player", icon: <UserSquare className="w-6 h-6" /> },
        { id: "PARENT", label: "Parent", icon: <Users className="w-6 h-6" /> },
    ];

    return (
        <div className="w-full relative">
            <AnimatePresence>
                {isLoggingIn && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute -inset-4 z-0 bg-accent-blue/30 blur-[24px] rounded-[40px] animate-lava-flow pointer-events-none"
                    />
                )}
            </AnimatePresence>

            <LiquidCard className="z-10 relative overflow-hidden flex flex-col items-center">

                {/* Role Selection Row */}
                <div className="flex w-full justify-between gap-3 mb-8">
                    {roles.map((role) => {
                        const isActive = selectedRole === role.id;
                        return (
                            <motion.button
                                key={role.id}
                                type="button"
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedRole(role.id)}
                                className={cn(
                                    "flex-1 flex flex-col items-center justify-center gap-2 p-3 rounded-2xl transition-all duration-300 border backdrop-blur-md relative overflow-hidden",
                                    isActive
                                        ? "bg-white/20 border-accent-blue/50 shadow-[0_0_15px_rgba(0,225,255,0.2)]"
                                        : "bg-white/5 border-white/10 hover:bg-white/10"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeRoleGlow"
                                        className="absolute inset-0 bg-gradient-to-b from-accent-blue/20 to-transparent pointer-events-none"
                                    />
                                )}
                                <div className={cn("transition-colors duration-300", isActive ? "text-accent-blue" : "text-white/60")}>
                                    {role.icon}
                                </div>
                                <span className={cn("text-xs font-medium transition-colors duration-300", isActive ? "text-white" : "text-white/60")}>
                                    {role.label}
                                </span>
                            </motion.button>
                        )
                    })}
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">

                    <div className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email or Username"
                            required
                            className="w-full px-4 py-4 rounded-[20px] bg-black/20 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-accent-blue/50 focus:bg-white/5 focus:ring-1 focus:ring-accent-blue/50 transition-all backdrop-blur-lg"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full px-4 py-4 rounded-[20px] bg-black/20 border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-accent-blue/50 focus:bg-white/5 focus:ring-1 focus:ring-accent-blue/50 transition-all backdrop-blur-lg"
                        />
                    </div>

                    <div className="flex w-full justify-end mt-1 mb-2">
                        <button type="button" className="text-xs text-accent-blue/80 hover:text-accent-blue transition-colors relative z-20 pointer-events-auto cursor-pointer">
                            Forgot Password?
                        </button>
                    </div>

                    {/* Primary Submit Action */}
                    <motion.button
                        disabled={isLoggingIn || !selectedRole}
                        whileTap={selectedRole && !isLoggingIn ? { scale: 0.95 } : undefined}
                        type="submit"
                        className={cn(
                            "w-full py-4 px-6 rounded-full flex items-center justify-center gap-2 font-medium text-lg transition-all duration-500",
                            "bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md relative overflow-hidden",
                            "shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,225,255,0.2)]",
                            isLoggingIn ? "opacity-90 pointer-events-none" : ""
                        )}
                    >
                        {/* Micro Border Highlight effect */}
                        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                        {isLoggingIn ? (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                            >
                                <Loader2 className="w-5 h-5" />
                            </motion.div>
                        ) : (
                            <>
                                <span>Login Securely</span>
                                <ArrowRight className="w-5 h-5 opacity-70" />
                            </>
                        )}
                    </motion.button>

                </form>

            </LiquidCard>
        </div>
    );
}
