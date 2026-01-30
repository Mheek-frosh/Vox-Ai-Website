import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { Button } from './ui/Button';

export const Newsletter = () => {
    return (
        <section className="py-24 bg-vox-bg relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto rounded-[40px] bg-vox-slate/50 border border-white/5 p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-vox-purple/5 blur-[100px] -z-10" />

                    <div className="flex-1 text-center md:text-left">
                        <div className="w-12 h-12 rounded-2xl bg-vox-purple/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                            <Mail className="text-vox-purple w-6 h-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay ahead of the curve</h2>
                        <p className="text-white/60 text-lg">
                            Get weekly insights on voice automation and early access to Vox AI updates. No spam, just excellence.
                        </p>
                    </div>

                    <div className="w-full md:w-auto min-w-[320px]">
                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-black/40 border border-white/10 rounded-full py-4 px-6 text-white focus:outline-none focus:border-vox-purple/50 transition-all group-hover:border-white/20"
                                />
                                <div className="absolute inset-0 bg-vox-purple/5 blur-xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity -z-10" />
                            </div>
                            <Button className="w-full md:w-auto flex items-center justify-center gap-2">
                                Subscribe <Send className="w-4 h-4" />
                            </Button>
                        </form>
                        <p className="text-[10px] text-white/30 mt-4 text-center md:text-left">
                            By subscribing, you agree to our Privacy Policy.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
