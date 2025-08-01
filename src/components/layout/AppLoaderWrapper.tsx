'use client';
import { useEffect, useState } from 'react';
import Loader from './loader'; 

const AppLoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s loader
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <>{children}</>;
};

export default AppLoaderWrapper;
