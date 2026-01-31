import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';

const plans = [
    {
        name: "Personal",
        price: "Free",
        desc: "Best for individual creators and early adopters.",
        features: [
            "100 voice commands/day",
            "Basic workflow integration",
            "iOS & Android app access",
            "Standard response time"
        ],
        cta: "Download Now",
        highlight: false
    },
    {
        name: "Pro",
        price: "$19",
        period: "/mo",
        desc: "Perfect for founders and power users.",
        features: [
            "Unlimited voice commands",
            "Advanced CRM & Task integrations",
            "Desktop & Terminal access",
            "Priority AI processing",
            "Early access to new features"
        ],
        cta: "Start Free Trial",
        highlight: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        desc: "Tailored for organizations and large teams.",
        features: [
            "Server-side deployment",
            "Dedicated support advisor",
            "Custom workflow builders",
            "Advanced security & encryption",
            "SLA guarantees"
        ],
        cta: "Contact Sales",
        highlight: false
    }
];

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-vox-bg relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-vox-purple/5 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-white/60">Choose the plan that fits your current stage of growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-10 rounded-[40px] glass-morphism border relative flex flex-col ${plan.highlight ? 'border-vox-purple border-2 scale-105 z-10 glow-shadow' : 'border-white/10'}`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vox-purple text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.period && <span className="text-white/40">{plan.period}</span>}
                                </div>
                                <p className="text-sm text-white/60 leading-relaxed">{plan.desc}</p>
                            </div>

                            <ul className="space-y-4 mb-10 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex gap-3 text-sm text-white/80">
                                        <div className="w-5 h-5 rounded-full bg-vox-purple/10 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 text-vox-purple" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={plan.highlight ? 'primary' : 'outline'}
                                className="w-full"
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
