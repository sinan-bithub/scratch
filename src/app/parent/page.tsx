import { ChildProfileCard } from "@/components/parent/ChildProfileCard";
import { AttendanceOverview } from "@/components/parent/AttendanceOverview";
import { UpcomingSchedule } from "@/components/parent/UpcomingSchedule";

export default function ParentDashboard() {
    return (
        <main className="flex flex-col gap-5 w-full animate-float relative" style={{ animationDuration: '10s' }}>

            {/* Top Header */}
            <header className="flex justify-between items-center mb-1 mt-2 px-1">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        Hey Parent 👋
                    </h1>
                    <p className="text-white/60 text-sm mt-1">Here is Leo's update.</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)] overflow-hidden flex items-center justify-center">
                    {/* Parent Avatar Placeholder */}
                    <span className="text-lg font-bold text-purple-400">P</span>
                </div>
            </header>

            {/* Child Profile Summary */}
            <section>
                <ChildProfileCard />
            </section>

            {/* Attendance Stats */}
            <section>
                <AttendanceOverview />
            </section>

            {/* Schedule Feed */}
            <section className="mb-24">
                <UpcomingSchedule />
            </section>

        </main>
    );
}
