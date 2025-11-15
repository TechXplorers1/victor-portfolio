import React from 'react';
import { motion } from 'framer-motion';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';

const socialLinks = [
    { icon: <GithubIcon />, href: 'https://github.com' },
    { icon: <LinkedinIcon />, href: 'https://linkedin.com' },
    { icon: <MailIcon />, href: 'mailto:victortandoh2@gmail.com' },
];

interface LeftSocialBarProps {
    isMounted: boolean;
}

const LeftSocialBar: React.FC<LeftSocialBarProps> = ({ isMounted }) => {
    if (!isMounted) return null;
    
    return (
        <motion.div
            className="hidden md:flex flex-col items-center fixed bottom-0 left-12 z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
        >
            <div className="flex flex-col items-center gap-6">
                {socialLinks.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-transform duration-300 ease-in-out hover:-translate-y-1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {React.cloneElement(link.icon, { className: 'w-6 h-6' })}
                    </motion.a>
                ))}
            </div>
            <div className="w-px h-24 bg-slate-400 dark:bg-slate-600 mt-6"></div>
        </motion.div>
    );
};

export default LeftSocialBar;