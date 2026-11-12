import React, { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import StorefrontDrawers from '@/components/storefront/StorefrontDrawers';

function RouteProgressIndicator() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[3px] w-full overflow-hidden bg-transparent"
      role="progressbar"
      aria-label="Loading page"
    >
      <div className="h-full w-full bg-gradient-to-r from-[#C35D51] via-[#E5BB67] to-[#C35D51] animate-route-progress" />
    </div>
  );
}

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-[#FEF0E5]">
      <Header />
      <main id="main-content" className="flex-grow">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <Suspense fallback={<RouteProgressIndicator />}>
              {children ?? <Outlet />}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <StorefrontDrawers />
    </div>
  );
}
