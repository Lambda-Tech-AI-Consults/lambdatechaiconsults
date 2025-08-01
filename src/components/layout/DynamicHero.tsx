'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const pageMeta: Record<string, { heading: string; bg?: string }> = {
  '/about': {
    heading: 'Empowering Growth Through Innovation',
    // bg: '/images/hero-about.jpg',
  },
  '/services': {
    heading: 'Transforming Energy Through Smart Solutions',
    // bg: '/images/hero-services.jpg',
  },
  '/contact': {
    heading: 'Let’s Connect and Create Impact',
    // bg: '/images/hero-contact.jpg',
  },
  '/partners': {
    heading: 'Driving Progress Through Strategic Partnerships',
    // bg: '/images/hero-partners.jpg',
  },
  '/industries': {
    heading: 'Powering Progress Across Industries',
    // bg: '/images/hero-industries.jpg',
  },
};

const defaultBg = '/images/dynamic-hero-bg.jpg';

const DynamicHero = () => {
  const pathname = usePathname();
  const meta = pageMeta[pathname];
  const showHero = pathname !== '/';
  
  return (
    <>
      {showHero && (
        <section className="relative w-full min-h-[50vh] flex items-center justify-center text-white">
          <Image
            src={meta?.bg || defaultBg}
            alt="Page background"
            fill
            className="object-cover opacity-80"
            priority
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold">{meta?.heading || pathname}</h1>
          </div>
        </section>
      )}
    </>
  );
};

export default DynamicHero;
