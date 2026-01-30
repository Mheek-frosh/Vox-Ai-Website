import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Showcase } from './components/Showcase';
import { AppScreens } from './components/AppScreens';
import { Solutions } from './components/Solutions';
import { Pricing } from './components/Pricing';
import { Resources } from './components/Resources';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/ui/Modal';
import { motion } from 'framer-motion';
import { Apple, PlayCircle } from 'lucide-react';
import { Button } from './components/ui/Button';
import { useState } from 'react';

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <main className="bg-vox-bg min-h-screen text-white selection:bg-vox-purple/30">
            <Navbar onDownload={openModal} />
            <Hero onDownload={openModal} />
            <Features />
            <AppScreens />
            <Solutions />
            <Showcase />
            <Testimonials />
            <Pricing />
            <Resources />
            <Newsletter />

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
                            Start your <br />
                            Vox AI journey
                        </h2>
                        <p className="text-white/80 text-lg mb-12 max-w-2xl mx-auto relative z-10">
                            Download on your mobile device or desktop system. Experience the future of voice automation.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                            <Button size="lg" className="bg-white text-black hover:bg-white/90" onClick={openModal}>
                                Download Now
                            </Button>
                            <div className="flex gap-4">
                                <Button size="lg" variant="outline" className="px-5" onClick={openModal}>
                                    <Apple className="w-6 h-6" />
                                </Button>
                                <Button size="lg" variant="outline" className="px-5" onClick={openModal}>
                                    <PlayCircle className="w-6 h-6" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />

            <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}

export default App;
