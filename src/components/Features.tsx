import { motion } from 'framer-motion';
import { Shield, Zap, Sparkles, Workflow, Smartphone, Globe } from 'lucide-react';

const features = [
    {
        title: "Workflow Awareness",
        description: "Connects with your existing tools and understands how work flows across them.",
        icon: Workflow,
        color: "from-purple-500/20 to-indigo-500/20"
    },
    {
        title: "Real-time Intelligence",
        description: "Vox understands context and urgency, prioritizing tasks based on your needs.",
        icon: Zap,
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Decision Support",
        description: "Get clear guidance and move faster with AI-driven insights for your projects.",
        icon: Sparkles,
        color: "from-fuchsia-500/20 to-purple-500/20"
    },
    {
        title: "Cross-Platform",
        description: "Available on iOS, Android, and Desktop systems for seamless interaction.",
        icon: Smartphone,
        color: "from-cyan-500/20 to-blue-500/20"
    },
    {
        title: "Privacy First",
        description: "Your voice data is encrypted and stays under your control at all times.",
        icon: Shield,
        color: "from-indigo-500/20 to-purple-500/20"
    },
    {
        title: "Global Connectivity",
        description: "Integrates with 500+ global apps to manage your entire digital ecosystem.",
        icon: Globe,
        color: "from-purple-500/20 to-fuchsia-500/20"
    }
];

export const Features = () => {
    return (
        <section id="features" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Features</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">Built to support your creative flow and daily operations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-3xl glass-morphism border border-white/5 hover:border-vox-purple/50 transition-all group`}
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-white/60 leading-relaxed text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
