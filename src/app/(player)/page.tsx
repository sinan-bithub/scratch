import { CheckInModule } from "@/components/CheckInModule";
import { LiquidCard } from "@/components/ui/LiquidCard";
import { Activity, Users, CalendarDays, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 w-full animate-float" style={{ animationDuration: '8s' }}>

      {/* Header Greeting */}
      <header className="flex justify-between items-center mb-2 mt-4 px-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            TRUCampPro
          </h1>
          <p className="text-white/60 text-sm mt-1">Hello, Player 👋</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 backdrop-blur-md shadow-inner overflow-hidden flex items-center justify-center">
          {/* Placeholder Avatar */}
          <span className="text-lg font-semibold">T</span>
        </div>
      </header>

      {/* Primary Action Card (Check-In) */}
      <section>
        <CheckInModule />
      </section>

      {/* Stats/Quick Actions Grid */}
      <section className="grid grid-cols-2 gap-4 mt-2">
        <LiquidCard interactive className="p-4 flex flex-col gap-3">
          <div className="p-2 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Activity className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold">85%</h3>
            <p className="text-xs text-white/50">Fitness Lvl</p>
          </div>
        </LiquidCard>

        <LiquidCard interactive className="p-4 flex flex-col gap-3">
          <div className="p-2 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-purple-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold">92%</h3>
            <p className="text-xs text-white/50">Attendance</p>
          </div>
        </LiquidCard>

        <LiquidCard interactive className="p-4 flex flex-col gap-3">
          <div className="p-2 w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <CalendarDays className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Today</h3>
            <p className="text-xs text-white/50">16:00 Session</p>
          </div>
        </LiquidCard>

        <LiquidCard interactive className="p-4 flex flex-col gap-3">
          <div className="p-2 w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold">U18</h3>
            <p className="text-xs text-white/50">Squad</p>
          </div>
        </LiquidCard>
      </section>

    </main>
  );
}
