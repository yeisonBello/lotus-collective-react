import React from 'react';
import { motion } from 'framer-motion';

const SoundwaveDivider = ({ color = "rgba(255, 255, 255, 0.1)", className = "" }) => {
    return (
        <div className={`w-full overflow-hidden py-12 ${className}`}>
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="w-full h-8 md:h-12 opacity-50"
            >
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    d="M0,60 C150,110 300,10 450,60 C600,110 750,10 900,60 C1050,110 1200,60 1200,60"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                    d="M0,60 C200,20 400,100 600,60 C800,20 1000,100 1200,60"
                    fill="none"
                    stroke={color}
                    strokeWidth="1"
                    strokeDasharray="5,5"
                />
            </svg>
        </div>
    );
};

export default SoundwaveDivider;
