import { motion } from 'framer-motion';
import { Briefcase, Code, BarChart3, Users } from 'lucide-react';

const solutions = [
    {
        title: "For Founders",
        description: "Automate meeting summaries, investor updates, and team syncs. Focus on vision while Vox handles the admin.",
        icon: Briefcase,
        color: "bg-vox-purple/10",
        iconColor: "text-vox-purple",
        borderColor: "hover:border-vox-purple/50"
    },
    {
        title: "For Developers",
        description: "Integrate Vox with your CI/CD pipelines, documentation, and issue trackers using natural voice commands.",
        icon: Code,
        description2: "Available for VS Code, IntelliJ, and Terminal.",
        iconCode: "vox docs search 'how to deploy'",
        color: "bg-vox-cyan/10",
        iconColor: "text-vox-cyan",
        borderColor: "hover:border-vox-cyan/50"
    },
    {
        title: "For Sales Teams",
        description: "Real-time CRM updates and lead tracking. Never miss a detail from a client call again.",
        icon: BarChart3,
        color: "bg-vox-purple/10",
        iconColor: "text-vox-purple",
        borderColor: "hover:border-vox-purple/50"
    },
    {
        title: "For Small Teams",
        description: "Coordinate workflows across remote members. Vox acts as the shared memory for your entire organization.",
        icon: Users,
        color: "bg-vox-cyan/10",
        iconColor: "text-vox-cyan",
        borderColor: "hover:border-vox-cyan/50"
    }
];

export const Solutions = () => {
    return (
        <section id="solutions" className="py-24 relative overflow-hidden bg-vox-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Solutions for Every Team</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">Vox AI adapts to your unique workflow, no matter the industry or scale.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-10 rounded-3xl glass-morphism border border-white/5 ${solution.borderColor} transition-all duration-300 group relative overflow-hidden`}
                        >
                            {/* Accent Background Glow */}
                            <div className={`absolute -top-24 -right-24 w-48 h-48 ${solution.color} blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-700`} />

                            <div className={`w-16 h-16 rounded-2xl ${solution.color} flex items-center justify-center mb-8`}>
                                <solution.icon className={`w-8 h-8 ${solution.iconColor}`} />
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                            <p className="text-white/60 leading-relaxed mb-6">{solution.description}</p>

                            {solution.description2 && (
                                <p className="text-xs font-mono text-white/30 mb-4">{solution.description2}</p>
                            )}

                            {solution.iconCode && (
                                <div className="bg-black/50 p-3 rounded-xl border border-white/5 font-mono text-xs text-vox-cyan/80">
                                    {`$ ${solution.iconCode}`}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
