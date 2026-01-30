import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X, Battery, Wifi } from 'lucide-react';

export const MobileVoiceUI = () => {
    return (
        <div className="w-[280px] h-[580px] bg-vox-bg rounded-[3rem] border-[8px] border-zinc-900 overflow-hidden relative shadow-2xl flex flex-col">
            {/* Status Bar */}
            <div className="h-6 flex items-center justify-between px-6 pt-2">
                <span className="text-[10px] font-bold">9:41</span>
                <div className="flex gap-1.5 items-center">
                    <Wifi size={10} />
                    <Battery size={10} />
                </div>
            </div>

            <div className="p-8 flex-1 flex flex-col items-center justify-center text-center">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-24 h-24 rounded-full bg-vox-purple/20 flex items-center justify-center mb-8 relative"
                >
                    <div className="absolute inset-0 rounded-full border border-vox-purple/40 animate-ping" />
                    <div className="w-16 h-16 rounded-full bg-vox-purple flex items-center justify-center glow-shadow">
                        <Mic size={32} />
                    </div>
                </motion.div>

                <h3 className="text-xl font-bold mb-4">How can I help you today?</h3>

                <div className="flex gap-1 h-12 items-center mb-12">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                        <motion.div
                            key={i}
                            animate={{
                                height: [8, Math.random() * 40 + 10, 8],
                                opacity: [0.3, 1, 0.3]
                            }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                            className="w-1.5 bg-vox-purple rounded-full"
                        />
                    ))}
                </div>

                <div className="space-y-3 w-full">
                    <p className="text-sm text-white/60">Try saying:</p>
                    <div className="p-3 rounded-xl bg-zinc-900 text-xs border border-white/5">
                        "Schedule a call with Sarah for 5 PM"
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-900 text-xs border border-white/5">
                        "What's the weather in Tokyo?"
                    </div>
                </div>
            </div>

            <div className="p-8 flex justify-center">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-white/10 text-white/40">
                    <X size={18} />
                </div>
            </div>
        </div>
    );
};
