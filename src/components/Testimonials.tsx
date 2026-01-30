import { motion } from 'framer-motion';
import { Star, MessageSquareQuote } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Founder, CloudScale",
        text: "Vox AI has completely transformed how I manage my morning briefings. I just speak, and my entire day gets organized in Notion.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
        perspective: { rotateX: 5, rotateY: -10 }
    },
    {
        name: "David Chen",
        role: "Dev Lead, BitStream",
        text: "The terminal integration is insane. I can query my cloud costs and deploy stacks solely with voice while I'm deep in code.",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
        perspective: { rotateX: -5, rotateY: 10 }
    },
    {
        name: "Elena Rodriguez",
        role: "Product Designer",
        text: "The interface feels like it's alive. It's the first AI assistant that actually feels contextual and proactive rather than just reactive.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop",
        perspective: { rotateX: 8, rotateY: 5 }
    }
];

export const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-vox-bg overflow-hidden relative">
            {/* Background 3D Elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-vox-cyan/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-vox-purple/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="w-12 h-12 rounded-full bg-vox-purple/20 flex items-center justify-center mx-auto mb-6"
                    >
                        <Star className="text-vox-purple w-6 h-6 fill-vox-purple" />
                    </motion.div>
                    <h2 className="text-4xl font-bold mb-4">Unbeatable Experience</h2>
                    <p className="text-white/60">Trusted by founders and creatives worldwide to power their daily flow.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, delay: index * 0.2 }
                            }}
                            whileHover={{
                                rotateX: item.perspective.rotateX,
                                rotateY: item.perspective.rotateY,
                                scale: 1.05,
                                transition: { duration: 0.4 }
                            }}
                            className="relative perspective-1000"
                        >
                            <div className="p-10 rounded-[40px] glass-morphism border border-white/10 shadow-3xl bg-black/40 relative z-10 h-full flex flex-col">
                                <MessageSquareQuote className="w-10 h-10 text-vox-cyan/20 absolute top-8 right-8" />

                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-4 h-4 text-vox-cyan fill-vox-cyan" />
                                    ))}
                                </div>

                                <p className="text-lg italic text-white/90 leading-relaxed mb-8 flex-1">
                                    "{item.text}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full border-2 border-vox-purple/40 p-0.5 object-cover"
                                    />
                                    <div>
                                        <h4 className="font-bold text-sm">{item.name}</h4>
                                        <p className="text-[10px] text-white/40 uppercase tracking-widest">{item.role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Outer Glow Effect */}
                            <div className="absolute inset-0 bg-vox-purple/5 blur-[50px] -z-10 group-hover:bg-vox-purple/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
