import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    // Inicializamos el hook con tu ID de Formspree
    const [state, handleSubmit] = useForm("xeevepkd");

    const handleDownload = () => {
        const pdfUrl = '/assets/EPK_Lotus_Collective.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Lotus_Collective_EPK.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Si el envío es exitoso, mostramos el mensaje de éxito
    if (state.succeeded) {
        return (
            <div className="w-full min-h-screen bg-black flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-8 border border-[var(--brass-dark)] bg-[var(--black-shadow)]"
                >
                    <h2 className="font-serif text-4xl mb-4 text-[var(--brass-bright)]">¡Gracias por escribirnos!</h2>
                    <p className="text-[var(--gray-400)] mb-6">Hemos recibido tu mensaje para Lotus Collective. Nos pondremos en contacto pronto.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="text-[var(--neon-coral)] border-b border-[var(--neon-coral)] uppercase tracking-widest text-xs font-bold"
                    >
                        Enviar otro mensaje
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-black pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--brass-dark)] opacity-10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--neon-coral)] opacity-5 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="font-serif text-6xl md:text-8xl mb-6 tracking-tight text-[var(--brass-bright)]">
                        Book Lotus
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--gray-400)] max-w-2xl mx-auto font-light">
                        Bring the tropical impressionism and neon funk of Lotus Collective to your next event.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Contact Info (Se mantiene igual) */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-1 space-y-8">
                        <div className="p-8 border border-[var(--brass-dark)] bg-[var(--black-shadow)]">
                            <h3 className="text-xs uppercase tracking-[0.2em] mb-6 font-bold text-[var(--gold-shimmer)]">Management</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs text-[var(--gray-500)] uppercase tracking-wider mb-1 font-bold">Email</p>
                                    <a href="mailto:booking@lotuscollective.com" className="text-[var(--gray-200)] hover:text-[var(--neon-coral)] transition-colors">
                                        booking@lotuscollective.com
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 border border-[rgba(255,255,255,0.05)] bg-[var(--black-shadow)] text-center">
                            <button onClick={handleDownload} className="text-xs uppercase tracking-widest border-b border-[var(--neon-coral)] pb-1 text-[var(--gray-200)] hover:text-[var(--neon-coral)] font-bold">
                                Download EPK
                            </button>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="md:col-span-2"
                    >
                        {/* Cambiamos la función del submit al handleSubmit de Formspree */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-[var(--gray-500)] font-bold">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-[var(--black-stage)] border border-[var(--gray-800)] text-[var(--gray-100)] p-4 focus:outline-none focus:border-[var(--neon-coral)]"
                                        placeholder="Your Name"
                                    />
                                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-[var(--gray-500)] font-bold">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-[var(--black-stage)] border border-[var(--gray-800)] text-[var(--gray-100)] p-4 focus:outline-none focus:border-[var(--neon-coral)]"
                                        placeholder="your@email.com"
                                    />
                                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-500" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-[var(--gray-500)] font-bold">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full bg-[var(--black-stage)] border border-[var(--gray-800)] text-[var(--gray-100)] p-4 focus:outline-none focus:border-[var(--neon-coral)] appearance-none cursor-pointer"
                                >
                                    <option value="" disabled selected>Select a Subject</option>
                                    <option value="booking">Booking Inquiry</option>
                                    <option value="press">Press / Media</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-[var(--gray-500)] font-bold">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="6"
                                    className="w-full bg-[var(--black-stage)] border border-[var(--gray-800)] text-[var(--gray-100)] p-4 focus:outline-none focus:border-[var(--neon-coral)] resize-none"
                                    placeholder="Tell us about your event..."
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500" />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-[var(--neon-coral)] text-white font-bold py-4 uppercase tracking-[0.2em] hover:bg-[var(--gold-glow)] hover:text-black transition-all duration-300 disabled:opacity-50"
                            >
                                {state.submitting ? 'Sending...' : 'Send Inquiry'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;