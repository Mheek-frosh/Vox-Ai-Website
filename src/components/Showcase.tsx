import { motion } from 'framer-motion';
import { Smartphone, Laptop, Mic, CheckCircle2 } from 'lucide-react';

export const Showcase = () => {
    return (
        <section className="py-24 bg-linear-to-b from-transparent to-vox-purple/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            One assistant, <br />
                            <span className="text-vox-purple">every device.</span>
                        </h2>
                        <p className="text-lg text-white/60 mb-10">
                            Vox AI isn't just an app — it's a seamless layer across your entire workflow.
                            Whether you're on your phone or at your desk, Vox is there to help.
                        </p>

                        <ul className="space-y-6">
                            {[
                                "Natural voice processing with 99.9% accuracy",
                                "Infinite workflow integrations with your favorite tools",
                                "Sub-millisecond response times across all systems",
                                "Advanced context awareness for complex task handling"
                            ].map((text, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 py-2"
                                >
                                    <div className="w-6 h-6 rounded-full bg-vox-purple/20 flex items-center justify-center text-vox-purple">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <span className="text-white/80">{text}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-vox-purple/10 rounded-full blur-[100px]" />
                        <motion.div
                            initial={{ opacity: 0, rotateY: 20 }}
                            whileInView={{ opacity: 1, rotateY: 0 }}
                            transition={{ duration: 1 }}
                            className="relative z-10 p-4 glass-morphism rounded-[40px] border border-white/10 shadow-2xl"
                        >
                            <div className="bg-black/80 rounded-[32px] overflow-hidden border border-white/5 aspect-[9/16] md:aspect-video relative">
                                {/* Simulated App UI */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end gap-6 bg-gradient-to-t from-black via-transparent to-transparent">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-vox-purple flex items-center justify-center glow-shadow">
                                            <Mic className="text-white w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Vox AI is typing...</p>
                                            <p className="text-xs text-white/40">Analyzing your request</p>
                                        </div>
                                    </div>
                                    <div className="p-4 glass-morphism rounded-2xl border border-white/10">
                                        <p className="text-sm italic">"I've updated your project timeline in Notion and sent the summary to the dev team via Slack."</p>
                                    </div>
                                </div>

                                {/* Device Icons UI */}
                                <div className="absolute top-8 right-8 flex flex-col gap-4">
                                    <div className="p-3 glass-morphism rounded-xl border border-white/10 text-vox-purple">
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <div className="p-3 glass-morphism rounded-xl border border-white/10 text-white/40">
                                        <Laptop className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
