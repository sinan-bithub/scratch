"use client";

import { useState } from "react";
import { PlayerCard } from "@/components/coach/PlayerCard";
import { Search } from "lucide-react";

export default function PlayerRoster() {
    const [search, setSearch] = useState("");

    const players: { name: string; position: string; avatarChar: string; status: "cleared" | "injured" | "pending" }[] = [
        { name: "Leo Messi Jr.", position: "Forward", avatarChar: "L", status: "cleared" },
        { name: "Jamal Musiala", position: "Midfielder", avatarChar: "J", status: "cleared" },
        { name: "Virgil van Dijk II", position: "Defender", avatarChar: "V", status: "injured" },
        { name: "Alisson B.", position: "Goalkeeper", avatarChar: "A", status: "pending" },
        { name: "Kevin D.", position: "Midfielder", avatarChar: "K", status: "cleared" },
        { name: "Erling H.", position: "Striker", avatarChar: "E", status: "cleared" },
    ];

    const filteredPlayers = players.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <main className="flex flex-col h-full w-full animate-float" style={{ animationDuration: '12s' }}>

            {/* Sticky Header */}
            <div className="sticky top-0 z-40 bg-gradient-to-b from-[#0a0e17] via-[#0a0e17]/90 to-transparent pt-4 pb-6 px-1">
                <h1 className="text-3xl font-bold tracking-tight text-white mb-4">Roster</h1>

                {/* Glass Search Input */}
                <div className="relative w-full group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="w-5 h-5 text-white/40 group-focus-within:text-accent-blue transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search players..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-2xl py-3 pl-12 pr-4 text-white placeholder:text-white/40 outline-none backdrop-blur-md focus:border-accent-blue/50 focus:bg-white/15 focus:ring-1 focus:ring-accent-blue/30 shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-all"
                    />
                </div>
            </div>

            {/* Roster List */}
            <div className="flex flex-col gap-2 flex-1 pb-10">
                {filteredPlayers.map((player) => (
                    <PlayerCard
                        key={player.name}
                        name={player.name}
                        position={player.position}
                        avatarChar={player.avatarChar}
                        status={player.status}
                    />
                ))}
            </div>

        </main>
    );
}
