import React, { createContext, useState, useCallback, useEffect } from 'react';

export interface RouterContextType {
  path: string;
  navigate: (path: string, options?: { replace?: boolean }) => void;
}

export const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(() => {
    // Get initial path from hash or default to '/'
    const hash = window.location.hash.slice(1);
    return hash || '/';
  });

  // Handle hash changes from browser back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setPath(hash || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((newPath: string, options?: { replace?: boolean }) => {
    setPath(newPath);
    const hashPath = `#${newPath}`;
    if (options?.replace) {
      window.history.replaceState(null, '', hashPath);
    } else {
      window.history.pushState(null, '', hashPath);
    }
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = React.useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}
