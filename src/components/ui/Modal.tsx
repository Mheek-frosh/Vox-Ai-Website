import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import logo from '../../assets/logo.png';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DownloadModal = ({ isOpen, onClose }: ModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-[101] px-6"
                    >
                        <div className="bg-vox-slate rounded-[32px] border border-white/10 p-8 text-center relative overflow-hidden shadow-2xl">
                            {/* Accent Glow */}
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-vox-purple/20 blur-[80px] rounded-full" />
                            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-vox-cyan/20 blur-[80px] rounded-full" />

                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <img src={logo} alt="Vox AI" className="w-16 h-16 mx-auto mb-6 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

                            <h3 className="text-2xl font-bold mb-3">Vox AI is coming soon!</h3>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                We're currently in private beta, polishing the experience for our Spring 2026 launch.
                                Join our newsletter to get early access invitation.
                            </p>

                            <div className="space-y-4">
                                <div className="text-xs font-bold uppercase tracking-widest text-vox-cyan mb-2">Available soon on:</div>
                                <div className="flex justify-center gap-6 text-white/30">
                                    <span className="text-xs font-semibold">iOS</span>
                                    <span className="text-xs font-semibold">Android</span>
                                    <span className="text-xs font-semibold">macOS</span>
                                    <span className="text-xs font-semibold">Windows</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
