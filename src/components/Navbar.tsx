import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Mic } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-morphism' : 'py-6'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-vox-purple flex items-center justify-center glow-shadow">
                        <Mic className="text-white w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">Vox <span className="text-vox-purple">AI</span></span>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    {['Features', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                            {item}
                        </a>
                    ))}
                    <Button variant="primary" size="sm">Get Started</Button>
                </div>

                <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-full left-0 right-0 glass-morphism p-6 flex flex-col gap-4 border-t border-white/10"
                >
                    {['Features', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium text-white/70">
                            {item}
                        </a>
                    ))}
                    <Button variant="primary" className="w-full">Get Started</Button>
                </motion.div>
            )}
        </nav>
    );
};
