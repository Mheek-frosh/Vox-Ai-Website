import { motion } from 'framer-motion';
import { Mic, Github, Twitter, Instagram, Mail, Linkedin } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer = () => {
    return (
        <footer className="pt-24 pb-12 bg-vox-bg border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-full bg-vox-purple flex items-center justify-center">
                                <Mic className="text-white w-5 h-5" />
                            </div>
                            <span className="text-xl font-bold text-white">Vox AI</span>
                        </div>
                        <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
                            An intelligent agent that helps founders and small teams manage daily operations,
                            decisions, and workflows through natural voice commands.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Github, Instagram, Linkedin, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-vox-purple/20 hover:text-vox-purple transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-white/50 text-sm">
                            <li><a href="#" className="hover:text-vox-purple transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-vox-purple transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-vox-purple transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-vox-purple transition-colors">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4 text-white/50 text-sm">
                            <li><a href="#" className="hover:text-vox-purple transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-vox-purple transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-vox-purple transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-vox-purple transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:row items-center justify-between pt-8 border-t border-white/5 gap-4">
                    <p className="text-white/30 text-xs">© 2026 Vox AI — Built for the future of work.</p>
                    <div className="text-5xl md:text-9xl font-bold text-white/5 pointer-events-none select-none tracking-tighter">
                        VOX AI
                    </div>
                </div>
            </div>
        </footer>
    );
};
