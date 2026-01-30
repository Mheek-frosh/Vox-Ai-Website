import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button = ({
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...props
}: ButtonProps) => {
    const variants = {
        primary: 'bg-vox-purple hover:bg-vox-purple/90 text-white glow-shadow',
        secondary: 'bg-vox-dark hover:bg-vox-dark/90 text-white',
        outline: 'border border-white/10 hover:bg-white/5 text-white',
        ghost: 'hover:bg-white/5 text-white',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg font-semibold',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
                'rounded-full transition-all duration-200 flex items-center justify-center gap-2',
                variants[variant],
                sizes[size],
                className
            )}
            {...(props as any)}
        >
            {children}
        </motion.button>
    );
};
