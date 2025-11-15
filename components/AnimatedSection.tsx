
import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedSectionProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id, className = '' }) => {
    return (
        <motion.section
            id={id.toLowerCase()}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`py-20 md:py-28 ${className}`}
        >
            {children}
        </motion.section>
    );
};

export default AnimatedSection;
