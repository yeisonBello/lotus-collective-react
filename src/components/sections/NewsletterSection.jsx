import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MAILCHIMP_URL = 'https://lotuscollectivemusic.us21.list-manage.com/subscribe/post?u=9b5af858b2d624b06eb49323f&id=f30e838558&f_id=000297e6f0';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || status === 'sending') return;

        setStatus('sending');

        try {
            const formData = new URLSearchParams();
            formData.append('EMAIL', email);
            formData.append('u', '9b5af858b2d624b06eb49323f');
            formData.append('id', 'f30e838558');
            formData.append('f_id', '000297e6f0');

            await fetch(MAILCHIMP_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors',
            });

            // no-cors means we can't read the response, but the request goes through
            setStatus('success');
            setEmail('');
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="py-32 relative bg-[#050505] overflow-hidden">
            {/* Textured Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/assets/gallery/studio/studio-1.jpg')] bg-cover bg-center grayscale contrast-125" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/90 to-black/80" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="font-serif-display text-5xl md:text-6xl text-white mb-6">Join the <span className="text-[#D4AF37] italic">Collective</span></h3>
                    <p className="text-[#a3a3a3] text-lg mb-12 max-w-xl mx-auto font-body">
                        Get the magic in your inbox. No spam, just pure funk, upcoming shows, and exclusive releases.
                    </p>

                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="max-w-md mx-auto"
                            >
                                <div className="flex items-center justify-center gap-3 bg-white/5 border border-[#D4AF37]/30 px-6 py-5 text-[#D4AF37] font-body tracking-wide">
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>You're in! Welcome to the Collective 🪷</span>
                                </div>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-4 text-xs text-zinc-500 hover:text-zinc-300 transition-colors uppercase tracking-widest"
                                >
                                    Subscribe another email
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                                onSubmit={handleSubmit}
                            >
                                <input
                                    type="email"
                                    name="EMAIL"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    required
                                    className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-white font-body focus:outline-none focus:border-[#FF3B30]/50 transition-colors"
                                />
                                <motion.button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                                    whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                                    className={`px-8 py-4 font-body font-bold uppercase tracking-widest text-sm transition-colors ${
                                        status === 'sending'
                                            ? 'bg-zinc-700 text-zinc-400 cursor-wait'
                                            : 'bg-[#FF3B30] text-white hover:bg-[#D4AF37]'
                                    }`}
                                >
                                    {status === 'sending' ? 'Sending...' : 'Subscribe'}
                                </motion.button>
                            </motion.form>
                        )}
                    </AnimatePresence>

                    {status === 'error' && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-4 text-sm text-[#FF3B30] font-body"
                        >
                            Something went wrong. Please try again.
                        </motion.p>
                    )}

                    <div className="mt-8 flex justify-center gap-6 text-[#525252] text-[10px] uppercase tracking-[0.2em] font-bold">
                        <span>Monthly Updates</span>
                        <span>•</span>
                        <span>Exclusive Content</span>
                        <span>•</span>
                        <span>VIP Access</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NewsletterSection;
