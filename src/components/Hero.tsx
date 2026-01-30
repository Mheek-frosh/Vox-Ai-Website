import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { Apple, PlayCircle, Mic } from 'lucide-react';
import logo from '../assets/logo.png'; // Resolved module error by adding tsconfig.json and typescript dependency

export const Hero = ({ onDownload }: { onDownload: () => void }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-vox-purple/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-vox-cyan/20 rounded-full blur-[100px] mix-blend-screen animate-gradient-xy" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="px-4 py-2 rounded-full border border-vox-purple/30 bg-vox-purple/10 text-vox-purple text-sm font-medium mb-6 inline-block">
                        Meet Vox AI — Your Future Operations Assistant
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight">
                        The AI voice assistant <br />
                        <span className="text-gradient">that thinks like you.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                        An intelligent voice system that works across mobile and desktop.
                        Automate tasks, manage workflow, and interact with your system naturally.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                        <Button size="lg" className="gap-3" onClick={onDownload}>
                            <Apple className="w-5 h-5" /> Download Now
                        </Button>
                        <Button size="lg" variant="outline" className="gap-3" onClick={onDownload}>
                            <PlayCircle className="w-5 h-5" /> Get it on PlayStore
                        </Button>
                    </div>
                </motion.div>

                {/* Central vox mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative max-w-4xl mx-auto"
                >
                    <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden glass-morphism border border-white/10 glow-shadow">
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360],
                                    borderRadius: ["40%", "50%", "40%"]
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                className="w-48 h-48 bg-linear-to-tr from-vox-purple via-vox-cyan to-vox-dark blur-2xl opacity-50"
                            />
                            <div className="z-10 text-center">
                                <img src={logo} alt="Vox AI Logo" className="w-32 h-32 mb-4 mx-auto animate-float drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                                <p className="text-white/80 font-mono">"Vox, schedule my meeting for 2 PM"</p>
                            </div>
                        </div>

                        {/* UI Overlay Elements */}
                        <div className="absolute top-8 left-8 p-4 glass-morphism rounded-xl border border-white/10 hidden md:block">
                            <div className="flex gap-2 items-center">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-mono">SYSTEM READY</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
