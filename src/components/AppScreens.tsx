import { motion, AnimatePresence } from 'framer-motion';
import { MobileDashboard } from './MobileDashboard';
import { MobileVoiceUI } from './MobileVoiceUI';
import { useState } from 'react';

export const AppScreens = () => {
    const [activeScreen, setActiveScreen] = useState(0);
    const screens = [
        { component: <MobileDashboard />, title: "Dashboard", desc: "Your central hub for tasks and insights." },
        { component: <MobileVoiceUI />, title: "Voice Control", desc: "Interact naturally with your digital environment." }
    ];

    return (
        <section className="py-24 bg-zinc-950/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Next-Gen Interface</h2>
                    <p className="text-white/60 max-w-xl mx-auto">Experience a new way of interacting with your technology.</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
                    <div className="flex-1 max-w-md">
                        <div className="space-y-8">
                            {screens.map((screen, i) => (
                                <motion.div
                                    key={i}
                                    onClick={() => setActiveScreen(i)}
                                    className={`p-6 rounded-3xl border transition-all cursor-pointer ${activeScreen === i ? 'bg-vox-purple/10 border-vox-purple/50 text-white' : 'bg-transparent border-white/5 text-white/40'}`}
                                >
                                    <h3 className="text-xl font-bold mb-2">{screen.title}</h3>
                                    <p className="text-sm">{screen.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeScreen}
                                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                {screens[activeScreen].component}
                            </motion.div>
                        </AnimatePresence>

                        {/* Glow effects around phone */}
                        <div className="absolute -inset-10 bg-vox-purple/10 rounded-full blur-[80px] -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
};

