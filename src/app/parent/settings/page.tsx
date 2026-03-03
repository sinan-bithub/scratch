import { LiquidCard } from "@/components/ui/LiquidCard";
import { User, Bell, Shield, LogOut, ChevronRight, UserPlus, Heart } from "lucide-react";
import Link from "next/link";

export default function ParentSettings() {
    return (
        <main className="flex flex-col h-full w-full animate-float pb-24" style={{ animationDuration: '14s' }}>

            {/* Header */}
            <div className="pt-4 pb-6 px-1">
                <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Settings</h1>
                <p className="text-white/60 text-sm">Manage family profile and preferences.</p>
            </div>

            {/* Profile Snippet */}
            <div className="mb-6">
                <LiquidCard className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
                            <span className="text-2xl font-bold text-emerald-400">P</span>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-xl font-bold text-white tracking-tight">Parent Account</h2>
                            <p className="text-white/50 text-sm">Family Guardian</p>
                        </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <UserPlus className="w-5 h-5 text-white/40" />
                    </div>
                </LiquidCard>
            </div>

            {/* Linked Players */}
            <section className="mb-6">
                <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-2 ml-2 flex items-center gap-2">
                    <Heart className="w-4 h-4 text-rose-400" /> Linked Athletes
                </h3>
                <LiquidCard className="flex flex-col divide-y divide-white/10 overflow-hidden">
                    <div className="flex items-center justify-between p-4 bg-white/5">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/50 flex flex-shrink-0 items-center justify-center">
                                <span className="text-sm font-bold text-purple-400">T</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white/90 font-medium tracking-tight">Tyler Player</span>
                                <span className="text-xs text-white/50">U18 Academy</span>
                            </div>
                        </div>
                        <div className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-1 rounded-full border border-emerald-500/30 uppercase tracking-wider">
                            Viewing
                        </div>
                    </div>
                </LiquidCard>
            </section>

            {/* Settings Groups */}
            <div className="flex flex-col gap-6">

                {/* Account */}
                <section>
                    <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-2 ml-2">Account</h3>
                    <LiquidCard className="flex flex-col divide-y divide-white/10 overflow-hidden">
                        <SettingsRow icon={<User className="w-5 h-5" />} label="Personal Information" />
                        <SettingsRow icon={<Shield className="w-5 h-5" />} label="Security & Privacy" />
                    </LiquidCard>
                </section>

                {/* Preferences */}
                <section>
                    <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-2 ml-2">Preferences</h3>
                    <LiquidCard className="flex flex-col divide-y divide-white/10 overflow-hidden">
                        <SettingsRow icon={<Bell className="w-5 h-5" />} label="Notification Rules" value="Email, SMS" />
                    </LiquidCard>
                </section>

                {/* Danger Zone */}
                <section className="mt-4 mb-8">
                    <Link href="/login" className="w-full block">
                        <div className="w-full relative group overflow-hidden rounded-2xl bg-red-500/10 border border-red-500/30 p-4 transition-all hover:bg-red-500/20 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                            <div className="relative z-10 flex items-center justify-center gap-2 text-red-400 font-semibold">
                                <LogOut className="w-5 h-5" />
                                <span>Sign Out</span>
                            </div>
                        </div>
                    </Link>
                </section>

            </div>
        </main>
    );
}

function SettingsRow({ icon, label, value }: { icon: React.ReactNode; label: string; value?: string }) {
    return (
        <div className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="flex items-center gap-3">
                <div className="text-white/50 group-hover:text-emerald-400 transition-colors">
                    {icon}
                </div>
                <span className="text-white/90 font-medium group-hover:text-white transition-colors">{label}</span>
            </div>
            <div className="flex items-center gap-2">
                {value && <span className="text-sm text-white/40">{value}</span>}
                <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors" />
            </div>
        </div>
    );
}
