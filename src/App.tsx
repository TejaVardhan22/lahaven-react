import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { StorefrontProvider } from '@/context/StorefrontContext';

const Home = lazy(() => import('@/pages/Home'));
const Cakes = lazy(() => import('@/pages/Cakes'));
const CakeDetail = lazy(() => import('@/pages/CakeDetail'));
const BentoCakes = lazy(() => import('@/pages/BentoCakes'));
const CustomCakes = lazy(() => import('@/pages/CustomCakes'));
const Desserts = lazy(() => import('@/pages/Desserts'));
const About = lazy(() => import('@/pages/About'));
const Outlets = lazy(() => import('@/pages/Outlets'));
const Contact = lazy(() => import('@/pages/Contact'));
const Franchise = lazy(() => import('@/pages/Franchise'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function InitialLoadingBar() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[120] h-[3px] w-full overflow-hidden bg-transparent"
      role="progressbar"
      aria-label="Loading application"
    >
      <div className="h-full w-full bg-gradient-to-r from-[#C35D51] via-[#E5BB67] to-[#C35D51] animate-route-progress" />
    </div>
  );
}

function App() {
  return (
    <StorefrontProvider>
      <ScrollToTop />
      <Suspense fallback={<InitialLoadingBar />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cakes" element={<Cakes />} />
            <Route path="/cakes/:slug" element={<CakeDetail />} />
            <Route path="/bento-cakes" element={<BentoCakes />} />
            <Route path="/custom-cakes" element={<CustomCakes />} />
            <Route path="/desserts" element={<Desserts />} />
            <Route path="/our-story" element={<About />} />
            <Route path="/about" element={<Navigate to="/our-story" replace />} />
            <Route path="/outlets" element={<Outlets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/franchise" element={<Franchise />} />
          </Route>
        </Routes>
      </Suspense>
    </StorefrontProvider>
  );
}

export default App;

