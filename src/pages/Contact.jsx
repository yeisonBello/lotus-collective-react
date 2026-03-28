import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // IMPORTANTE: Reemplaza 'YOUR_FORM_ID_AQUI' con el código de tu formulario en Formspree
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_AQUI', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formState)
            });

            if (response.ok) {
                setStatus('success');
                setFormState({ name: '', email: '', subject: '', message: '' });
                alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
            } else {
                setStatus('error');
                alert('Hubo un problema al enviar el formulario. Intenta de nuevo.');
            }
        } catch (error) {
            setStatus('error');
            alert('Hubo un problema de conexión al enviar el formulario.');
            console.error(error);
        }
    };

    const handleDownload = () => {
        const pdfUrl = '/assets/EPK_Lotus_Collective.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Lotus_Collective_EPK.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-center mb-16"
                >
                    <h1
                        className="font-serif text-6xl md:text-8xl mb-6 tracking-tight"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--brass-bright)' }}
                    >
                        Book Lotus
                    </h1>
                    <p
                        className="text-lg md:text-xl text-[var(--gray-400)] max-w-2xl mx-auto font-light leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        From intimate jazz clubs to main stage festivals. Bring the tropical impressionism and neon funk of Lotus Collective to your next event.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="md:col-span-1 space-y-8"
                    >
                        <div className="p-8 border border-[var(--brass-dark)] bg-[var(--black-shadow)]">
                            <h3 className="text-xs uppercase tracking-[0.2em] mb-6 font-bold" style={{ color: 'var(--gold-shimmer)', fontFamily: 'var(--font-body)' }}>
                                Management
                            </h3>

                            <div className="space-y-6">
                                <div>
                                    <p className="text-xs text-[var(--gray-500)] uppercase tracking-wider mb-1 font-bold">Email</p>
                                    <a href="mailto:booking@lotuscollective.com" className="text-[var(--gray-200)] hover:text-[var(--neon-coral)] transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                                        booking@lotuscollective.com
                                    </a>
                                </div>
                                <div>
                                    <p className="text-xs text-[var(--gray-500)] uppercase tracking-wider mb-1 font-bold">Location</p>
                                    <p className="text-[var(--gray-200)]" style={{ fontFamily: 'var(--font-body)' }}>
                                        Miami, Florida<br />
                                        Available Worldwide
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 border border-[rgba(255,255,255,0.05)] bg-[var(--black-shadow)]">
                            <h3 className="text-xs uppercase tracking-[0.2em] mb-4 font-bold" style={{ color: 'var(--gray-400)', fontFamily: 'var(--font-body)' }}>
                                Press Kit
                            </h3>
                            <p className="text-sm text-[var(--gray-500)] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                                Download our EPK for high-res photos, bio, and technical rider.
                            </p>
                            <button onClick={handleDownload} className="text-xs uppercase tracking-widest border-b border-[var(--neon-coral)] pb-1 text-[var(--gray-200)] hover:text-[var(--neon-coral)] transition-colors font-bold">
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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-[var(--gray-500)] font-bold">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[var(--black-stage)] border border-[var(--gray-800)] text-[var(--gray-100)] p-4 focus:outline-none focus:border-[var(--neon-coral)] transition-colors placeholder-[var(--gray-600)]"
                                        placeholder="Your Name"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs uppercase tracking-widest text-[var(--gray-500)] font-bold">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[var(--black-stage)] border border-[var(--gray-800)] text-[var(--gray-100)] p-4 focus:outline-none focus:border-[var(--neon-coral)] transition-colors placeholder-[var(--gray-600)]"
                                        placeholder="your@email.com"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs uppercase tracking-widest text-[var(--gray-500)] font-bold">Subject</label>
                                <div className="relative">
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-[var(--black-stage)] border border-[var(--gray-800)] text-[var(--gray-100)] p-4 focus:outline-none focus:border-[var(--neon-coral)] transition-colors appearance-none cursor-pointer"
                                        style={{ fontFamily: 'var(--font-body)' }}
                                    >
                                        <option value="" disabled>Select a Subject</option>
                                        <option value="booking">Booking Inquiry</option>
                                        <option value="press">Press / Media</option>
                                        <option value="collaboration">Collaboration</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[var(--gray-500)]">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs uppercase tracking-widest text-[var(--gray-500)] font-bold">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full bg-[var(--black-stage)] border border-[var(--gray-800)] text-[var(--gray-100)] p-4 focus:outline-none focus:border-[var(--neon-coral)] transition-colors placeholder-[var(--gray-600)] resize-none"
                                    placeholder="Tell us about your event..."
                                    style={{ fontFamily: 'var(--font-body)' }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[var(--neon-coral)] text-white font-bold py-4 uppercase tracking-[0.2em] hover:bg-[var(--gold-glow)] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(255,59,48,0.2)] hover:shadow-[0_0_30px_rgba(255,59,48,0.6)]"
                            >
                                Send Inquiry
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
