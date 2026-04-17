import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const MAILCHIMP_URL =
  'https://lotuscollectivemusic.us21.list-manage.com/subscribe/post?u=9b5af858b2d624b06eb49323f&id=f30e838558&f_id=000297e6f0';

const STORAGE_KEY = 'lotus_popup_dismissed';
const POPUP_DELAY_MS = 30_000; // 30 seconds

/**
 * SubscriptionPopup
 *
 * Renders a full-screen overlay popup after a configurable delay (default 30 s).
 * Once the user dismisses or successfully subscribes, a flag is stored in
 * localStorage so the popup won't reappear during future visits.
 *
 * @param {object}  props
 * @param {string}  props.buttonText  — Dynamic CTA label (e.g. 'Subscribe' | 'Sign Up')
 * @param {number}  [props.delay]     — Override the default 90 000 ms delay
 */
const SubscriptionPopup = ({ buttonText = 'Subscribe', delay = POPUP_DELAY_MS }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  // ── Show popup after delay ──────────────────────────────────────────
  useEffect(() => {
    // Don't show again if already dismissed
    if (localStorage.getItem(STORAGE_KEY)) return;

    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  // ── Close handler ───────────────────────────────────────────────────
  const handleClose = useCallback(() => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  }, []);

  // ── Submit handler (mirrors NewsletterSection logic) ────────────────
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

      setStatus('success');
      setEmail('');
      // Auto-dismiss after showing success
      setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem(STORAGE_KEY, 'true');
      }, 3000);
    } catch {
      setStatus('error');
    }
  };

  // ── Close on Escape key ─────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    if (isVisible) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isVisible, handleClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          id="subscription-popup"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          {/* ── Backdrop ────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-lg"
          />

          {/* ── Modal ───────────────────────────────────────────── */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 40 }}
            transition={{ type: 'spring', damping: 22, stiffness: 180 }}
            className="relative w-full max-w-md overflow-hidden"
            style={{
              background: 'var(--black-stage)',
              border: '1px solid rgba(212, 175, 55, 0.15)',
            }}
          >
            {/* Gradient accent bar (top) */}
            <div className="h-[3px] w-full bg-gradient-to-r from-[#FF3B30] via-[#D4AF37] to-[#00E5FF]" />

            {/* Close button */}
            <button
              id="popup-close-btn"
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 text-white/40 hover:text-white transition-colors"
              style={{ transitionDuration: 'var(--timing-quarter)' }}
              aria-label="Close popup"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="px-8 pt-10 pb-8 text-center">
              {/* Decorative lotus emoji */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="text-4xl mb-4"
              >
                🪷
              </motion.div>

              {/* Label */}
              <span
                className="inline-block mb-3 font-body text-[10px] uppercase tracking-[0.4em]"
                style={{ color: 'var(--brass-bright)' }}
              >
                Join the Family
              </span>

              {/* Title */}
              <h2
                className="font-serif-display text-3xl md:text-4xl text-white mb-3 tracking-tight"
              >
                Don't miss{' '}
                <span className="italic" style={{ color: 'var(--brass-bright)' }}>
                  a thing
                </span>
              </h2>

              {/* Description */}
              <p className="font-body text-sm text-[#a3a3a3] mb-8 max-w-xs mx-auto leading-relaxed">
                Exclusive shows, new releases, and VIP content straight to your inbox.
              </p>

              {/* ── Form / Success State ─────────────────────── */}
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-3 bg-white/5 border px-6 py-5 font-body tracking-wide"
                    style={{ borderColor: 'rgba(212, 175, 55, 0.3)', color: 'var(--brass-bright)' }}
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Welcome to the Collective! 🪷</span>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <input
                      id="popup-email-input"
                      type="email"
                      name="EMAIL"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white font-body text-sm focus:outline-none transition-colors"
                      style={{
                        transitionDuration: 'var(--timing-quarter)',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(255, 59, 48, 0.5)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                    />

                    <motion.button
                      id="popup-subscribe-btn"
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                      whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                      className={`w-full py-4 font-body font-bold uppercase tracking-widest text-sm transition-colors ${
                        status === 'sending'
                          ? 'bg-zinc-700 text-zinc-400 cursor-wait'
                          : 'bg-[#FF3B30] text-white hover:bg-[#D4AF37]'
                      }`}
                      style={{ transitionDuration: 'var(--timing-quarter)' }}
                    >
                      {status === 'sending' ? 'Sending...' : buttonText}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Error message */}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-sm text-[#FF3B30] font-body"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}

              {/* Feature tags */}
              <div className="mt-6 flex justify-center gap-4 text-[#525252] text-[10px] uppercase tracking-[0.2em] font-bold flex-wrap">
                <span>No Spam</span>
                <span>•</span>
                <span>Exclusive Content</span>
                <span>•</span>
                <span>VIP Access</span>
              </div>

              {/* No thanks link */}
              <button
                id="popup-dismiss-btn"
                onClick={handleClose}
                className="mt-5 text-[11px] text-zinc-600 hover:text-zinc-400 transition-colors uppercase tracking-widest font-body"
                style={{ transitionDuration: 'var(--timing-quarter)' }}
              >
                No, thanks
              </button>
            </div>

            {/* Gradient accent bar (bottom) */}
            <div className="h-[3px] w-full bg-gradient-to-r from-[#00E5FF] via-[#D4AF37] to-[#FF3B30]" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SubscriptionPopup;
