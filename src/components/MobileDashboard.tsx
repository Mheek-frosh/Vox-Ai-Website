import { motion } from 'framer-motion';
import { Mic, Activity, Battery, Wifi, Layout, User, Settings, Search } from 'lucide-react';

export const MobileDashboard = () => {
    return (
        <div className="w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-zinc-900 overflow-hidden relative shadow-2xl">
            {/* Status Bar */}
            <div className="h-6 flex items-center justify-between px-6 pt-2">
                <span className="text-[10px] font-bold">9:41</span>
                <div className="flex gap-1.5 items-center">
                    <Wifi size={10} />
                    <Battery size={10} />
                </div>
            </div>

            <div className="p-5">
                <div className="flex justify-between items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-white/5">
                        <User size={18} className="text-zinc-400" />
                    </div>
                    <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center border border-white/5">
                            <Search size={14} className="text-zinc-400" />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center border border-white/5">
                            <Settings size={14} className="text-zinc-400" />
                        </div>
                    </div>
                </div>

                <h2 className="text-xl font-bold mb-1">Hello, Alex</h2>
                <p className="text-xs text-white/40 mb-6">Vox AI is ready to assist you.</p>

                {/* Dynamic Activity Card */}
                <div className="p-4 rounded-2xl bg-linear-to-br from-vox-purple/20 to-vox-dark/20 border border-vox-purple/20 mb-4">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-vox-purple flex items-center justify-center">
                            <Activity size={14} />
                        </div>
                        <span className="text-xs font-medium">Activity Analysis</span>
                    </div>
                    <p className="text-[11px] text-white/70 leading-relaxed">
                        "You have 3 meetings today. I've optimized your schedule to include a 15-minute break."
                    </p>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                        { label: "Tasks", icon: Layout, count: 5 },
                        { label: "Voice", icon: Mic, count: 2 }
                    ].map((item, i) => (
                        <div key={i} className="p-3 rounded-2xl bg-zinc-900 border border-white/5">
                            <item.icon size={16} className="text-vox-purple mb-2" />
                            <p className="text-xs font-medium">{item.label}</p>
                            <p className="text-[10px] text-white/40">{item.count} Active</p>
                        </div>
                    ))}
                </div>

                {/* Visualizer Placeholder */}
                <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5 flex flex-col items-center">
                    <div className="flex gap-1 h-8 items-end mb-2">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                            <motion.div
                                key={i}
                                animate={{ height: [8, 16, 8] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                                className="w-1 bg-vox-purple/40 rounded-full"
                            />
                        ))}
                    </div>
                    <span className="text-[10px] text-white/30">System Status: Optimal</span>
                </div>
            </div>

            {/* Mic Button Tab */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 rounded-full bg-vox-purple flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                    <Mic size={24} />
                </div>
            </div>
        </div>
    );
};
