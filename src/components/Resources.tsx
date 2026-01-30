import { motion } from 'framer-motion';
import { BookOpen, Newspaper, Video, HelpCircle, ArrowRight } from 'lucide-react';

const resources = [
    {
        title: "Documentation",
        desc: "Explore our comprehensive guides to mastering voice automation.",
        icon: BookOpen,
        category: "Guides",
        color: "text-vox-cyan",
        bgColor: "bg-vox-cyan/10"
    },
    {
        title: "Creator Blog",
        desc: "Insights from founders using Vox to scale their daily operations.",
        icon: Newspaper,
        category: "Insights",
        color: "text-vox-purple",
        bgColor: "bg-vox-purple/10"
    },
    {
        title: "Video Tutorials",
        desc: "Watch how to set up complex multi-app workflows in minutes.",
        icon: Video,
        category: "Videos",
        color: "text-vox-cyan",
        bgColor: "bg-vox-cyan/10"
    },
    {
        title: "Help Center",
        desc: "Everything you need to troubleshoot and optimize your system.",
        icon: HelpCircle,
        category: "Support",
        color: "text-vox-purple",
        bgColor: "bg-vox-purple/10"
    }
];

export const Resources = () => {
    return (
        <section id="resources" className="py-24 bg-vox-bg">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold mb-4">Learn & Grow</h2>
                        <p className="text-white/60">Unlock the full potential of Vox AI with our curated library of resources and guides.</p>
                    </div>
                    <a href="#" className="flex items-center gap-2 text-vox-purple hover:underline mt-6 md:mt-0 font-medium tracking-tight">
                        View all resources <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {resources.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl glass-morphism border border-white/5 hover:bg-white/5 transition-all group flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center`}>
                                    <item.icon className={`w-6 h-6 ${item.color}`} />
                                </div>
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${item.color} bg-black/40 px-3 py-1 rounded-full`}>
                                    {item.category}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold mb-3 group-hover:text-vox-purple transition-colors">{item.title}</h3>
                            <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1">
                                {item.desc}
                            </p>

                            <button className="flex items-center gap-2 text-xs font-bold text-white/30 group-hover:text-white transition-colors">
                                READ MORE <ArrowRight className="w-3 h-3" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
