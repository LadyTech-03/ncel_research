import { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
}

const SectionWrapper = ({ children, className = '' }: SectionWrapperProps) => {
    return (
        <div className={`max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};

export default SectionWrapper;