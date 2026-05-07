import { Microscope } from 'lucide-react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  light?: boolean;
}

export default function Logo({ className = "", iconOnly = false, light = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`p-1.5 rounded-xl ${light ? 'bg-white/10' : 'bg-blue-600/10'}`}>
        <Microscope className={`w-8 h-8 ${light ? 'text-white' : 'text-blue-600'}`} />
      </div>
      {!iconOnly && (
        <span className={`text-2xl font-black tracking-tighter ${light ? 'text-white' : 'text-slate-900'}`}>
          MINAB<span className={light ? 'text-blue-300' : 'text-blue-600'}>LAB</span>
        </span>
      )}
    </div>
  );
}
