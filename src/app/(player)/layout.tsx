import { PlayerBottomNav } from "@/components/ui/PlayerBottomNav";

export default function PlayerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen relative w-full h-full">
            {/* Main Scrolling Content Area */}
            <div className="flex-1 w-full pb-32 overflow-y-auto">
                {children}
            </div>

            {/* Global Fixed Navigation Dock (Outside scrolling context) */}
            <PlayerBottomNav />
        </div>
    );
}
