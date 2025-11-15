import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <motion.footer 
            className="text-center py-8 text-slate-500 dark:text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <p className="text-sm font-mono">
                Designed & Built by a world-class AI engineer.
            </p>
            <p className="text-sm mt-1 font-mono">
                &copy; {new Date().getFullYear()} Victor Tandoh
            </p>
        </motion.footer>
    );
};

export default Footer;