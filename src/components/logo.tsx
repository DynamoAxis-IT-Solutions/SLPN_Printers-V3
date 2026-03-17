'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Image 
        src="/logo.png" 
        alt="SLPN Printers" 
        width={200} 
        height={60} 
        className="w-auto h-auto object-contain" 
        priority 
      />
    </Link>
  );
}
