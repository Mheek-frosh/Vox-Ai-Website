import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Showcase } from './components/Showcase';
import { AppScreens } from './components/AppScreens';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
import { Apple, PlayCircle } from 'lucide-react';
import { Button } from './components/ui/Button';

function App() {
    return (
        <main className="bg-vox-bg min-h-screen text-white selection:bg-vox-purple/30">
            <Navbar />
            <Hero />
            <Features />
            <AppScreens />
            <Showcase />

            {/* CTA Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="rounded-[40px] bg-linear-to-br from-vox-purple to-vox-dark p-12 md:p-24 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 leading-tight">
                            Get Started with <br />
                            Vox AI today
                        </h2>
                        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">
                            Download on your mobile device or desktop system. Experience the future of voice automation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                            <Button size="lg" className="bg-white text-black hover:bg-white/90">
                                Get Started Now
                            </Button>
                            <div className="flex gap-4">
                                <Button size="lg" variant="outline" className="px-5">
                                    <Apple className="w-6 h-6" />
                                </Button>
                                <Button size="lg" variant="outline" className="px-5">
                                    <PlayCircle className="w-6 h-6" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default App;
