"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    interactive?: boolean;
}

export function LiquidCard({
    children,
    className,
    interactive = false,
    ...props
}: LiquidCardProps) {
    return (
        <motion.div
            whileTap={interactive ? { scale: 0.98 } : undefined}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={cn(
                "relative rounded-[24px] overflow-hidden p-6",
                "bg-white/10 backdrop-blur-2xl border border-white/20 shadow-xl",
                "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none before:rounded-[24px]",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
