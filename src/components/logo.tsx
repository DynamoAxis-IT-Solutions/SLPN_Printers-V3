import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <a href="/" className={cn("flex items-center gap-2", className)}>
      <Image src="/logo.png" alt="SLPN Printers" width={32} height={32} />
      <span className="text-xl font-bold text-foreground">SLPN Printers</span>
    </a>
  );
}
