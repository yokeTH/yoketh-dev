import { cn } from '@repo/ui/lib/utils';
import * as motion from 'motion/react-client';

export default function Highlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.h1
      className={cn(
        'text-shadow-black text-shadow-lg block w-max cursor-pointer bg-red-500',
        className,
      )}
      whileHover={{ padding: '4px', x: [0, -5, 5, -5, 5, 0] }}
    >
      {children}
    </motion.h1>
  );
}
